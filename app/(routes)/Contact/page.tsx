"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import { Input } from "@/components/input/Input";
import { useMyContext } from "@/context/ListContext";
import { CardCheckout } from "@/components/card-checkout/CardCheckout";
import { Product } from "@/types/types";
import { useWindowSize } from "@/utils/size/useWindowsSize";
import { DownIcon, UpIcon } from "@/Icons/CartIcon";
import { formatoContabilidad } from "@/utils/functions/buttonMain";
import { useRouter } from "next/navigation";
import { ContactFormAction } from "@/app/actions";
import { bagCheckoutAction } from "@/app/actions/checkoutAction";

interface Order {
  email: string;
  number: string;
  name: string;
  direction: string;
  pay: string;
  delivery: string;
  aditionalMsg?: string;
}

function validate(input: Order) {
  let errors = {
    email: "",
    number: "",
    name: "",
    direction: "",
    pay: "",
    delivery: "",
    aditionalMsg: "",
  };

  const regexName = /^([a-zA-Z ]+)$/i;
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!input.name) {
    errors.name = "El nombre es requerido";
  }

  if (input.name && !regexName.test(input.name)) {
    errors.name = "Inserta un nombre válido";
  }

  if (input.name.length > 15 || input.name.length < 4) {
    errors.name = "El nombre debe tener entre 4 y 15 caracteres";
  }

  if (!input.number) {
    errors.number = "El número de teléfono es requerido";
  }

  if (input.number.length > 12 || input.number.length < 8) {
    errors.number = "El número debe tener entre 8 y 12 dígitos";
  }

  if (!input.direction) {
    errors.direction = "La dirección es requerida";
  }

  if (input.direction.length > 25 || input.direction.length < 4) {
    errors.direction = "La dirección debe tener entre 4 y 25 caracteres";
  }

  if (input.aditionalMsg && input.aditionalMsg.length > 60) {
    errors.aditionalMsg = "Superaste el máximo de 60 caracteres";
  }

  if (!input.email) {
    errors.email = "El correo electrónico es requerido";
  }

  if (input.email && !regexEmail.test(input.email)) {
    errors.email = "Inserta un correo electrónico válido";
  }

  return errors;
}

const Contact = () => {
  const windowSize = useWindowSize();
  const { Cart } = useMyContext();
  const totalPrice = Cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const [shopOpen, setShopOpen] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<Order>({
    email: "",
    number: "",
    name: "",
    direction: "",
    pay: "EFECTIVO (CONTRA ENTREGA)",
    delivery: "EN DOMICILIO",
    aditionalMsg: "",
  });



const formRef = useRef<HTMLFormElement>(null);
const [loading, setLoading] = useState<boolean>(false);
// const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
const router = useRouter()


const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
       
        const formData = new FormData(formRef.current!);
        const result: { success: boolean } = await ContactFormAction(formData);

        if (result.success) {
            router.push("/")
            formRef.current?.reset();
            // setToast({ message: 'Formulario enviado con éxito', type: 'success' });
        } else {
            router.push("/")
            formRef.current?.reset();
            // setToast({ message: 'Hubo un error al enviar el formulario', type: 'error' });
        }
    } catch (error) {
        router.push("/")
        formRef.current?.reset();
        // setToast({ message: 'Hubo un error al validar el reCAPTCHA', type: 'error' });
    } finally {
        setLoading(false);
    }
}


const testFunction =  ({ Cart, totalPrice }: { Cart: Product[], totalPrice: number }) => {
  const cleanCart =  Cart.map((e: Product) => ({
      amount: e.amount,
      name: e.name,
      id: e.id,
      price: e.price
  }));
  return {
      cleanCart, totalPrice
  };
};


  const [errors, setErrors] = useState({
    email: "",
    number: "",
    name: "",
    direction: "",
    pay: "",
    delivery: "",
    aditionalMsg: "",
  });

  useEffect(() => {
    if (windowSize.width > 1000) {
      setShopOpen(true);
    } else {
      setShopOpen(false);
    }
  }, [windowSize.width]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;

    setInputValues({
      ...inputValues,
      [name]: value,
    });

    setErrors(
      validate({
        ...inputValues,
        [name]: value,
      })
    );
  }

  const handler = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(errors.name || errors.delivery || errors.email || errors.number || errors.direction || errors.pay) {
      return handler()
    }
    setLoading(true)
    const regexName = /^([a-zA-Z ]+)$/i;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (
      !inputValues.name ||
      !inputValues.email ||
      inputValues.number == "" ||
      !inputValues.direction
    ) {
      return handler();
    }

    if (
      inputValues.email &&
      inputValues.email.length > 0 &&
      inputValues.email !== ""
    ) {
      if (!regexEmail.test(inputValues.email)) {
        return handler();
      }
    }

    if (
      inputValues.name &&
      inputValues.name.length > 0 &&
      inputValues.name !== ""
    ) {
      if (!regexName.test(inputValues.name)) {
        return handler();
      }
    }
    if (inputValues.number === "") {
      return handler();
    }
    if (inputValues.direction.length > 25 || inputValues.direction.length < 4) {
      return handler();
    }

    //aca deberiamos hacer el post a wpp o mail
    try {
      const formData = new FormData(formRef.current!);
      
      formData.append("cart", JSON.stringify(Cart));
      formData.append("total", totalPrice.toString());
      const result: { success: boolean } = await ContactFormAction(formData);

      if (result.success) {
          alert("mensaje enviado")
          formRef.current?.reset();
          // setToast({ message: 'Formulario enviado con éxito', type: 'success' });
      } else {
          alert("mensaje enviado")
          formRef.current?.reset();
          // setToast({ message: 'Hubo un error al enviar el formulario', type: 'error' });
      }
  } catch (error) {
      alert("mensaje enviado")
      formRef.current?.reset();
      // setToast({ message: 'Hubo un error al validar el reCAPTCHA', type: 'error' });
  } finally {
      setLoading(false);
  };
 }
  return (
    <div className={styles["container-contact"]}>
      <form action="" ref={formRef}  onSubmit={handleSubmit} className={styles["aaaaa"]}>
        <h4>DATOS DE CONTACTO</h4>
        <Input
          type="email"
          id="inputEmail"
          name="email"
          value={inputValues.email}
          handleChange={handleChange}
          placeholder="Email"
          error={errors.email}
        />
        <Input
          type="number"
          id="inputNumber"
          name="number"
          value={inputValues.number}
          handleChange={handleChange}
          placeholder="Numero Telefonico"
          error={errors.number}
        />
        <h4>DATOS DEL DESTINATARIO</h4>
        <Input
          type="text"
          id="inputName"
          name="name"
          value={inputValues.name}
          handleChange={handleChange}
          placeholder="Nombres y Apellidos"
          error={errors.name}
        />
        <Input
          type="text"
          id="inputHome"
          name="direction"
          value={inputValues.direction}
          handleChange={handleChange}
          placeholder="Direccion"
          error={errors.direction}
        />

        <div className={styles["input-container"]}>
          <input
            type="text"
            id="inputPay"
            name="pay"
            value={inputValues.pay}
            className={styles["input-field"]}
            required
            placeholder=" "
            readOnly
          />
          <label htmlFor="inputPay" className={styles["input-label"]}>
            Forma de pago
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <select
            className={styles["input-select"]}
            name="delivery"
            id="delivery"
            value={inputValues.delivery}
            onChange={handleChange}
          >
            <option value="EN DOMICILIO">EN DOMICILIO</option>
            <option value="RETIRAR EN EL LOCAL COMERCIAL">
              RETIRAR EN EL LOCAL COMERCIAL
            </option>
          </select>
        </div>

        <label htmlFor="infoAditional" className={styles["label-info"]}>
          INFORMACION ADICIONAL <span>{"(Opcional)"}</span>
        </label>
        <textarea
          name="aditionalMsg"
          id="aditionalMsg"
          maxLength={200}
          value={inputValues.aditionalMsg}
          onChange={handleChange}
        ></textarea>
        {errors.aditionalMsg && (
          <small className={styles["danger"]}>{errors.aditionalMsg}</small>
        )}
        <button disabled={loading} type="submit">{loading ? "Enviando..." : "REALIZAR EL PEDIDO"}</button>
        {error && (
          <div className={styles["container-danger-msg"]}>
            <span className={styles["danger"]}>
              Algunos de los campos esta incorrecto
            </span>
          </div>
        )}
      </form>

      <div className={styles["bbbbb"]}>
        {totalPrice !== 0 && <div
          onClick={() => setShopOpen(!shopOpen)}
          className={styles["desplegable"]}
        >
          <span className={styles["izq"]}>
            {shopOpen ? (
              <span>
                {" "}
                <UpIcon />{" "}
              </span>
            ) : (
              <span>
                {" "}
                <DownIcon />{" "}
              </span>
            )}{" "}
            Ver detalles de la compra
          </span>
          <span className={styles["der"]}>$ {totalPrice}</span>
        </div>
        }
        <div
          className={`${styles["modal"]} ${
            shopOpen ? styles["accordion-open"] : styles["accordion-closed"]
          }`}
        >
          <div className={styles["total-card"]}>
            <div
              className={`${styles["overflow-card"]} ${
                Cart.length > 0 ? styles["border"] : ""
              }`}
            >
              {Cart.length > 0 &&
                Cart.map((e: Product) => (
                  <CardCheckout
                    key={e.id}
                    name={e.name}
                    price={e.price}
                    image={e.image}
                    amount={e.amount}
                  />
                ))}
            </div>
            {Cart.length > 0 && (
              <div className={styles["container-total"]}>
                <div className={styles["br"]}>
                  <span>Subtotal</span>
                  <span>$ {formatoContabilidad(totalPrice)}</span>
                </div>
                <div className={styles["br"]}>
                  <span>Costo de envío</span>
                  <span>Gratis</span>
                </div>
                <div className={styles["br-total"]}>
                  <span onClick={()=> testFunction({Cart, totalPrice})}>Total</span>
                  <span>$ {formatoContabilidad(totalPrice)}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

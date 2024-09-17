"use client";
import React, { useEffect, useState } from "react";
import styles from "./contact.module.css";
import { Input } from "@/components/input/Input";
import { useMyContext } from "@/context/ListContext";
import { CardCheckout } from "@/components/card-checkout/CardCheckout";
import { Product } from "@/types/types";
import { useWindowSize } from "@/utils/size/useWindowsSize";

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
    errors.name = "name is required";
  }

  if (input.name && !regexName.test(input.name)) {
    errors.name = "insert name valid";
  }

  if (input.name.length > 15 || input.name.length < 4) {
    errors.name = "insert username valid";
  }
  if (!input.number) {
    errors.number = "number is required";
  }
  if (input.number.length > 12 || input.number.length < 8) {
    errors.number = "insert number valid";
  }
  if (!input.direction) {
    errors.direction = "direction is required";
  }

  if (input.direction.length > 25 || input.direction.length < 4) {
    errors.direction = "insert direction valid";
  }

  if (input.aditionalMsg && input.aditionalMsg.length > 60) {
    errors.aditionalMsg = "Superaste el maximo de caracteres";
  }
  if (!input.email) {
    errors.email = "email is required";
  }

  if (input.email && !regexEmail.test(input.email)) {
    errors.email = "insert email valid";
  }

  return errors;
}

const Contact = () => {
  const windowSize = useWindowSize();
  const { Cart } = useMyContext();
  const totalPrice = Cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const [shopOpen, setShopOpen] = useState<boolean>(true);

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
      setShopOpen(true); // Si el ancho es mayor a 1000px, actualiza el estado a false
    } else {
      setShopOpen(false);  // Si es menor o igual, actualiza a true
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


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues, "start");

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
    if (
      inputValues.number === ""
    ) {
      return handler();
    }
    if (
      inputValues.direction.length > 25 ||
      inputValues.direction.length < 4
    ) {
      return handler();
    }
     
    //aca deberiamos hacer el post a wpp o mail 
    return
  };

  return (
    <div className={styles["container-contact"]}>
      <form action="" onSubmit={handleSubmit} className={styles["aaaaa"]}>
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
        <button type="submit">REALIZAR EL PEDIDO</button>
        {error && <div className={styles["container-danger-msg"]}>
          <span className={styles["danger"]}>Algunos de los campos esta incorrecto</span>
          </div>
}
      </form>

      <div className={styles["bbbbb"]}>

<div onClick={()=> setShopOpen(!shopOpen)} className={styles["desplegable"]}>
  <span className={styles["izq"]}> Ver detalles de la compra</span><span className={styles["der"]}>$ {totalPrice}</span>
</div>
<div className={`${styles["modal"]} ${
          shopOpen ? styles["accordion-open"] : styles["accordion-closed"]
        }`}>

        <div className={styles["total-card"]}>
  
          <div className={`${styles["overflow-card"]} ${Cart.length > 0 ? styles["border"] : ""}` }>
          {Cart.length > 0 && (
            Cart.map((e: Product) => (
              <CardCheckout
                  key={e.id}
                  name={e.name}
                  price={e.price}
                  image={e.image}
                  amount={e.amount}
                  />
                ))
            )}
          
          </div>
{
  Cart.length > 0 && <div className={styles["container-total"]}>
            <div className={styles["br"]}>
              <span>Subtotal</span>
              <span>$ {totalPrice}</span>
            </div>
            <div className={styles["br"]}>
              <span>Costo de envío</span>
              <span>Gratis</span>
            </div>
            <div className={styles["br-total"]}>
              <span>Total</span>
              <span>$ {totalPrice}</span>
            </div>
          </div>
}
    </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;

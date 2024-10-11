'use server'
import { template } from "@/utils/templateHtml"
import nodemailer from "nodemailer"
import { bagCheckoutAction } from "./checkoutAction";

export const ContactFormAction = async (formdata: FormData): Promise<{ success: boolean }> => {
    try {
      
            const name = formdata.get('name') as string;
            const email = formdata.get('email') as string;
            const phone = formdata.get('number') as string;
            const direction = formdata.get('direction') as string;
            const payed = formdata.get('pay') as string;
            const delivery = formdata.get('delivery') as string;
            const message = formdata.get("aditionalMsg") as string;

            const cart = JSON.parse(formdata.get("cart") as string);
            const total = formdata.get("total");

            console.log(formdata, "name");

            if (!name || !email || !phone || !direction || !payed || !delivery || !message) {
                console.log('Todos los campos son obligatorios.');
                return { success: false }
            }

            const {  ClientPedido, PrecioTotal } = await bagCheckoutAction({cart, total})
            const res = JSON.stringify(ClientPedido)
            
            const contentHtml = template({ name, email, phone, direction, payed, delivery, message, res, PrecioTotal });

            const transporter = nodemailer.createTransport({
                host: `${process.env.EMAIL_SERVICE}`,
                port: 465,
                secure: true,
                auth: {
                    user: `${process.env.EMAIL_USERNAME}`,
                    pass: `${process.env.EMAIL_PASSWORD}`,
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // Verificamos la configuración del servidor de correo
            await transporter.verify();

            // Enviamos el correo
            const info = await transporter.sendMail({
                from: email,
                to:  process.env.EMAIL_USERNAME,
                subject: "Contacto - Pagína web",
                html: contentHtml,
            });

            console.log("Message sent: %s", info.messageId);
            return { success: true };
        } 
     catch (error) {
        console.log(error)
        return { success: false };
    }
 }
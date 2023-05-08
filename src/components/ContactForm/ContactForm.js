import { useState } from "react";
import "./ContactForm.css"

const ContactForm = ({onConfirm}) => {

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()


    const handleSubmmit=() =>{
        const userData = {
            name,phone,email,timestamp: new Date().toISOString()
        }

        onConfirm (userData)
    }

    return (


<form  onSubmit={handleSubmmit} className="contactFormContainer" >

<div>
<p>Nombre</p>
<input className="" type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nombre' required />
</div>

<div>
<p>Teléfono</p>
<input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Nro de Telefono' required />
</div>

<div>
<p>Email</p>
<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' required/>
</div>

<button className="contactFormSubmitButton" type='submit' >Generar orden</button>
</form>

    )
}


export default ContactForm
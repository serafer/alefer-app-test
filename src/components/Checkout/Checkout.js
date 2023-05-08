import { useCart } from "../../context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContactForm from "../ContactForm/ContactForm"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";




const Checkout = ({ greeting }) => {

    const { cart, totalAmount, cleanCart } = useCart()
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState (false)
    const navigate = useNavigate ()


    const createOrder = async (userData) => {

        try {
            setLoading(true)


            const objOrder = {

                buyer: {
        ...userData,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date(userData.timestamp)) // Convierte la fecha y hora en formato ISO a un objeto Timestamp de Firebase
      },
                item: cart,
                totalAmount
            }

            const ids = cart.map(prod => prod.id)

            const productRef = query(collection(db, "products"), where(documentId(), "in", ids))


            const { docs } = await getDocs(productRef)


            const batch = writeBatch(db)
            const outOfStock = []


            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {

                    batch.update(doc.ref, { stock: stockDb - prodQuantity })

                } else {

                    outOfStock.push({ id: doc.id, ...dataDoc })

                }

            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                cleanCart ()
                setOrderId(orderAdded.id)

                console.log("Orden exitosa")

                setTimeout (()=>{

                    navigate ("/")
                }, 5000)


            } else {

                console.log("No hay stock")

            }
        } catch (error) {

            console.log("No se pudo generar la orden")

        } finally {
            setLoading (false)
        }




    }

    if (loading) {
return (

    <div>
        <h2>Se esta generando su orden -.-</h2>
    </div>
)

    }


    if (orderId) {

        return (
            <div>
                <h2>El ID de su compra es: {orderId} </h2>
            </div>
        )
    }



    return (

        <div>

            <h1> Checkout</h1>

            <h2> Ingresá tus datos</h2>

            <ContactForm onConfirm={createOrder} />


        </div>
    )
}

export default Checkout
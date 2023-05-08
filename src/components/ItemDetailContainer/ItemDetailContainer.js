import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import Loader from "../../Loader/Loader";
import { getDoc, doc } from "firebase/firestore";
import {db} from "../../service/firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)
    const { itemId } = useParams()

    useEffect(() => {
setLoading (true)

const productRef = doc(db, "products", itemId)

getDoc(productRef)
.then (snapshot => {
    

    const data = snapshot.data ()
    const productAdapted = {id: snapshot.id, ...data}
    setProducts (productAdapted)
})  

.catch (error => {
    console.log (error)
})

.finally (()=>{
    setLoading(false)
})



    }, [itemId])

    if(loading) {
        return (
           <div style = {{margin : 150}} >
               <Loader />
            
           </div> 
        )
    }

    return (
        <div className="item-detail-container" >
            <h2> Detalle del producto </h2>
            <ItemDetail {...products} />
        </div>
    )
}
export default ItemDetailContainer
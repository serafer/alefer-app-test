import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Loader from "../../Loader/Loader"
import {getDocs , collection, query, where} from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)

    const {category} = useParams ()



    useEffect(() => {
        setLoading(true)

            const productsRef = category
            ? query ( collection (db, "products"), where ("category", "==", category) )
            : collection (db, "products")

        getDocs (productsRef)
        .then (snapshot => {
            const productAdapted = snapshot.docs.map (doc=> {


                const data = doc.data ()
                return {id:doc.id, ...data}
            } )
            setProducts (productAdapted)
        })
            .catch( error => {console.log (error)
            })
            .finally ( () => {
                setLoading (false)
            })



    }, [category])

    if(loading) {
        return (
           <div style = {{margin : 150}} >
               <Loader />
            
           </div> 
        )
    }


    return (
        <div>
            <h1><img src= "https://res.cloudinary.com/dxfhquzse/image/upload/v1679883912/OIG.hs0wxlNBWIwsjsP_zoom_dx7wuq.png" style={{width: 60}} />{greeting}</h1>

            <ItemList products={products} />

        </div>

    )

}

export default ItemListContainer
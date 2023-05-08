import './ItemCount.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(prevQuantity => prevQuantity+1)
        } else {
            toast.error(`Solo hay ${stock} unidades en stock`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
            } 
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(prevQuantity => prevQuantity-1)
        }     
    }

    return (

       <div className='item-counter-box'>          
            <div className='controls'>
                <button className="buttons selector" onClick={decrement} >-</button>
                <p className='numb'>{quantity}</p>
                <button className="buttons selector" onClick={increment}>+</button>
            </div>
            <div>
                <button className="buttons" onClick={() => onAdd (quantity)} >Agregar al carrito</button>
            </div>
            <ToastContainer />
       </div>
    )
}

export default ItemCount
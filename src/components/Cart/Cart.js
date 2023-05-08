import "./Cart.css"
import { useCart } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ id, name, price, quantity, img, size, stock }) => {

    const { removeItem, incrementQuantity, decrementQuantity } = useCart()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)
        toast.error(`Se eliminó ${name.toUpperCase()} `, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }





  return (
    <div>
      <div className="cart-box" >

        <div className="cart-box-img">
          <img src={img} style={{ height: 80 }} />
          <p className="cart-box-title">
            {name} {size}{" "}
          </p>
        </div>


        <div>
          <p className="cart-box-title">Cantidad</p>
          
          <div style={{display: "flex", justifyContent: "center" }} >
          <button className="cartButtonsAddLess" onClick={() => decrementQuantity(id)}>-</button>
          <p>{quantity}</p>
          <button className="cartButtonsAddLess" onClick={() => incrementQuantity(id, stock)}>+</button>
          </div>
          
        </div>


        <div>
          <p className="cart-box-title">precio</p>
          <p>${price.toLocaleString()}</p>
        </div>


        <div>
          <p className="cart-box-title">SubTotal</p>
          <p>${(price * quantity).toLocaleString()} </p>
        </div>
        
        
        <button onClick={handleRemoveItem} className="cart-button-delete"><i className='bx bx-trash'> Eliminar</i></button>



      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;

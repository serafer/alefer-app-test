import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { useCart } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CartContainer.css";

const CartContainer = () => {
    const [loading, setLoading] = useState(true);

    const { cart, totalAmount, setCart, stock } = useCart();

    useEffect(() => {
        setLoading(true);

        setLoading(false);
    }, [cart]);

    if (loading) {
        return (
            <div style={{ margin: 150 }}>
                <Loader />
            </div>
        );
    }


    const emptyCart = () => {
        toast.error(`Se vació el carrito`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        // Crear un nuevo arreglo vacío para el carrito
        const newCart = [];
        setCart(newCart);
    }




    return (
        <div>
            <h2>Cart</h2>

            <div className="cart-container-box" >
                <div className="cart-container-box-upper">

                    <Link to="/">

                        <i className='bx bx-arrow-back cart-container-continue-button'> Volver a la tienda </i>

                    </Link>

                    <span className="cart-container-total-items">
                        {cart.length === 0 ? `Aún no ha seleccionado ningún producto` : cart.length === 1 ? `Usted posee ${cart.length} ítem en su carrito` : `Usted posee ${cart.length} items en su carrito`}

                    </span>

                </div>

                <hr />
                <div className="cart-container-items">
                    {cart.map((product) => (
                        <Cart key={product.id} {...product} />
                    ))}

                </div>

                <div className="cart-container-box-under">
                    <button onClick={emptyCart} className="cart-container-clean-button" >Vaciar carro</button>
                    <div className="total-text">Total: ${totalAmount.toLocaleString()}</div>



                    <Link to="/Checkout" className="cart-container-checkout-button"> Terminar mi compra
                        <i className='bx bxs-chevrons-right'></i>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CartContainer;

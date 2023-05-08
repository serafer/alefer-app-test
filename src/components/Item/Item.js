import "./Item.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Item = ({id, name, img, price, size,stock }) => {


    const { addItem, isInCart } = useCart();

    const handleOnAdd = (quantity) => {
        const prodToAdd = { id, name, price, quantity : 1, img , size, stock};
        addItem(prodToAdd);

        toast.success(`Se agregó ${name.toUpperCase()} `, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };


    
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src={img} alt={name} />
            </div>
            <div className="card-body">
                <h3 className="card-tittle">
                    {name} {size}{" "}
                </h3>
                <p className="card-price">Precio: ${price.toLocaleString()} </p>

                <div className="card-buttons">
                {stock==0 ? ( <p className="out-stock-alert" >SIN STOCK</p> ) : (<button className="card-button-add" onClick={handleOnAdd} ><i className="bx bx-plus"></i>{"Añadir"}</button>)}

                    
                    <Link to={`/item/${id}`} className='card-button-details'>Ver detalle</Link>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Item;
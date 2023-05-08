import { createContext, useState, useContext } from 'react';

const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (productToAdd) => {
        if (isInCart(productToAdd.id)) {
            setCart((prev) =>
                prev.map((product) =>
                    product.id === productToAdd.id
                        ? { ...product, quantity: product.quantity + productToAdd.quantity }
                        : product
                )
            );
        } else {
            setCart((prev) => [...prev, productToAdd]);
        }
    };


    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }
    
    const cleanCart = () => {
        setCart ([])
        
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotalAmount = () => {
        let totalAmount = 0

        cart.forEach(prod => {
            totalAmount += prod.quantity * prod.price
        })

        return totalAmount
    }

    const totalAmount = getTotalAmount()



    const incrementQuantity = (id, stock) => {
        const cartUpdated = cart.map(prod => {
            if(prod.id === id) {
                const productUpdated = {
                    ...prod,
                    quantity: prod.quantity < stock ? prod.quantity + 1 : prod.quantity 
                }

                return productUpdated
            } else {
                return prod
            }
       })

       setCart(cartUpdated)
    }

    const decrementQuantity = (id) => {
        const cartUpdated = cart.map(prod => {
            if(prod.id === id) {
                const productUpdated = {
                    ...prod,
                    quantity: prod.quantity > 1 ? prod.quantity - 1 : prod.quantity 
                }

                return productUpdated
            } else {
                return prod
            }
       })

       setCart(cartUpdated)
    }


    return (
        <CartContext.Provider value={{setCart, cleanCart, cart, addItem, totalQuantity, removeItem, isInCart, totalAmount, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
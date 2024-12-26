import { createContext, useState, ReactNode, useContext } from "react";

interface CartItem {
    id:number,
    name:string,
    price:number,
    discount?:number,
    cover:string,
    desc:string,
    avaliable: boolean,
    quantity:number,
}

interface CartContextType {
    cart: CartItem[]
    addToCart: (item: CartItem) => void;
    removeFromCart: (name: string) => void;
    clearCart: () => void;
    cartOpen: boolean,
    openCart:()=>void,
    closeCart:()=>void
}

const cartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([])
    const [cartOpen,setCartOpen] = useState(false)

    const addToCart = (item: CartItem) => {
        const existingProductIndex = cart.findIndex(
            (cartItem) => cartItem.name === item.name
        )
    
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += item.quantity
            setCart([...cart])
        } else {
            setCart([...cart, { ...item, quantity: item.quantity }]);
        }
    }

    const removeFromCart = (name: string) => {
        setCart((prevState) => prevState.filter((item) => item.name !== name))
    }

    const clearCart = () => {
        setCart([])
    }

    function openCart(){
        setCartOpen(true)
        console.log(cartOpen)
    }

    function closeCart(){
        setCartOpen(false)
        console.log(cartOpen)
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartOpen, openCart, closeCart }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(cartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }

    return context
}
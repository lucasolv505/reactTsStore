import { useCart } from "@/Context/CartContext"
import React from "react";

function CartComponent() {
  const { cart, removeFromCart, clearCart, closeCart } = useCart()

  const totalCart = cart.reduce((total,item)=>{
    return total + item.price * item.quantity
  },0)
  
  return (
    <div>
      <div className="flex justify-end">
        <button className="bg-[var(--grayISH)] w-[20px] h-[20px] overflow-hidden flex items-center justify-center" onClick={closeCart}>X</button>
      </div>
      <h2 className="font-bold text-2xl">Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.name} className="bg-[var(--grayISH)] rounded-xl border-2 m-3 p-4">
              <div className="flex items-center text-sm">
                x{item.quantity} - {item.name} - US${(item.price * item.quantity).toFixed(2)}
                <div className="w-[50%] flex justify-end items-end"><button className="btnDefault" onClick={() => removeFromCart(item.name)}>Remove</button></div>
                
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart} className="btnDefault m-3">Clear 🛒</button>

      <div className="bg-[var(--grayISH)] rounded-xl border-2 m-3 p-1">
        Total: US$ {totalCart.toFixed(2)}
      </div>
    </div>
  );
}

export default CartComponent;

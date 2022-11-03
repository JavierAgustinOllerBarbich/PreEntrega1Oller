import { createContext, useState } from "react"; 

 export const CartContext = createContext(); 

 export const CartProvider = ({children}) => {
  const [cart, setCart]= useState([]);

  const addItem = (item, cantidad) => {
  
      const purchase = {...item, quantity:cantidad}
      const existsInCart = cart.find((prod)=> prod.id === item.id)
      if(existsInCart){
                  const carritoActualizado = cart.map((prod)=>{
                      if(prod.id === item.id){
                          return {...prod, quantity:prod.quantity + cantidad}
                      }else{
                          return prod
                      }
                  })
                  setCart(carritoActualizado )
              }else{
                  setCart([...cart, purchase])
              }
     
  }

  const deleteAll = () => setCart([]);

  const clear = () =>{
      setCart([])
  }

  const removeItem = (id) => {
      setCart(cart.filter((prod)=> prod.id !== id))
  }

  const isInCart = (id) => {
      return cart.some((prod)=> prod.id === id )
  }

  const cartQuantity = () => {
      return cart.reduce((acc, prod) => acc += prod.quantity,0)
  }

  const total = () => {
    return cart.reduce((acc, prod) => acc += prod.quantity * prod.price, 0);
    };

const borrarUno = (id) => {
    const prodFiltrado = cart.filter((prod) => prod.id !== id);
    setCart(prodFiltrado);
  };

  return(
      <CartContext.Provider value={{cart, addItem, total, cartQuantity, isInCart, removeItem, clear, deleteAll, borrarUno}}>
          {children}
      </CartContext.Provider>
  )
}
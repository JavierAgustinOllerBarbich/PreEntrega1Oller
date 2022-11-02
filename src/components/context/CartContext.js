import { createContext, useState } from "react"; 

 export const CartContext = createContext(); 

 export const CartProvider = ({children}) => {
  const [cart, setCart]= useState([]);

//FUNCION CON ITEM Y QUANTITY
//pasar item y contador
  const addItem = (item, cantidad) => {
    //console.log(addItem);
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
    return 1000;
    };
 /* const cartTotal = () => {
      return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
  }*/

  /*const getProductQuantity = (id) => {
    const product = cart.find ((prod) => prod.id === id);
    return product?.cantidad;
  }*/

  return(
      <CartContext.Provider value={{cart, addItem, total, cartQuantity, isInCart, removeItem, clear}}>
          {children}
      </CartContext.Provider>
  )
}
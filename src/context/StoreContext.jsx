import { createContext,useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(()=>{
        const savedCart = localStorage.getItem('cartitem');
        return savedCart ? JSON.parse(savedCart):{}
    })

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    

    const getTotalamount = ()=>{
        let totalAmount = 0
        for(const item in cartItems){

            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item   )
                totalAmount += itemInfo.price*cartItems[item]
            }
        } 
        return totalAmount;
    }

    // Svae data in local Storage

  
    localStorage.setItem("cartitem", JSON.stringify(cartItems))
   
 
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalamount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider


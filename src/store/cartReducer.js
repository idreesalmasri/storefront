

let initialState={
productInCART:[],
count:0
}

export default function cartReducer(state=initialState,action){
    let { type,payload } = action;
    // console.log(state); 
    let index=0;
    switch(type){
        case "addToCart":

            let itemNum=state.count+1;
            // console.log(state.productInCART);
            let newCart=[...state.productInCART]
            let newItem=payload.name;
            newCart.push({"newItem":newItem,"itemNum":itemNum})
            return{
                productInCART:newCart,
                count:itemNum
            }
        case "removeFromCart" :
            let c2=state.count-1;
             
            let cart=[...state.productInCART]
            for(let i=0;i<cart.length;i++){
                if(cart[i].itemNum===payload){
                     index=i;
                }
            }
            cart.splice(index,1)
            return {
                productInCART:cart,
                count:c2
            }
          default:
           return state;
            
    }
}

export function addToCart(product){

    return {
        type:"addToCart",
        payload:product
    }

}
export function removeFromCart(product){

    return {
        type:"removeFromCart",
        payload:product
    }

}
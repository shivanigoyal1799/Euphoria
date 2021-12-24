export const initialState = {
  basket: [{
    id:"1996",
            title:"Sony KD-55X7500F 4K LED 55 Inch Voice Search Smart TV",
            price:25.9,
            rating:5,
            image:"https://www.bdstall.com/asset/product-image/giant_77675.jpg",
  },
  {
    id:"1996",
            title:"Sony KD-55X7500F 4K LED 55 Inch Voice Search Smart TV",
            price:25.9,
            rating:5,
            image:"https://www.bdstall.com/asset/product-image/giant_77675.jpg",
  }

],
  user:null,
};

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR ADDING ITEM TO BASKET
      return {
        ...state,
        basket:[...state.basket,action.item]
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from the basket

      //we cloned the basket
      let newBasket=[...state.basket];

      //we check to see it product exists
      const index=state.basket.findIndex((item)=>item.id===action.id);
       
      if(index>=0){
        //item exists in basket,remove it...
        newBasket.splice(index,1);

      }else{
        console.warn('Cant remove product(id:${action.id}) as its not present in cart')
      }

      return {...state,basket:newBasket};

    default:
      return state;
  }
}
export default reducer;

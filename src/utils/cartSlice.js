import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
       addItem:(state,action)=>{
state.items.push(action.payload);
       },
       
       removeItem: (state,action)=>{
        state.items.pop();
       },
       clearCart:(state,action)=>{
        // console.log(current(state));
      
      //state=[]; //this will update only the local state but not the orignal state.....
     // console.log(state);

     /*
      /****Two ways two change the state****
1->mutate the state..
2->return the new state
 */

// ***1st way
state.items.length=0;

/*
     ***2nd way

     return {items:[]};
     */
       },
    }
});
export const{addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
// //set up data layer
// //we need this to track the basket
// import React, { createContext, useContext, useReducer } from "react";

// //Prepares the data layer
// export const StateContext = createContext();

// //wrap our app and provide the data layer
// //BUILD A PROVIDER
// export const StateProvider = ({ reducer, intialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, intialState)}>
//     {children}
//   </StateContext.Provider>
// );

//pull information from the  data layer
//this is how we use it inside of a component
// export const useStateValue = () => useContext(StateContext);
import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//to use inside a component

export const useStateValue = () => useContext(StateContext);

// setup data layer
import React, { createContext, useContext, useReducer } from 'react'

//Data Layer
export const StateContext = createContext();

//Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Using it inside of a Component
export const useStateValue = () => useContext(StateContext)
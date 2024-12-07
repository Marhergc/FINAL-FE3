import React, { createContext, useContext, useReducer } from 'react';

// Estado inicial
const initialState = {
  favs: [] // Aquí guardamos los favoritos
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload) };
    default:
      return state;
  }
};

// Contexto
const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook para usar el contexto
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

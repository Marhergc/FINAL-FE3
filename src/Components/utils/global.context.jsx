import React, { createContext, useReducer, useContext } from 'react';

// Estado inicial
const initialState = {
  theme: 'light',  // Modo claro por defecto
  favorites: [],  // Lista de favoritos
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],  // Agregar al array de favoritos
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(dentist => dentist.id !== action.payload.id),  // Eliminar de favoritos
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',  // Alternar entre light y dark mode
      };
    default:
      return state;
  }
};

// Contexto global
const GlobalContext = createContext();

// Proveedor de contexto
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

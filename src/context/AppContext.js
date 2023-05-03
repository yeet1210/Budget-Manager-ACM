import { createContext, useReducer } from "react";

const AppReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [...state.expenses,action.payload], 
            }
        default:
            return state;
    }
}

const initialState = {
    budget : 2000,
    expenses : [
        {id:10,name:'shopping',cost:100 },
        {id:11,name:'bruh',cost:200 }
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const[state,dispatch] = useReducer(AppReducer,initialState);

    return(<AppContext.Provider value ={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>
    );
}
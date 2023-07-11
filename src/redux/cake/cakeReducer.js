import {BUY_CAKE} from '../cake/cakeTypes'

const initialState={
    noOfCake:10
}

const cakeReducer=(state=initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            noOfCake:state.noOfCake-1
        }
        default:return state
    }
}

export default cakeReducer;

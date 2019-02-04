import { createStore } from "redux";

const actions = (dispatch) =>{
    return {
        setUser: (user)=> dispatch({ type: 'SET_USER', data:user})
    }
}
const states = (state) =>{
    return {
        user: state.user
    }
}

const initialState = {
    user: {type:'guest', avatar:'https://via.placeholder.com/300x300'}
};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER':
        return {user: state.user = action.data};
    }
    return state
}

const store = createStore(reducer);

export { store, actions, states };
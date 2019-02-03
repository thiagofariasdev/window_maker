import { createStore } from "redux";

const reducer = () =>{
    return{
        user: {type:'guest'}
    }
}

let store = createStore(reducer);

export { store };
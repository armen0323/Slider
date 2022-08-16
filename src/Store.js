
import { createStore } from 'redux';


const action = {
    type:'',
    payload:''
}


function reducer(store = {}, action ){
    switch(action.type){
        case 'plus':
            return {
                number: action.payload
            }
         default:
            return store
    }
    


}

const store = createStore(reducer)

export default store


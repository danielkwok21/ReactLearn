// import a bunch of constants
import {ADD_ARTICLE} from '../actions/actionTypes'

// initial state of the store
const initialState = {
    articles: []
}

// the only reducer we have now, rootReducer
function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_ARTICLE:
            // makes a copy of the store
            const newState = Object.assign({}, state)

            // make changes to the newState
            newState.articles.push(action.payload)

            // returns the newState
            return newState
        default:
            return state
    }    
}

export default rootReducer



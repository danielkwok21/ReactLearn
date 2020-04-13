// import a bunch of constants
import {ADD_ARTICLE} from '../../actionTypes/article'

// initial state of the store
const initialState = {
    articles: []
}

export default (state=initialState, action) => {
    // makes a copy of the store
    const newState = Object.assign({}, state)
    switch(action.type){
        case ADD_ARTICLE:

            // make changes to the newState
            newState.articles.push(action.payload)

            // returns the newState
            return newState
        default:
            return newState
    }    
}



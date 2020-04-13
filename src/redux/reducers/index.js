import { combineReducers } from 'redux'
import article from './article'

import { connectRouter } from 'connected-react-router'

// STEP 1: Incorperate router into reducer
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    article,
})

export default createRootReducer
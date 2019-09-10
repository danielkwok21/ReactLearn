import {createStore} from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer)


store.subscribe(()=>{
    // this will be called whenever an action is dispatched
    // ie whenever changes made to store
    console.log(store.getState())
})

export default store


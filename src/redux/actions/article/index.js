import {ADD_ARTICLE} from '../../actionTypes/article'

// This is called by components...
export const addArticle = payload => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp=>resp.json())
    .then(data=>{
        dispatch(setArticle(data))
    })
}

// ...this is called internally to dispatch
function setArticle(payload){
    return {
        type: ADD_ARTICLE,
        payload
    }

}
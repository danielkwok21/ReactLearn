import {ADD_ARTICLE} from '../../actionTypes/article'

export function addArticle(payload){
    console.log('action')
    return {
        type: ADD_ARTICLE,
        payload
    }
}
import {ADD_ARTICLE} from '../../actionTypes/article'

export function addArticle(payload){
    return {
        type: ADD_ARTICLE,
        payload
    }
}
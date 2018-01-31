import {FETCH_POSTS} from '../actions/types'
initialState = {
    posts: []
}

export default function(state=[initialState], action){

    switch(action.type){
        case FETCH_POSTS:
        return action.payload
    default:
        return state
    }
}
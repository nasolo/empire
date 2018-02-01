import {FETCH_POSTS, RECEIVED_POSTS} from '../actions/types'
import initialState from './initialState'
export default function(state=initialState.posts, action){
    let newState
    switch(action.type){
        case FETCH_POSTS:
        console.log(FETCH_POSTS, initialState)
            return action
        case RECEIVED_POSTS:
            console.log(RECEIVED_POSTS, action)
            return [action.payload, ...state]
    default:
        return state
    }
}
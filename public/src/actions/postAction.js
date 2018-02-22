// dependencies
import {FETCH_POSTS,  RECEIVED_POSTS} from './types'
import axios from 'axios'

// static api route
const apiUrl = '/api/test'

export function getPosts(){
    return dispatch => {
        axios.get(apiUrl)
            .then(response => dispatch(getPostAsync(response.data)))
                    .catch(err => console.log(err))
    }
}

function getPostAsync(posts){
    console.log(posts)
    return {
        type: RECEIVED_POSTS,
        payload: posts
    } 
}

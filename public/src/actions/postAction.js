// dependencies
import {FETCH_POSTS,  RECEIVED_POSTS} from './types'
import axios from 'axios'

// static api route
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts(){
    return dispatch => {
        axios.get(apiUrl)
            .then(response => dispatch(getPostAsync(response.data)))
                    .catch(err => console.log(err))
    }
}

function getPostAsync(posts){
    return {
        type: RECEIVED_POSTS,
        payload: posts
    } 
}

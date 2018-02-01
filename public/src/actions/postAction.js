// dependencies
import {FETCH_POSTS,  RECEIVED_POSTS} from './types'
import axios from 'axios'

// static api route
apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export default function getPosts(){
    return dispatch => {
        axios.get(apiUrl)
            .then(response =>response.json())
                .then(json => dispatch(getPostAsync(json)))
                    .catch(err => getPostAsync(err))
    }
}

function getPostAsync(posts){
    return {
        type: RECEIVED_POSTS,
        payload: posts
    } 
}

// dependencies
import {FETCH_POSTS} from './types'
import axios from 'axios'

// static api route
apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export default function getPosts(){
    return dispatch => {
        axios.get(apiUrl)
            .then(res =>{
                console.log(res)
                const posts = res
                return posts
            }).catch(err =>{
                console.log(err)
                return err
            })
dispatch(getPostAsync(posts))
    }
}

function getPostAsync(posts){
    return {
        type: FETCH_POSTS,
        payload: posts
    } 
}

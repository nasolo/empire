//import dependecies
import { combineReducers } from 'redux'
import  albumsReducer from './albumsReucer'
import commentReducer from './commentsReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
    postList: postsReducer,
    commentsList: combineReducer,
    albumList: albumsReducer
})


export default rootReducer
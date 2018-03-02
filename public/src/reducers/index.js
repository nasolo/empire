//import dependecies
import {combineReducers} from 'redux'
import albumsReducer from './albumsReucer'
import commentReducer from './commentsReducer'
import postsReducer from './postsReducer'
import installerReducer from './installerReducer'

const rootReducer = combineReducers({
   installersList: installerReducer
})


export default rootReducer
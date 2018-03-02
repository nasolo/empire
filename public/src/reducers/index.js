//import dependecies
import {combineReducers} from 'redux'
import albumsReducer from './albumsReucer'
import commentReducer from './commentsReducer'
import postsReducer from './postsReducer'
import installerReducer from './installerReducer'

const rootReducer = combineReducers({
   installers: installerReducer
})


export default rootReducer
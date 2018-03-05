//import dependecies
import {combineReducers} from 'redux'
import albumsReducer from './albumsReucer'
import commentReducer from './commentsReducer'
import postsReducer from './postsReducer'
import installerReducer from './installerReducer'
import addInstallerReducer from './addInstallerReducer';

const rootReducer = combineReducers({
   fetchInstallersReducer: installerReducer,
   addInstallerReducer: addInstallerReducer
})


export default rootReducer
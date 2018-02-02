import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const logger = (store)=>(next)=>(action) =>{
  console.log("action fired", action)
  next(action)
}



export default function configureStore() {
    return createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk, logger)
    );
  }
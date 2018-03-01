import {FETCH_INSTALLERS,  FETCH_INSTALLERS_FAILURE, FETCH_INSTALLERS_SUCCESS}  from '../actions/types'
import initialState from './initialState'
export default function(state=initialState, action){
    let newState
    switch(action.type){
        case FETCH_INSTALLERS:
        console.log(FETCH_INSTALLERS, initialState)
            return {...state,
                isFetching: true,
                didInvalidate: false,
                lastUpdated: Date.now(),
                payload: [action.payload]
              }
        case FETCH_INSTALLERS_SUCCESS:
            console.log(FETCH_INSTALLERS_SUCCESS, action, ...state)
            return {...state, isFetching: false,
                            didInvalidate: false,
                            lastUpdated: Date.now(),
                            payload: [action.payload]
                        }
        case FETCH_INSTALLERS_FAILURE:
            console.log(FETCH_INSTALLERS_FAILURE, action, ...state)
            return {...state, isFetching: false,
                            didInvalidate: false,
                            lastUpdated: Date.now(),
                            payload: [action.payload]
                        }
    default:
        return state
    }
}
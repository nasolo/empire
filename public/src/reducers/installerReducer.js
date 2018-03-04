import {FETCH_INSTALLERS,  FETCH_INSTALLERS_FAILURE, FETCH_INSTALLERS_SUCCESS, CREATE_INSTALLER, CREATE_INSTALLER_SUCCESS, CREATE_INSTALLER_FAILURE}  from '../actions/types'
import initialState from './initialState'
export default function(state=initialState, action){
    let newState
    switch(action.type){
        case FETCH_INSTALLERS:
        console.log(FETCH_INSTALLERS, initialState)
            return {...state,installers:{
                                            isFetching: true,
                                            didInvalidate: false,
                                            lastUpdated: Date.now(),
                                            payload: [action.payload]
                                        }
                     }
        case FETCH_INSTALLERS_SUCCESS:
            console.log(FETCH_INSTALLERS_SUCCESS, action, ...state)
            return {...state, installers:{
                                            isFetching: false,
                                            didInvalidate: false,
                                            lastUpdated: Date.now(),
                                            payload: [action.payload]
                                        }
                    }
        case FETCH_INSTALLERS_FAILURE:
            console.log(FETCH_INSTALLERS_FAILURE, action, ...state)
            return {...state, installers:{
                                            isFetching: true,
                                            didInvalidate: false,
                                            lastUpdated: Date.now(),
                                            payload: [action.payload]
                                         }
                                    }
        case CREATE_INSTALLER_FAILURE:
            console.log(CREATE_INSTALLER_FAILURE, action, ...state)
            return {...state, installers:{
                                            postData:
                                            {
                                                isPosting: false,
                                                lastUpdated: Date.now(),
                                                error: true,
                                                payload: [action.payload]
                                            }
                                        }
                    }

    default:
        return state
    }
}
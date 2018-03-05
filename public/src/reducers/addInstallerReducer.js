import {CREATE_INSTALLER, CREATE_INSTALLER_SUCCESS, CREATE_INSTALLER_FAILURE}  from '../actions/types'
import initialState from './initialState'
export default function(state=initialState, action){
    let newState
    switch(action.type){                            
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
// dependencies
import {FETCH_INSTALLERS,  FETCH_INSTALLERS_FAILURE, FETCH_INSTALLERS_SUCCESS} from './types'
import axios from 'axios'

// static api route
const apiUrl = '/api/test'

export function fetchInstallers(){
    return dispatch => {
        axios.get(apiUrl)
            .then(response => dispatch(fetchInstallersAsync(response)))
                .then(response => dispatch(fetchInstallersSuccess(response.data)))
                    .catch(err => response => dispatch(fetchInstallersFailure(err)))
    }
}

function fetchInstallersAsync(response){
    console.log(response)
    return {
        type: FETCH_INSTALLERS,
        payload: response
    } 
}


function fetchInstallersSuccess(installers){
    console.log(installers)
    return {
        type: FETCH_INSTALLERS_SUCCESS,
        payload: installers
    } 
}


function fetchInstallersFailure(err){
    console.log(err)
    return {
        type: FETCH_INSTALLERS_FAILURE,
        payload: err
    } 
}



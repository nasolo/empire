// dependencies
import {FETCH_INSTALLERS,  FETCH_INSTALLERS_FAILURE, FETCH_INSTALLERS_SUCCESS, CREATE_INSTALLER, CREATE_INSTALLER_SUCCESS, CREATE_INSTALLER_FAILURE} from './types'
import axios from 'axios'

// static api route
const apiUrl = '/api/test'
const insertInstallerApiUrl = '/api/addinstaller'

export function fetchInstallers(){
    return dispatch => {
        axios.get(apiUrl)
            .then(response => dispatch(fetchInstallersAsync(response)))
                .then(response => dispatch(fetchInstallersSuccess(response.data)))
                    .catch(err => dispatch(fetchInstallersFailure(err)))
    }
}

export function createInstaller(postData){
    return dispatch => {
        axios.post(insertInstallerApiUrl, postData)
            .then(response => {

               

            })
                .catch(err => {
                    const errData = err.response.data
                    if(errData.isJoi && errData.name == "ValidationError"){
                        return dispatch(createInstallersFailure((errData.details)))
                     


                }

                    

                })
    }
}

function createInstallersFailure(err){
    return {
        type: CREATE_INSTALLER_FAILURE,
        payload: err
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



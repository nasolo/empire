// dependencies
import {FETCH_INSTALLERS,  FETCH_INSTALLERS_FAILURE, FETCH_INSTALLERS_SUCCESS, CREATE_INSTALLER, CREATE_INSTALLER_SUCCESS, CREATE_INSTALLER_FAILURE} from './types'
import axios from 'axios'

// static api route
const getAllInstallers = '/api/getInstallers'
const insertInstallerApiUrl = '/api/addinstaller'

export function fetchInstallers(){
    return dispatch => {
        axios.get(getAllInstallers)
            .then(response => dispatch(fetchInstallersAsync(response)))
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



function fetchInstallersAsync(response, dispatch){
   
   if(response.status = 200){
        return {
            type: FETCH_INSTALLERS_SUCCESS,
            payload: response.data
        } 
   }else{
    return {
        type: FETCH_INSTALLERS,
        payload: response
    } 
}
}



function fetchInstallersFailure(err){
    console.log(err)
    return {
        type: FETCH_INSTALLERS_FAILURE,
        payload: err
    } 
}



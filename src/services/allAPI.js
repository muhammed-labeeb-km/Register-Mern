import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"
//register API
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

//table view
//register API
export const tableViews = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/gettingAllData`,"","")
}
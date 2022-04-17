import axios from "axios";
import {BASE_URL} from "./api";

const httpRequest =({method,data,path,params}:any)=>{
    return axios({
        method,
        data,
        url:`${BASE_URL}/${path}`,
        params,
        headers:{
            "Content-Type":"application/json"
        }
    })
}
export default httpRequest;
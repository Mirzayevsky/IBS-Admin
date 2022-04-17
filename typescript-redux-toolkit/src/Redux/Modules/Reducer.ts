import {useState} from "react";
import httpRequest from "./httpRequest";

const useHttpRequest = () => {
    const defaultState  = {
        loading:false,
        success:false,
        error:false,
        data:null
    }
    const [process,setProcess] =useState(defaultState)
    const makeRequest = (data:boolean | number | string []) => {

        setProcess({
            loading:true,
            success:false,
            error:false,
            data:null
        });

       httpRequest(data)
           .then((res)=>{
               setProcess({
                   loading:false,
                   success:true,
                   error:false,
                   data:res.data
               })
           })
           .catch((err)=>{
               setProcess({
                   loading:false,
                   success:false,
                   error:true,
                   data:null
               })
           })
    }
    return [process,makeRequest]

}
export default useHttpRequest;

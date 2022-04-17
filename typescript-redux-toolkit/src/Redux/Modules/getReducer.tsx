import  {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const getReducer = createSlice({
    name:"getReducer",
    initialState:{
        data:[],
        loader:true,
        error:false
    },
    reducers:{
        getData:(state, action:any) => {
            state.data = action.payload;
            state.loader = false;
            state.error = true
        },
    }
});


export  const GetData =  ( ) =>{
    return(dispatch: (dataType: { type: string |number | boolean [] ; payload: string; }) => void) => {
        axios.get("https://store-management-backend-app.herokuapp.com/api/v1/product")
            .then( (res) => {
                dispatch( {
                    type: getData.type,
                    payload:res.data
                })
            })
    }
}

export const {getData} = getReducer.actions
export default  getReducer.reducer
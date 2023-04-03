import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureUser =createAsyncThunk("captureUser",
async()=>{
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = "https://minga-0gy1.onrender.com/auth/user";
    try {
        if(token){
            let res = await axios.get(url, headers);
            return { user: res.data.data}
        }else{return {user:[]}}
        
    } catch (error) {
        return {user:[]}
    }
    
})
const actions = { captureUser }

export default actions 
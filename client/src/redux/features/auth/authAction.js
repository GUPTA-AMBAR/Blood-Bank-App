import { createAsyncThunk} from '@reduxjs/toolkit';
import API from '../../../services/API';
import toast from 'react-hot-toast';


// {action created for using this inside the slice section than use slice.reducer inside reduce inside store and than use the dispatch in the authservice section }

export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ role, email, password }, { rejectWithValue })=>{
        
        try {
            const {data} = await API.post("auth/login",{role, email, password});
            // console.log("Data : ",data);
            console.log("User : ",data.user);
            
            if(data.success){
                toast.success(data.message);
                localStorage.setItem("token", data.token);
                setTimeout(() => {window.location.replace("/");},1000);
            }
            return data; 

        } catch (error) {
            if(error.response&&error.response.data.message){
                toast.error(error.response.data.message);
                return rejectWithValue(error.response.data.message);
            }
            else{
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }

    }
)



export const userRegister = createAsyncThunk(
    "auth/register",
    async ({ email, password, role, name, hospitalName, organisationName, phone, address, website }, { rejectWithValue }) => {
        try {
            const { data } = await API.post("auth/register", { email, password, role, name, hospitalName, organisationName, phone, address, website });
            console.log("data : ", data);
            
            if (data?.success) {
                toast.success("User registered successfully!");
                setTimeout(() => {window.location.replace("/login");},1000);
                return data;
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                if (error.response.data.message.includes("already exists")) {
                    toast.error("User already registered. Please log in.");
                } else {
                    toast.error(error.response.data.message);
                }
                return rejectWithValue(error.response.data.message);
            } else {
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getUser = createAsyncThunk(
    "auth/getCurrentUser",
    async ({rejectWithValue})=>{
        try {
            const token = localStorage.getItem("token");
            if(!token){
                throw new Error("No token found");
            }
            const {data} = await API.get("auth/current-user");
            return data;
        } catch (error) {
            if(error.message === "No token found"){
                toast.error("Please log in to access this page.");
            }
            else{
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }
    }
)


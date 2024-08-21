import React from 'react'
import axios from 'axios'

function AuthApi() {
   
    const registerUser  =  async (data) =>{
        try {
            const response = await axios.post('http://localhost:5000/users',data);
            return response.data;
        }catch(error){
            alert(error.response?.data?.message || 'Registration failed');
        }
    }

    const loginUser = async (data) =>{
        try {
            const response = await axios.get('http://localhost:5000/users',{
                params: data
            });
            if(response.data.length > 0){
                return response.data[0];
            }else{
                alert('Invalid credentials');
            }
        }catch(error){
            alert(error.response?.data?.message || 'Login failed');
        }
    }

    const logoutUser = () =>{
        // 
    }

    return {
        registerUser,
        loginUser,
        logoutUser,
    };
}

export default AuthApi

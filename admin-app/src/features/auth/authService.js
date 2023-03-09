import axios from "axios"
import { base_url } from "../../untils/base_url"

const login=async(userData) =>{
    const response=await axios.post(`${base_url}user/admin-login`,userData);
if(response.data){
    localStorage.setItem('user',JSON.stringify(response.data))
}
}

const authService={
    login,
}
export default authService;
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
// import { useEffect } from "react";
import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true
});

const useAxiosSecure = () => {
    // const { logOut } = useAuth();
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axiosSecure.interceptors.response.use(res => {
    //         return res;
    //     }, error => {
    //         console.log('error tracked ', error.response)
    //         if (error.response.status === 401 || error.response.status === 403) {
    //             console.log('logout the user')
    //             logOut()
    //                 .then(() => {
    //                     navigate('/login')
    //                 })
    //                 .catch(error => console.log(error))
    //         }
    //     })
    // }, [navigate, logOut])

    return axiosSecure;
};

export default useAxiosSecure;
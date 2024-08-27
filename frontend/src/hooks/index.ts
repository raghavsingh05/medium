import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBLogs] = useState([]);

    useEffect (()=>{
        const response = axios.get(`${BACKEND_URL}/api/v1/bulk`)
        .then(response =>{
            setBLogs(response.data);
            setLoading(false);
        })
    }, [])

    return {
        loading,
        blogs
    }

}
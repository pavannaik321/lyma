import { useEffect } from "react"
import { useLocation } from "react-router-dom";

export default function About(){
    const location = useLocation();
    console.log(location.pathname);
    useEffect( () => {
       
    },[]);
    return(
        <>
        <h1>about</h1>
        </>
    )
}
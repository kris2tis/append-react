import { useEffect, useState } from "react";
import "./Layout.css"

const Layout = () => {
    let [state, setState] = useState(true)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setState(false)
        }, 800); 

        return () => clearTimeout(timer)
    } , [])

    return (
        <>
            <div id="preloader" style={{display:state ? "block" : "none"}}></div>
        </>
    );
}

export default Layout
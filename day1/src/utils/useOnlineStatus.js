import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    // check if online.
    const [useOnlineStatus, setOnlineStatus] = useState(true);
    // to track online scope

    useEffect(() => {

        window.addEventListener("Offline",()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

    },[])

    // boolean value
    return useOnlineStatus;

}


export default useOnlineStatus;
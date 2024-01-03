import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

    const login = () => {
        setcurrentUser({
            id : 1 ,
            name : "Sk Rohan" ,
            profilePic : "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        })
    }

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])

    return (

        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>

    )

}
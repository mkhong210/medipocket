"use client"
import axios from "axios"
import React from 'react'

export const MyContext = createContext(null);
function Context({children}){
    const value ={

    }
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default Context
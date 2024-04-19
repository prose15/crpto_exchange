"use client"

import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './components/Auth'
import HomePage from './components/HomePage'
import TranscationHistory from './components/TranscationHistory'
import Cookies from 'universal-cookie'


const App = () => {
    const cookies = new Cookies()
    const [isAuth,setIsAuth] = useState(cookies.get("auth-token"))
if(!isAuth){
    return(
        <div>
            <Auth/>
        </div>
    )
}
return <div>
     <HomePage/>
</div>
}

export default App
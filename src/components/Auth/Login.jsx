import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    const handleViewSampleTests = () => {
        // Open the text file in a new tab
        window.open('/sampleTests.txt', '_blank');
    };
    
    return (
    <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e) =>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value = {email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-500' type="email" placeholder='Enter your email' 
                />
                <input 
                value = {password}
                onChange={(e) =>{
                    setPassword(e.target.value)
                }}
                required 
                className='text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-500' type="password" placeholder='Enter password' 
                />
                <button className='mt-7 text-black outline-none border-none border-2 hover:bg-emerald-700 font-semibold bg-emerald-600 text-xl py-2 px-8 w-full rounded-full placeholder:text-white'>Login</button>
            </form>       
        </div>

        <div>
            {/* View Sample Tests button */}
            <button
            onClick={handleViewSampleTests}
            className='mt-4 text-black outline-none border-none border-2 hover:bg-emerald-700 font-semibold bg-emerald-600 text-xl py-2 px-8 w-full rounded-full placeholder:text-white'
            >
            View Sample Tests
            </button>
        </div>    
    </div>
    )
}

export default Login

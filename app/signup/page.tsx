"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email : "",
        password : "",
        username : "",
    });

    const onSignup = async () =>{

    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>SignUp</h1>
            <label htmlFor='username'>username</label>
            <input 
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            type="text" id="username" onChange={(e) => setUser({...user, username : e.target.value})} placeholder='username' />

            <label htmlFor='email'>email</label>
            <input 
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            type="text" id="email" onChange={(e) => setUser({...user, email : e.target.value})} placeholder='email' />

            <label htmlFor='password'>password</label>
            <input 
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            type="password" id="password" onChange={(e) => setUser({...user, password : e.target.value})} placeholder='password' />

            <button onClick={onSignup} className='p-2 bg-blue-500 text-white rounded-lg cursor-pointer'>Signup</button>

            <Link href="/login">Visit login page</Link>


        </div>
    )
}

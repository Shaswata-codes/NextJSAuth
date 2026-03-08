"use client"
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage(){
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyToken", {token});
            setVerified(true);
        } catch (error : any) {
            setError(true);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        if(token.length > 0) verifyUserEmail();
    }, [token]);

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <h1 className="text-4xl">Verify your email</h1>
            <h2 className="p-2 bg-orange-500 text-white">{token ? `${token}` : "No token found"} </h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Email verified successfully</h2>
                    <Link href="/login" className="text-blue-400 underline">Login</Link>
                </div>
            )}

            {error && (
                <div>
                    <h2 className="text-2xl text-red-500">Error verifying email</h2>
                </div>
            )}
        </div>
    )
}
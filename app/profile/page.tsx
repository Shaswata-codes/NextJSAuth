"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProfilePage(){
    const router = useRouter()
    const [data, setData] = useState("nothing")

    const logout = async()=>{
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout Successful");
            router.push("/login");
        } catch (error : any) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getUserDetails = async()=>{
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setData(res.data.data._id);
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <h1>Profile page</h1>
            <hr/>

            <button
                onClick={logout}
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200 cursor-pointer"
            >
                Logout
            </button>

            <button
                onClick={getUserDetails}
                className="mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-200 cursor-pointer"
            >
                Get User Details
            </button>

            <h2 className="mt-4">
                {data === "nothing" ? "Nothing" : (
                    <Link href={`/profile/${data}`} className="text-blue-500">
                        {data}
                    </Link>
                )}
            </h2>

        </div>
    )
}
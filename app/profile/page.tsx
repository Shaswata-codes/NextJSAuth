"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage(){
    const router = useRouter()
    const logout = async()=>{
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout Successfull");
            router.push("/login");
        } catch (error : any) {
            console.log(error);
            toast.error(error.message)
            
        }
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
        </div>
    )
}
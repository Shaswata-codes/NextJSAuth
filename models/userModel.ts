import { verify } from "crypto";
import mongoose from "mongoose";
import { m } from "motion/react";
import { p } from "motion/react-client";
import { unique } from "next/dist/build/utils";
const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique  : true,
    },
    password:{
        type : String,
        required : [true,"Password is required"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin :{
        type:Boolean,
        default : false,
    },
    forgotPasswordToken : String,
    forgotPasswordExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date,
});

const User = mongoose.model("users", userSchema);
import User from "@/models/userSchema";
import { NextResponse } from "next/server";

import dbConnect from "@/utils/connectdb";

export async function POST(req, res) {
  
    try {

        const body = await req.json();
        // console.log(body);
        const { username,password,roles} = body;
        if(!username || !password) {
            return NextResponse.json(
                { message: "Please fill the field properly " },
                { status: 500 }
            )
        }
        await dbConnect();
        const userExist =  await User.findOne({ username:username })
        if(userExist){
            return NextResponse.json(
                { message: "Choose another username" },
                { status: 422 }
            )
        }

        await User.create(body);
        await  User.save()

        return NextResponse.json({
            message:" Registered  successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import dbConnect from "@/utils/connectdb";

export async function POST(req, res) {
        let response = NextResponse.next()

        const body = await req.json();
     
        const { username,password} = body;
        if(!username || !password) {
            return NextResponse.json(
                { message: "Please fill the field properly " },
                { status: 500 }
            )
        }
try {
    await dbConnect();
    const userExist =  await User.findOne({ username:username })
    if(!userExist){
        return NextResponse.json(
            { message: "Not a valid credentials" },
            { status: 422 }
        )
    }

    if(userExist){
        const isMatch = await bcrypt.compare(password, userExist.password)
        if(!isMatch) {
           return  NextResponse.json(
                { message: "try with  a valid password" },
                { status: 422 }
            )
        }  



        // const token = await userExist.generateAuthToken();
        // // console.log(token);
        // return response.cookies.set
        // ({
        //     name:"jwtoken",
        //     value:token,
        //     expires:Date.now()+ 24 * 60 * 60 * 1000,
        //     domain:'localhost:3000'
            

        // }
        // )
        
    }
        
        
           
            
} catch (error) {
    console.log(error)
    
}
       
        //   console.log(username)

        



        return NextResponse.json({
            message:" User Login successfull successfully!"
        }, {
            status: 200
        })

  
}
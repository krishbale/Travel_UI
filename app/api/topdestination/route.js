import data from '../../../topdestinationdata/data.json'
import { NextResponse } from "next/server";
export async function GET(req, res) {
    
        return NextResponse.json(
            { topdestination: data },
            { status: 200 }
        )
    }

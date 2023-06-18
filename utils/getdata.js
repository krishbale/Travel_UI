import axios from "axios";
export function getdata(){
    return axios.get("https://travel-log-ui.vercel.app/api/topdestination").then(res => res.data)


}
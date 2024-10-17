import { Avatar } from "@mui/material"
import LeadIcon from "../icons/leads.png"
export function Lead(){
    return(
        <>
            <Avatar src={LeadIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px"}}/>
        </>
    )
}
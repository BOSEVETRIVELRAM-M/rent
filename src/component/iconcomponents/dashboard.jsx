import { Avatar } from "@mui/material"
import DashboardIcon from "../icons/dashboard.png"
export function Dashboard(){
    return(
        <>
            <Avatar src={DashboardIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px"}}/>
        </>
    )
}
import { Avatar } from "@mui/material"
import ReportIcon from "../icons/report.png"
export function Report(){
    return(
        <>
            <Avatar src={ReportIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px",overflow:"visible"}}/>
        </>
    )
}
import { Avatar } from "@mui/material"
import DocumentIcon from "../icons/document.png"
export function Document(){
    return(
        <>
            <Avatar src={DocumentIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px",overflow:"visible"}}/>
        </>
    )
}
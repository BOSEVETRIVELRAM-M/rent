import { Avatar } from "@mui/material"
import PropertyIcon from "../icons/property.png"
export function Property(){
    return(
        <>
            <Avatar src={PropertyIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px",overflow:"visible"}}/>
        </>
    )
}
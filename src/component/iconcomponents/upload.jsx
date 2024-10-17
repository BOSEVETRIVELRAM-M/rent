import { Avatar } from "@mui/material"
import UploadIcon from "../icons/upload.png"
export function Upload(){
    return(
        <>
            <Avatar src={UploadIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px"}}/>
        </>
    )
}
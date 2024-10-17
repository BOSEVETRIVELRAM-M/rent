import { Avatar } from "@mui/material"
import CommentIcon from "../icons/comment.png"
export function Comment(){
    return(
        <>
            <Avatar src={CommentIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 16px 16px",overflow:"visible"}}/>
        </>
    )
}
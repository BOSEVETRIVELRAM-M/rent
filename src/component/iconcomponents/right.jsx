import { Avatar } from "@mui/material"
import RightArrow from "../icons/rightarrow.png"
export function Right(){
    return(
        <>
            <Avatar src={RightArrow} sx={{height:"24px",width:"24px",backgroundColor:"#5078E1",".MuiAvatar-img":{height:"10px",width:"10px"},borderRadius:"50%",margin:"16px 16px 0px 16px"}}/>
        </>
    )
}
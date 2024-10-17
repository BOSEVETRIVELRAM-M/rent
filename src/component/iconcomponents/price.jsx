import { Avatar } from "@mui/material"
import PriceIcon from "../icons/price.png"
export function Price(){
    return(
        <>
            <Avatar src={PriceIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px",overflow:"visible"}}/>
        </>
    )
}
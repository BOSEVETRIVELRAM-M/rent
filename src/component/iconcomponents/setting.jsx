import SettingIcon from "../icons/setting.png"
import { Avatar } from "@mui/material"
export function Setting(){
    return(
        <>
            <Avatar src={SettingIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px"}}/>
        </>
    )
}
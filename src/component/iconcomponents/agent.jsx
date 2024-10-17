import { Avatar } from "@mui/material"
import AgentIcon from "../icons/agent.png"
export function Agent(){
    return(
        <>
            <Avatar src={AgentIcon} sx={{height:"24px",width:"24px",margin:"16px 16px 0px 16px"}}/>
        </>
    )
}
import { Box } from "@mui/material"
import { Agent, Comment, Dashboard, Document, Lead, LineIcon, Price, Property, Report, Right, Setting, Upload } from "../iconcomponents"
export function Navbar(){
    const navbar  = [<Right/> , <LineIcon/>, <Dashboard/> , <Lead/> , <Agent/> , <Property/> , <Price/> , <Setting/> , <Upload/> , <Report/> , <Document/> , <Comment/>]
    return(
        <>
        <Box sx={{display:"inline-block",backgroundColor:"#333333",height:"100vh"}}>        
            {
                navbar.map((icon,index)=>{
                    return <div key={index}>{icon}</div>
                })
            }
        </Box>
        </>
    )
}
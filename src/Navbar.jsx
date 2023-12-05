import { Button } from "@mui/material"

export const Navbar = ({menuOperation}) => {
    return (
        <div style={{display:'flex', backgroundColor:'black', padding:10}}>
            <Button style={{marginRight:10, color:'gold'}} onClick={()=>{menuOperation("home")}}>Home</Button>
            <Button style={{marginRight:10, color:'gold'}} onClick={()=>{menuOperation("datatypes")}}>Data Types</Button>
            <Button style={{marginRight:10, color:'gold'}} onClick={()=>{menuOperation("conditionals")}}>Conditionals</Button>
            <Button style={{marginRight:10, color:'gold'}} onClick={()=>{menuOperation("loops")}}>Loops</Button>
            <Button style={{marginRight:10, color:'gold'}} onClick={()=>{menuOperation("operators")}}>Operators</Button>
        </div>
    )
}
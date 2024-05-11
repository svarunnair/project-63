import { Box, Button, Tooltip, Typography, styled } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { getData } from '../redux/data/action';
import Navbar from '../components/Navbar';



const Outer = styled(Box)(({ theme }) => ({
border:"2px solid red",
    display:"flex",
    flexDirection:"column",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
color:"green",

    
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MainDiv = styled(Box)(({ theme }) => ({
  backgroundImage:'url("https://media.istockphoto.com/id/2054515915/photo/satisfaction-document-checklist-database-contract-checkbox-insurance-manager-technology.webp?b=1&s=170667a&w=0&k=20&c=cwkupmnPqeS_5CejCzZ5efJ2NFI2ElBPSXRlEI6s_BU=")',
display:"flex",
flexDirection:"column",
border:"4px solid blue",
width:"100%",
height:300,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageBox = styled(Box)(({ theme }) => ({
   width:"100%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: "'Tooltip content'",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "4px 8px",
    borderRadius: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    color: "#ffffff",
    fontSize: "12px",
    textAlign: "center",
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0s, opacity 0.3s linear",
  },
  "&:hover::after": {
    visibility: "visible",
    opacity: .5,
  },
}));
function DashBoard() {
  const dispatch=useDispatch()
  const mainData=useSelector((store)=>store.data.dataGet)
  const [data,setData]=useState({a:"b"})

  console.log("data??",data)

  console.log("object")

const handlechange=()=>{
  const main={...data,U:"ooo"}
  setData(main)
}


 const updateData = useCallback(() => {
    console.log("data??", data);
    const main = { ...data, b: "v" };
    console.log("Main", main);
    setData(main);
  }, [data]); 

  return (
    <Outer>
 
<Navbar/>

    <MainDiv>
  <TextBox>Welcomeeeeeeeeeeeeee</TextBox>

    </MainDiv>
  <Tooltip title="Button Tooltip" arrow>
        <Button onClick={updateData}>Done</Button>
        
      </Tooltip>

      <StyledButton onClick={handlechange} sx={{paddingTop:10}}>Done</StyledButton>
     

    </Outer>
  )
}

export default DashBoard
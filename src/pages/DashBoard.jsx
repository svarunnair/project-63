import { Box, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
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
function DashBoard() {
  const dispatch=useDispatch()
  const mainData=useSelector((store)=>store.data.dataGet)

  console.log("mainn",mainData)
  console.log("object")


  useEffect(()=>{
    dispatch(getData())
  },[])

  return (
    <Outer>
 
<Navbar/>

    <MainDiv>
  <TextBox>Welcomeeeeeeeeeeeeee</TextBox>
    </MainDiv>

    </Outer>
  )
}

export default DashBoard
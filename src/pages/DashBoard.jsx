import { Box, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { getData } from '../redux/data/action';
import { Bar, Line } from 'react-chartjs-2';
import { CategoryScale, Chart } from "chart.js";
import Navbar from '../components/Navbar';

Chart.register(CategoryScale);

const Outer = styled(Box)(({ theme }) => ({

    display:"flex",
    flexDirection:"column",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerDiv = styled(Box)(({ theme }) => ({

    width:"30%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MainDiv = styled(Box)(({ theme }) => ({

    width:"100%",
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

  <ImageBox as={"img"} src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"/>
 
    </MainDiv>

    </Outer>
  )
}

export default DashBoard
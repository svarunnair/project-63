import { Box, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { getData } from '../redux/data/action';
import { Bar, Line } from 'react-chartjs-2';
import { CategoryScale, Chart } from "chart.js";

Chart.register(CategoryScale);

const Outer = styled(Box)(({ theme }) => ({
    border:"2px solid red",
    display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerDiv = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    width:"30%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MainDiv = styled(Box)(({ theme }) => ({
    border:"2px solid blue",
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
    <InnerDiv>

    </InnerDiv>

    <MainDiv>

     <MainDiv></MainDiv>
     
     <MainDiv></MainDiv>

    </MainDiv>

    </Outer>
  )
}

export default DashBoard
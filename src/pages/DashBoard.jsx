import { Box, styled } from '@mui/material';
import React from 'react'
import DashboardDrawer from '../components/Drawer';

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
  return (
    <Outer>
    <InnerDiv>

    </InnerDiv>

    <MainDiv>

    </MainDiv>

    </Outer>
  )
}

export default DashBoard
import { Box, Typography, styled } from '@mui/material';
import React from 'react'

const Outer = styled(Box)(({ theme }) => ({

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:30,
    position:"fixed",
    background:"green",
    
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const Inner = styled(Box)(({ theme }) => ({
    display:"flex",
    width:"80%",
    padding:10,
    alignItems:"center",
    justifyContent:"space-between",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
    fontWeight:600,
    color:"white",
    cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar() {
  return (
    <Outer>
    <Inner>
<TextBox>Home</TextBox>
<TextBox>About</TextBox>
<TextBox>Career</TextBox>
<TextBox>Register</TextBox>
    </Inner>

    </Outer>
  )
}

export default Navbar
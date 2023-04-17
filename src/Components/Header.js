import React from 'react'
import styled from "styled-components"
import { AiOutlineSearch } from 'react-icons/ai';


const Img = styled.img`
width: 140px;
height: 31px;
margin: 25px 50px 25px 50px;


`;

const Container = styled.div`
background-color: #212529;
display: flex;
justify-content: space-between;
height: 80px;
padding: 0 1%;

`;

const Link = styled.div` 
color: white;
padding-top: 30px;
`;

const Searchicon = styled.div`
/* color: white;
height: 50px;
    width: 50px;
    padding-top: 25px; */

`;

function Header() {
  return (
    <Container>

   
        <Img src="https://www.coforge.com/hs-fs/hubfs/dark_coforge_logo.png?width=836&name=dark_coforge_logo.png" alt= ""/>
        <Link>About Us</Link>
        <Link>Industries</Link>
        <Link>Services</Link>
        <Link>Resources</Link>
        <Link>Investors</Link>
        <Link>Newsroom</Link>
        <Link>Careers</Link>
        <Link>Contact US</Link>
        <Searchicon><AiOutlineSearch style={{ paddingTop:"25px",color: "white", height:"30px", width:"30px"}}/></Searchicon>
        
    

    </Container>
  )
}

export default Header
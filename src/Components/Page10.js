import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: #082340;
display: flex;
padding: 7% 15% 7% 15% ;
`;
const Section = styled.div`
font-size: 100px;
color: white;
margin 30px 0 0 0;
font-weight: bold;

`;
const Button = styled.button`
font-size: 20px;
border-radius: 50%;
background-color: red;
border: 0px;
padding: 85px 30px;
margin 0 60px;
`;

function page10() {
  return (
    <div>
        <Container>
            <Section >
                Let's Engage           
            </Section>
          
            <Button>
                Send Message
            </Button>
           
        </Container>
    </div>
  )
}

export default page10
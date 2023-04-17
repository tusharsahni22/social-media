import React from "react";
import styled from "styled-components";

const Main = styled.div`
padding: 30px 0;
background-color: #f8f9fa;
`;

const Container = styled.div`
  display: flex;

`;

const Foot = styled.div`
margin-left: 5%;
padding: 10px;
`;

const Section = styled.div`
padding: 4% 2% 2% 6%;
`;
const Title = styled.div`
font-size: 20px;
padding: 20px 0;
font-weight: bold;
`;
const Link = styled.div`
padding: 5px 0;
font-size: 15px;
font-family: Anek Devanagari,sans-serif;
`;


function Footer() {
  return (
    <div>
      <Main>
      <Container>
        <Section>
          <Title>Usefull Link</Title>
          <Link>About Us</Link>
          <Link>Alliances</Link>
          <Link>Careers</Link>
          <Link>Investors</Link>
          <Link>Resources Library</Link>
          <Link>Blog</Link>
          <Link>Newsroom</Link>
          <Link>Contact Us</Link>
          <Link>Media Contact</Link>
          <Link>Worldwide Locations</Link>
          <Link>Safe Harbor</Link>
          <Link>Privacy Statement</Link>
          <Link>Terms and Conditions</Link>
          <Link>UK Modern Slavery Act</Link>
          <Link>Carbon Reduction Mandate</Link>
          <Link>Mortgage Licensing – NMLS ID</Link>
        </Section>
        <Section>
          <Title>Industries</Title>
          <Link>Insurance</Link>
          <Link>Banking & Finance Services</Link>
          <Link>Travel</Link>
          <Link>Healthcare</Link>
          <Link>Public Sector</Link>
        </Section>
        <Section>
          <Title>Services</Title>
          <Link>Digital Services</Link>
          <Link>Data Analytics</Link>
          <Link>Digital Process Automation</Link>
          <Link>Salesforce Ecosystem</Link>
          <Link>Cloud and Infrastructure management Services</Link>
          <Link>CyberSecurity</Link>
          <Link>Business Process Solution</Link>
          <Link>Metaverse</Link>
          <Link>Cognitive AI</Link>
        </Section>
        <Section>
          <Title>Stay Tuned</Title>
          <Link>LinkedIN</Link>
          <Link>Facebook</Link>
          <Link>Twitter</Link>
          <Link>Youtube</Link>
          <Link>Instagram</Link>
          <Title>Our Companies</Title>
          <Link>AdvantageGo</Link>
        </Section> 
      </Container>
      <hr class="solid"></hr>
      <Foot>
        © Coforge, 2023
        </Foot>
        </Main>
    </div>
  );
}

export default Footer;

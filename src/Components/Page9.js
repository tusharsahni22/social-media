import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  margin: 4% 0 4% 6%;
`;
const P = styled.div`
font-size: 20px;
`;

const P1 = styled.div`
font-size: 30px;
padding: 2% 0;
font-weight: bolder;
`;

const P2 = styled.div`
  display: flex;
  margin: 2% 5% 2% 3%;
`;

const Section = styled.div`
padding:0 4%;
`;

const A = styled.div`
font-size: 50px;
font-weight: bolder;
`;
const B = styled.div`
font-size:15px;
margin-top: 10px;
`;

function Page9() {
  return (
    <div>
      <Container>
        <P>OUR CREDENTIALS</P>
        <P1>The Mark We've Made</P1>
        <P2>
          <Section>
            <A>62<sup></sup></A>
            <B>Best in class NPS Score</B>
          </Section>
          <Section>
            <A>250<sup>+</sup></A>
            <B>Global Clints</B>
          </Section>
          <Section>
            <A>23<sup>k</sup></A>
            <B>Globally distributed employees</B>
          </Section>
          <Section>
            <A>30<sup>+</sup></A>
            <B>Global Sales and Delivery offices</B>
          </Section>
          <Section>
            <A>3<sup>k</sup></A>
            
            <B>Industry Leading Consultants</B>
          </Section>
        </P2>
      </Container>
    </div>
  );
}

export default Page9;

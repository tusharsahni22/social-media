import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fee4d3;
  padding-bottom: 20px;
`;
const Section = styled.div`
  display: flex;
`;
const P = styled.div`
  padding: 3% 6%;
`;
const P2 = styled.button`
  margin: 4% 6% 7% 50%;
  padding: 20px 20px;
  background-color: #fee4d3;
  border-radius: 10px;
  border-color: white;
  border: 0px;
`;
const L1 = styled.div`
  display: flex;
`;

const L2 = styled.div`
  display: flex;
`;

const C = styled.div`
  font-size: 25px;
  padding: 3% 3%;
  margin-left: 6%;
  margin-bottom: 3%;
  height: 150px;
  width: 500px;
  background-color: white;
  border-radius: 20px;
  font-weight: bolder;
`;

const A = styled.div``;

const Read = styled.div`
  padding: 2% 0 0 0;
`;

const B = styled.div`
  padding: 10% 0;
  font-size: 30px;
  font-weight: bolder;
`;

function Page8() {
  return (
    <div>
      <Container>
        <Section>
          <P>
            <A>WORTH A MENTION</A>
            <B>News, Event, Updates</B>
          </P>
          <P2>View All</P2>
        </Section>

        <L1>
          <C>
            Coforge launches Quasar eBOL for the logistics sector{" "}
            <Read>Read more</Read>
          </C>
          <C>
            Coforge Wins Duck Creek Technologies 2022 Innovation Award for
            OnDemand Enablement Tooling<Read>Read more</Read>
          </C>
        </L1>

        <L2>
          <C>Coforge enters strategic partnership with Denodo <Read>Read more</Read></C>
         
          <C>
            Coforge and Transcard help insurers automate disbursements and
            collections<Read>Read more</Read>
          </C>
        </L2>
      </Container>
    </div>
  );
}

export default Page8;

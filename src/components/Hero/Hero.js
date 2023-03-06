import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hello there, my name is Leonardo Lopez a Software Engineer. My passion
          for technology is unwavering, and I am constantly motivated to learn
          new skills and stay up-to-date with the latest industry developments.
          I am a self-starter who takes initiative and is not afraid to take on
          new challenges.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

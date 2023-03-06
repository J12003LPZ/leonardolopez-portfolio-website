import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <>
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        From a young age, I have been fascinated by the power of the internet
        and the endless possibilities it offers for communication,
        collaboration, and innovation. This fascination led me to pursue a
        career in web development, and over the years, I have honed my skills
        through various projects and positions. <br />
        <br />
        As a web developer, I am driven by a deep sense of purpose and a desire
        to create impactful and user-friendly websites that enhance the online
        experience for users. I am passionate about coding and constantly strive
        to stay up-to-date with the latest trends and technologies in the field.
        Whether it's designing responsive layouts, building custom plugins, or
        optimizing page load times, I take great pride in delivering
        high-quality work that meets the needs of clients and end-users alike.
      </SectionText>
    </Section>

    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with <br />
              HTML <br />
              CSS <br />
              JavaScript <br />
              React.js <br />
              Next.js <br />
              Bootstrap <br />
              Material UI <br />
              Tailwind CSS <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js <br />
              Express.js <br />
              MongoDB <br />
              MySQL <br />
              Python <br />
              Java <br />
              API
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              Figma <br />
              Canva <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>
  </>
);

export default Technologies;

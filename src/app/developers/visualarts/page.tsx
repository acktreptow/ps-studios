import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import bendLeak from "../../../../public/images/dev-pages/bend-leak.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Visual Arts",
  description:
    "The history and future of Visual Arts, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function VisualArtsPage(): JSX.Element {
  return (
    <Container>
      <Title title="Visual Arts" />
      <DeveloperButton
        developer="Visual Arts"
        urlPath="https://playstation-studios.fandom.com/wiki/Visual_Arts_Service_Group"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        expedita facere libero voluptates veniam recusandae dolor, harum ad?
        Quidem eaque unde distinctio nam eos necessitatibus laborum inventore
        ducimus. Amet, ex!
      </Paragraph>
      <Paragraph marginBottom={8}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        expedita facere libero voluptates veniam recusandae dolor, harum ad?
        Quidem eaque unde distinctio nam eos necessitatibus laborum inventore
        ducimus. Amet, ex!
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            While Visual Arts will have a small role in pretty much every PS
            Studios game that comes out during the PS5 generation, it&#39;s now
            very unlikely that they will get to make their own game before the
            generation finishes.
          </Paragraph>
          <Paragraph>
            Higher ups like Mumbauer are now gone, and due to the worse economy
            since originally working on TLOU1 as the main developer, they have
            been affected by the many rounds of Sony layoffs. Including in March
            2025 where it was reported that some VA staff who were working on
            Bend&#39;s cancelled live-service game had been let go due to the
            cancellation.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Perhaps circumstances change during the PS6 generation and Visual
            Arts are able to finally do what they set out to back in 2018. Until
            then, if this scenario ever comes about, we can at least appreciate
            their work in pretty much every future PS Studios game through their
            producing art, animation and technical support. It was also
            announced last year that Visual Arts, alongside a new internal Sony
            studio, would be assisting Naughty Dog on a title based on a
            &#39;beloved franchise,&#39; though still no word on what that game
            is.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={bendLeak}
            alt="Leaked screenshot of Bend's cancelled live service game"
            id="bend-leak"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="bend-leak" className="block text-center mb-8">
            Leaked Screenshot Of Bend&#39;s Cancelled Live Service Game
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default VisualArtsPage;

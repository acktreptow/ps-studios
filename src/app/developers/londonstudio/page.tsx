import { Metadata } from "next";
import Image from "next/image";
import londonStudioConceptArt from "../../../../public/images/dev-pages/london-studio-cancelled-game.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "London Studio",
  description:
    "The history of London Studio, a former first-party developer for PlayStation Studios.",
};

function LondonStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="London Studio" />
      <DeveloperButton
        developer="London Studio"
        urlPath="https://x.com/londonstudiohq"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        London Studio was founded in 2002, following their merger of SCE Studio
        Camden (formerly a division of then-first party developer Psygnosis) and
        Team Soho. While they did have some traditional IP such as the
        open-world Getaway series and also helped assist with the development of
        traditional games at other studios like Killzone 2 and LittleBigPlanet,
        London Studio has always been one of Sony&#39;s most experimental teams
        as they primarily worked on games that used the myriad of peripherals
        PlayStation created for its various consoles.
      </Paragraph>
      <Paragraph>
        By far, the most successful series London Studio developed was the
        Singstar IP that managed to sell more than 20 million copies in 6 years
        and spanned numerous games from PS2-PS4. However their other IP such as
        the PS2&#39;s EyeToy, Wonderbook and PlayStation Home for PS3 and
        PSVR&#39;s Blood and Truth were also commercially and/or successful.
      </Paragraph>
      <Paragraph>
        London Studio&#39;s final game was 2019&#39;s Erica. An interactive film
        game that took advantage of PS4&#39;s PlayLink, which allowed the game
        to be interfaced with a smartphone. The game received a mixed response,
        which combined with PSVR&#39;s failing popularity and PS Studios pivot
        to live-service, is no surprise that&#39;s the London Studio also went.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Of course, this was also not meant to be as the game was cancelled along
        with the closure of London Studio in early 2024 as part of wider
        layoffs.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
          </Paragraph>
          <Paragraph marginBottom={8}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
          </Paragraph>
        </div>
        <div>
          <Image
            src={londonStudioConceptArt}
            alt="Concept art of cancelled live service game"
            id="cancelled-game-concept-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="cancelled-game-concept-art"
            className="block text-center"
          >
            Concept Art Of London Studio&#39;s Cancelled Live Service Game
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default LondonStudioPage;

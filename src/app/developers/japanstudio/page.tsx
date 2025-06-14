import { Metadata } from "next";
import Image from "next/image";
import japanstudioholidays from "../../../../public/images/dev-pages/japan-studio-holidays.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Japan Studio",
  description:
    "The history of Japan Studio, a former first-party developer for PlayStation Studios.",
};

function JapanStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Japan Studio" />
      <DeveloperButton
        developer="Japan Studio"
        urlPath="https://x.com/sonyjapanstudio"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Japan Studio was technically founded in 2005, with their first game
        under that name being 2006&#39;s Genji: Days of the Blade for the PS3
        launch. However, they were a part of Sony Computer Entertainment all the
        way back at the beginning since 1993. Japan Studio was just a rebrand
        that still incorporated several development teams like Team, Ico.
      </Paragraph>
      <Paragraph>
        Japan Studio&#39;s most well known IP are Ape Escape, Gravity Rush,
        Knack and Ueda&#39;s trilogy. They would continue to make and
        collaborate with other developers up until the PS5 launch with Demons
        Souls (Bluepoint) and Astro&#39;s Playroom (Team Asobi). However, in
        April 2021, it was announced that Japan Studio would be reorganized with
        Team Asobi as the main arm. SIE Japan Studio served as a collaborator or
        overseer of game projects commissioned to external developers, and has
        developed to all gaming platforms released by parent company Sony. It is
        responsible for several collaborations with third-party developers like
        Clap Handz, Acquire, FromSoftware, Level-5, Arc Entertainment,
        Media.Vision, NanaOn-Sha and Bluepoint Games, which produced titles such
        as the Everybody&#39;s Golf franchise, Demon&#39;s Souls, Dark Cloud and
        Dark Chronicle, the Arc the Lad series, Bloodborne, the Alundara series,
        PaRappa the Rapper and Soul Sacrifice.
      </Paragraph>
      <Paragraph marginBottom={8}>
        The reason for this closure was simple. Sony leadership didn&#39;t think
        there was a market for the AA games they were known for anymore.
        Instead, PS Studios would continue with AAA cinematic games whilst
        delving head-first into the live-service arena, while allowing
        independent studios to work in the indy space that every now and then
        would reach the budget of a AA game.
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
          <Paragraph marginBottom={8}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
          </Paragraph>
        </div>
        <div>
          <Image
            src={japanstudioholidays}
            alt="Concrete Genie"
            id="concrete-genie"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concrete-genie" className="block text-center">
            Some of JS&#39;s many IP wishing happy holidays a final time.
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default JapanStudioPage;

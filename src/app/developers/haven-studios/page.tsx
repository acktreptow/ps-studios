import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import jadeRaymond from "../../../../public/images/dev-pages/jade-raymond.png";
import fairGames from "../../../../public/images/dev-pages/fairgames.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Haven Studios",
  description:
    "The history and future of Haven Studios, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function HavenStudiosPage(): JSX.Element {
  return (
    <Container>
      <Title title="Haven Studios" />
      <DeveloperButton developer="Haven" urlPath="https://havenstudios.com/" />
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="History" />
          <Paragraph>
            This Montreal-based developer was founded in 2021 by Jade Raymond -
            one of the creators of Assassin&#39;s Creed. Raymond was at Google
            beforehand, but left once they stopped supporting the cloud-based
            console Stadia.
          </Paragraph>
          <Paragraph>
            Raymond then took her cloud infrastructure knowledge and founded
            Haven Studios. It caught Sony&#39;s attention, who immediately
            started funding Haven&#39;s first game and acquired them in 2023.
          </Paragraph>
          <Paragraph marginBottom={8}>
            This title was FairGame$ - a live-service competitive heist shooter
            that will launch simultaneously on PS5 and PC. We haven&#39;t seen
            Fairgame$ since its CG announcement trailer in May 2023. But while
            Haven has been silent, information from trusted leakers paint a
            negative picture.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={jadeRaymond}
            alt="Picture of Jade Raymond"
            id="jade-raymond"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-sm"
          />
          <label
            htmlFor="jade-raymond"
            className="block text-center mb-8 lg:ml-5"
          >
            Haven Studios Founder Jade Raymond
          </label>
        </div>
      </ImageSection>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            In February 2025, one exposé reported that Fairgames (they&#39;ve
            now dropped the $) was internally delayed from fall 2025 to spring
            2026. Then in May 2025, Sony announced that Raymond left Haven
            without saying why, and even Haven staff weren&#39;t told. However,
            Raymond exited only a few weeks after an NDA&#39;d external playtest
            was poorly received.
          </Paragraph>
          <Paragraph>
            The most recent update arrived in September 2025, when the creative
            director left - again, likely another huge casualty following
            Fairgames&#39;s poor playtest feedback, which reportedly concerned
            staff about its progress.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Between the delay, Raymond/the CD leaving, a poor playtest,
            Sony&#39;s colder feet in live-service post-Concord, Fairgames being
            Haven&#39;s first game, prioritizing unproven cloud tech, and the
            consumer&#39;s already negative opinion, it&#39;s hard not to be
            extremely pessimistic. At this point, it&#39;s far more likely Haven
            closes than Fairgames achieving critical/commercial success.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={fairGames}
            alt="Fairgames CGI trailer thumbnail"
            width={500}
            height={500}
            id="fairgames"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="fairgames" className="block text-center mb-8">
            Fairgames Only Has A CGI Trailer
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Haven Studios" />
    </Container>
  );
}

export default HavenStudiosPage;

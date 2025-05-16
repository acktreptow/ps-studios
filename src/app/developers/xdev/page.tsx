import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import ds2OTB from "../../../../public/images/dev-pages/ds2.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "XDev",
  description:
    "The history and future of XDev, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function XDevpage(): JSX.Element {
  return (
    <Container>
      <Title title="XDev" />
      <DeveloperButton
        developer="XDev"
        urlPath="https://www.playstation.com/en-gb/develop/xdev/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Formed in 2000, XDev have a unique role in PS Studios. They don&#39;t
        develop games, but instead collaborate with external studios by funding
        their development of exclusive games for PlayStation. This hands-off
        approach means XDev ships more games than other PS Studios whilst
        producing an eclectic selection from the very different developers.
      </Paragraph>
      <Paragraph marginBottom={8}>
        XDev has shipped 9 PS5 games, with 2024 being their highest yearly
        output at 4. They currently have 2 titles for 2025 - Action-Adventures
        &#39;Death Stranding 2: On the Beach&#39; in June and &#39;Lost Soul
        Aside&#39; in August.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            XDev&#39;s collaborations have been inconsistent on PS5. While
            2022&#39;s VR FPS &#39;Firewall Ultra&#39; is the lowest rated PS5
            game by all of PS Studios on Metacritic at 61, 2024 games like
            Helldivers 2 and Stellar Blade far exceeded their critical and
            commercial expectations.
          </Paragraph>
          <Paragraph>
            The upcoming DS2 is by however by far, their most AAA game
            they&#39;ve produced on PS5. Despite it also being a
            cinematic/story-focused game PS Studios are best known for, thanks
            to ex-PlayStation leadership&#39;s live-service push, it&#39;s
            actually been years since a game like this has some. I therefore
            predict that it will end up with the highest critical reception of
            all XDev games and only be surpassed by Helldivers 2&#39;s
            commercial reception of over 12 million copies sold.
          </Paragraph>
          <Paragraph>
            Lost Soul Aside is also shaping up to be a great, but not an
            industry-defining action-adventure/souls game. If I had to guess,
            I&#39;d say its critical and commercial performance will be very
            similar to Stellar Blade.
          </Paragraph>
          <Paragraph marginBottom={8}>
            In terms of 2026 and beyond, the nature of what XDev does makes it
            hard to predict their future when it comes to specific games and
            genres. But that&#39;s what makes them such an interesting studio to
            follow. As long as they stay away from VRs and vehicular combat,
            their PS5 history dictates that their 2026 releases will at least be
            good.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={ds2OTB}
            alt="Death Standing 2 On The Beach cutscene"
            id="d2s-otb"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="d2s-otb" className="block text-center mb-8">
            XDev&#39;s Upcoming Death Stranding 2
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="XDev" />
    </Container>
  );
}

export default XDevpage;

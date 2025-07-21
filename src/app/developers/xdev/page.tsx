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
      <DeveloperButton developer="XDev" urlPath="https://x.com/Sony_XDEV" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Formed in 2000, XDev has a unique role in PS Studios. They don&#39;t
        develop games, but instead collaborate with external studios by funding
        their development of (mostly) exclusive games for PlayStation. This
        hands-off approach means XDev ships more games than other PS Studios,
        while producing an eclectic selection from the very different
        developers.
      </Paragraph>
      <Paragraph marginBottom={8}>
        XDev has shipped 10 PS5 games, with 2024 being their highest yearly
        output at 4. They currently have 2 games for 2025: Action-Adventures
        &#39;Lost Soul Aside&#39; in August and June&#39;s &#39;Death Stranding
        2: On the Beach&#39;, which received an excellent 89 on Metacritic.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            XDev&#39;s PS5 collaborations have been inconsistent. While
            2021&#39;s &#39;Destruction AllStars&#39; and 2022&#39;s
            &#39;Firewall Ultra&#39; share the lowest rated PS Studios
            Metacritic score at 62, 2024 games like &#39;Helldivers 2&#39; and
            &#39;Stellar Blade&#39; far exceeded critical and commercial
            expectations.
          </Paragraph>
          <Paragraph>
            Recently released DS2 is however by far, their most AAA PS5 game.
            It&#39;s also a more cinematic game that PS Studios are known for,
            but due to ex-PlayStation leadership&#39;s live-service push,
            it&#39;s actually been nearly 2 years since PS Studios released one.
            Its 89 Metacritic was expected, and will likely only be surpassed by
            Helldivers 2 commercially.
          </Paragraph>
          <Paragraph>
            Lost Soul Aside looks like a great, but not industry-defining
            action-adventure. Its critical and commercial performance will
            likely be similar to Stellar Blade.
          </Paragraph>
          <Paragraph marginBottom={8}>
            In terms of 2026 and beyond, XDev&#39;s nature makes it hard to
            predict future games/genres. After all, no one saw Marvel Tōkon
            coming. As long as they stay away from VR and vehicular combat,
            their PS5 history indicates that XDev games will at least be good.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={ds2OTB}
            alt="Death Standing 2: On The Beach's Norman Reedus"
            id="d2s-otb"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="d2s-otb" className="block text-center mb-8 md:ml-5">
            XDev&#39;s Death Stranding 2: On The Beach
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="XDev" />
    </Container>
  );
}

export default XDevpage;

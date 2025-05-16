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
        simultaneously producing an eclectic selection from the very different
        developers.
      </Paragraph>
      <Paragraph marginBottom={8}>
        On PS5 alone, XDev has already shipped 9 games, with 2024 being their
        highest output at 4. In 2025, XDev currently have 2 announced games.
        Strand game &#39;Death Stranding 2: On The Beach&#39; in June and
        Action-Adventure &#39;Lost Soul Aside&#39; in September.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            XDev have two games publicly in development. A remake of 2015&#39;s
            Until Dawn by Ballistic Moon that&#39;s releasing in October and
            Death Stranding 2 by Kojima Productions.
          </Paragraph>
          <Paragraph>
            Analytically, XDev&#39;s collaborations have been inconsistent this
            gen, with 2022&#39;s VR FPS &#39;Firewall Ultra&#39; being the
            biggest disappointment at 61. It&#39;s actually the lowest rated PS5
            game by all of PS Studios.
          </Paragraph>
          <Paragraph>
            However, all three of XDev&#39;s 2024 games have been successful.
            Helldivers 2 in particular far exceeded anyone&#39;s expectations
            and easily stands amongst PS Studios&#39;s best games.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Between this recent track record, Until Dawn being a remake, and DS2
            being a sequel of a critically acclaimed game, I predict both games
            will be well received and strengthen XDev&#39;s ascent as the PS5
            gen continues.
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

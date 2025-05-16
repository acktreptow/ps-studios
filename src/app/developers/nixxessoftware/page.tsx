import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gotTrophies from "../../../../public/images/dev-pages/got-trophies.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Nixxes Software",
  description:
    "The history and future of Nixxes Software, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function NixxesSoftwarePage(): JSX.Element {
  return (
    <Container>
      <Title title="Nixxes Software" />
      <DeveloperButton developer="Nixxes" urlPath="https://nixxes.com" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1999, this Utrecht-based studio holds a unique position
        within PlayStation Studios ever since being acquired in 2021. Unlike
        other first-party studios who develop new PS5 games, remakes, and
        remasters, Nixxes primarily develop the PC ports of them.
      </Paragraph>
      <Paragraph>
        Since 2022, they&#39;ve already released 8 ports with all the bells and
        whistles you&#39;d expect from a PC version. It&#39;s also hard to
        predict what the next port will be as the timeframe from announcement to
        release is very short. Most likely because they&#39;re just ports, not
        new games that need a marketing cycle to make the general audience
        aware.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Out of the 8 PC ports, there is one that stands out that should be of
        interest to PS5 fans. A remaster of 2017&#39;s Horizon Zero Dawn. This
        marks the first time a Nixxes port also got a PS5 version since being
        acquired, and is almost certainly a sign of things to come.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Nixxes are an incredibly important studio for PlayStation as this is
            the easiest way Sony finds growth outside of the console market.
            Something needed as AAA game development costs continue to rise.
          </Paragraph>
          <Paragraph>
            I highly doubt we&#39;ll see Nixxes PC ports ship simultaneously
            with the PS5 version however. Logistically, this is a nightmare for
            an external studio to do so effectively. Unless the PS5 version is
            held until their PC port is ready.
          </Paragraph>
          <Paragraph>
            What if you don&#39;t play on PC? Well, there&#39;s still a reason
            to keep an eye on them! In 2023, Nixxes confirmed that it&#39;s
            started working on remasters too.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Hopefully that means we get some great PS5 remasters of marque
            PS3/PS4 games that deserve a fresh coat of paint from this expert
            developer!
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gotTrophies}
            alt="Ghost of Tsushima PC trophies overlay"
            id="got-trophies"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="got-trophies" className="block text-center mb-8">
            PlayStation&#39;s PC Overlay For Trophies
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PC Ports" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Nixxes Software" />
    </Container>
  );
}

export default NixxesSoftwarePage;

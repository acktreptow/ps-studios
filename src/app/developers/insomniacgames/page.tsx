import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import insomniacPortfolio from "../../../../public/images/dev-pages/insomniac-portfolio.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Insomniac Games",
  description:
    "The history and future of Insomniac Games, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function InsomniacGamesPage(): JSX.Element {
  return (
    <Container>
      <Title title="Insomniac Games" />
      <DeveloperButton
        developer="Insomniac"
        urlPath="https://insomniac.games/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1994, this California-based studio was developing PlayStation
        exclusives decades before being acquired by Sony in 2019. These include
        the Spyro the Dragon (PS1) and Resistance (PS3) trilogies, as well as
        Ratchet & Clank on PS2/3. All funded by Sony.
      </Paragraph>
      <Paragraph>
        In the early 2010s, the latter two IPs started to flounder. This caused
        Insomniac to branch out and develop games for EA (2013&#39;s Fuse), Xbox
        (2014&#39;s Sunset Overdrive), Oculus (2016&#39;s Edge of Nowhere) etc.
        While these also weren&#39;t commercial hits, Insomniac found solid
        ground again with 2018&#39;s Spider-Man on PS4. It&#39;s not only their
        highest selling game ever, but it&#39;s also the highest selling
        first-party PS4 title.
      </Paragraph>
      <Paragraph marginBottom={8}>
        With this unprecedented success, it&#39;s no surprise that Sony acquired
        Insomniac just a year later to start work on their many PS5 games.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Most agree that Insomniac has been the most important PlayStation
            studio this generation because they&#39;ve already shipped 4 games
            to critical and commercial success. Furthermore, even though
            Insomniac has already produced more PS5 games than most developers
            will this entire generation, we know their next game - Marvel&#39;s
            Wolverine.
          </Paragraph>
          <Paragraph>
            Unfortunately, Wolverine has had a troubled development since its
            2021 CG announcement trailer, such as losing the original directors.
            Insomniac also suffered a huge leak, which led to playable
            development builds online and the early reveal that Wolverine is the
            start of a PlayStation-exclusive trilogy centered around X-Men. Yet
            despite these issues, Wolverine was finally shown off again in 2025
            with a gameplay deep dive that was very well received.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Whatever happens with Wolverine though, with 4 great games already
            released on PS5, Insomniac have more than pulled their weight this
            generation as they&#39;ve been the most active and important
            developer for PS Studios. Considering the problems at other prestige
            studios like Naughty Dog, they&#39;ll also likely hold these titles
            when the PS5 is said and done.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={insomniacPortfolio}
            alt="Insomniac's PS5 portfolio"
            id="insomniac-portfolio"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="insomniac-portfolio"
            className="block text-center mb-8"
          >
            Insomniac&#39;s PS5 Portfolio
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Insomniac Games" />
    </Container>
  );
}

export default InsomniacGamesPage;

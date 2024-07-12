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
        Founded in 1994, this California-based studio had been developing
        PlayStation exclusives decades before being officially acquired by Sony
        in 2019.
      </Paragraph>
      <Paragraph>
        These exclusives include the Spyro the Dragon (PS1) and Resistance (PS3)
        trilogies, as well as Ratchet & Clank on PS2/3. All funded by Sony.
      </Paragraph>
      <Paragraph>
        In the early 2010s, the latter two IP started to flounder which caused
        Insomniac to branch out. Developing games funded by EA, Xbox and Oculus.
      </Paragraph>
      <Paragraph>
        Insomniac would however find solid ground again with 2018&#39;s
        Spider-Man for the PS4. It was not only their highest selling game ever,
        but was also the highest selling PS4 first-party game.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Naturally Sony, after seeing this success, acquired them the following
        year. They&#39;ve been on fire ever since!
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Most people agree that Insomniac have been the most important
            PlayStation studio this generation. That&#39;s because they&#39;ve
            already shipped four games to critical and commercial success.
          </Paragraph>
          <Paragraph>
            Furthermore, even though Insomniac have already released more titles
            than most developers will this entire generation, we know their next
            game - Marvel&#39;s Wolverine in (likely) 2025.
          </Paragraph>
          <Paragraph>
            Between Insomniac&#39;s current track record and what&#39;s already
            out there about Wolverine, it&#39;s an easy prediction to say that
            it will be a hit.
          </Paragraph>
          <Paragraph marginBottom={8}>
            I really can&#39;t see them not surpassing Naughty Dog and Santa
            Monica as the most important first-party developer for the PS5 when
            all is said and done.
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

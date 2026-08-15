import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import marathonStolenArt from "../../../../public/images/dev-pages/marathon-stolen-art.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import List from "../../components/List";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Bungie",
  description:
    "The history and future of Bungie, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function BungiePage(): JSX.Element {
  return (
    <Container>
      <Title title="Bungie" />
      <DeveloperButton developer="Bungie" urlPath="https://www.bungie.net" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1991, Bungie are a Washington-based studio with a unique
        history. They were part of PS Studios&#39; main rival, Microsoft
        Studios, for most of the 2000s and created Xbox&#39;s flagship IP, Halo.
        Then in the 2010s, they worked with Activision on the Destiny IP,
        releasing 2 titles and many expansions until 2019. Coincidentally,
        Activision was then the company Microsoft announced its intention to
        acquire in 2022.
      </Paragraph>
      <Paragraph>
        2022 was also an important year for Bungie, as that was when Sony
        acquired them. Yet, Bungie&#39;s uniqueness continued, as they&#39;re
        the only first-party studio not under PS Studios. Instead, they&#39;re
        an independent Sony subsidiary. Bungie are also the only first-party
        developer who can ship their games to all competing platforms such as
        Xbox, even at launch.
      </Paragraph>
      <Paragraph>
        Why does Bungie have more freedom than all other PS Studios?
        Desperation. Sony saw the money live services like Destiny were making,
        but had no in-house knowledge to create their own. To get Bungie to
        sell, Sony overpaid at $3.6 billion and accepted very Bungie-friendly
        terms in order to get them to advise on Sony&#39;s other live-service
        titles, while raking in revenue from Destiny 2.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Unfortunately for Sony, what transpired immediately after has been a far
        cry from their expectations, to the point where the Bungie acquisition
        is easily the biggest blunder throughout all of PS Studios in the PS5
        era.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Bungie continued to release D2 expansions after being acquired,
            including 2024&#39;s critically acclaimed The Final Shape that
            excellently ended the main narrative. However, starting with
            2023&#39;s Lightfall, all yearly expansions sold well below
            expectations. By 2026, Sony had enough and announced D2&#39;s final
            major content update, then laid off most of the team.
          </Paragraph>
          <Paragraph>
            Bungie also launched a second live-service called Marathon in 2026.
            This PvP extraction FPS also received critical acclaim despite
            pre-launch issues such as a stolen art scandal. However, it too has
            severely underperformed, to the point where it has roughly 10% of
            D2&#39;s Steam player base, months after its final update. While
            Bungie are experimenting with more player-friendly PvE modes, this
            hasn&#39;t turned around Marathon&#39;s fortunes.
          </Paragraph>
          <Paragraph>
            With 2 live services not making enough money to justify Bungie&#39;s
            $3.6 billion acquisition, Sony are taking action to recoup what they
            can. This includes halving Bungie&#39;s headcount via rounds of
            layoffs and taking hundreds of millions in impairment losses. Sony
            are also forcing Bungie&#39;s integration into PS Studios to exert
            more control by taking board seats and spinning out Bungie&#39;s 1
            promising game into their own studio called teamLFG under PS
            Studios.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Bungie were meant to help Sony flourish in the live-service market.
            Instead, Sony are helping Bungie simply survive, which isn&#39;t
            even assured as they have no title in active development. This
            indictment alone makes Bungie the biggest failure of the PS5 era,
            including the 9 PS Studios closed. The combined losses of those 9, even
            factoring in the hundreds of millions lost on Firewalk, aren&#39;t
            close to the billions Sony burned on Bungie.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={marathonStolenArt}
            alt="Stolen Marathon art assets"
            id="marathon-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="marathon-art" className="block text-center mb-8">
            The Stolen Marathon Art Assets
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Bungie" />
    </Container>
  );
}

export default BungiePage;

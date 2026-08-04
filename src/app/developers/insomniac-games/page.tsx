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
        Founded in 1994, Insomniac Games are a California-based studio that were
        already developing PlayStation exclusives as a second-party developer
        decades before Sony acquired them in 2019. Examples include the Spyro
        the Dragon and Resistance trilogies on PS1 and PS3 respectively, as well
        as over 10 Ratchet & Clank titles across PS2-PS4.
      </Paragraph>
      <Paragraph>
        Unfortunately, by the early 2010s, Insomniac were over a decade removed
        from their last Spyro title, Resistance had been overshadowed by Call of
        Duty (as most FPS IPs were), and R&C titles were experiencing declining
        sales due to IP fatigue from the volume of entries. This downward
        trajectory caused Insomniac to adopt a spreadshot approach, developing
        games for a variety of publishers and platforms. The most notable titles
        from this branching out were 2013&#39;s Fuse for EA, 2014&#39;s Sunset
        Overdrive for Xbox, and 2016&#39;s Edge of Nowhere for Oculus VR.
      </Paragraph>
      <Paragraph marginBottom={8}>
        While these games were also commercial failures, Insomniac still
        continued working with Sony, and coincidentally, it was back home where
        they found solid ground again. Insomniac released Marvel&#39;s
        Spider-Man on PS4 in 2018 as a second-party title, which became not only
        their highest-selling game ever, but also the highest-selling
        Sony-published PS4 title. With this unprecedented success, it&#39;s no
        surprise that Sony acquired Insomniac just a year later to start work on
        their many PS5 games.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Considering Insomniac&#39;s output in previous generations, it&#39;s
            no surprise that they&#39;ve already shipped 4 PS5 games to critical
            and commercial success, 3 of which were new experiences.
            Furthermore, even though Insomniac have already released more PS5
            titles than most developers will in the entire generation, their
            next game, Marvel&#39;s Wolverine, is also nearing release.
          </Paragraph>
          <Paragraph>
            Unfortunately, even though the 2021 CG announcement trailer stated a
            2024 release, Wolverine has had a troubled development. Not only did
            it lose its original directors, but the infamous Insomniac leak also
            resulted in playable development builds online and the early reveal
            that Wolverine is the start of a PlayStation-exclusive X-Men
            trilogy. Fortunately, despite these issues, Wolverine was first
            shown off again in 2025 with a gameplay deep dive, followed by many
            more trailers and other marketing beats that have all been
            positively received.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Even if Wolverine underperforms critically and/or commercially,
            though, with 4 great games already released on PS5, Insomniac have
            more than pulled their weight in a generation where PS Studios are
            primarily known for too few releases due to PlayStation&#39;s
            overall failed live-service execution. By simply being there for
            gamers with consistent releases, they&#39;ve been the most important
            and arguably the best PS Studios developer of the PS5 generation.
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

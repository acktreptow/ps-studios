import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import sarosConceptArt from "../../../../public/images/dev-pages/saros-concept-art.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Housemarque",
  description:
    "The history and future of Housemarque, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function HousemarquePage(): JSX.Element {
  return (
    <Container>
      <Title title="Housemarque" />
      <DeveloperButton
        developer="Housemarque"
        urlPath="https://housemarque.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1995, Housemarque are a Finnish developer that, prior to PS5,
        were primarily known for critically acclaimed arcade shooters like Super
        Stardust and Resogun. Most of Housemarque&#39;s games in their 30+ year
        history were also exclusively on PlayStation, with their last
        multiplatform title being 2011&#39;s Outland, shipping on both PS3 and
        Xbox 360.
      </Paragraph>
      <Paragraph>
        In 2017, Housemarque decreed &#39;arcade is dead&#39; after the poor
        commercial performance of their PS4 titles, despite continued critical
        acclaim, and moved away from typical arcade titles. This was first
        realized with 2021&#39;s Returnal on PS5, which kept the
        roguelike/arcade DNA for its gameplay, but moved to third-person, with
        far more emphasis on story and production value. This pivot gave
        Returnal more mainstream appeal, resulting in it becoming
        Housemarque&#39;s fastest-selling game at 560,000 copies in 3 months,
        and later surpassing 1 million units.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Due to this improved commercial success, it&#39;s unsurprising that Sony
        acquired Housemarque shortly after while they continued to support
        Returnal with a PC version and co-op mode. Housemarque then announced
        Saros as a spiritual sequel to Returnal in 2025, before shipping it in
        2026 to a surprising reception.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            While Returnal is a roguelike, Saros is a roguelite, and this pivot
            to more permanent progression between runs was the marketing focal
            point. In theory, a more approachable Returnal (which many found too
            hard) should&#39;ve furthered its mainstream appeal. However,
            Saros&#39;s sales trajectory is slightly slower than Returnal&#39;s,
            despite launching on a much larger PS5 install base.
          </Paragraph>
          <Paragraph>
            Critically, Saros performed as well as Returnal on Metacritic.
            However, consensus among gamers was that the amount of permanent
            progression and gameplay modifiers was an overcorrection, resulting
            in Saros losing some of Returnal&#39;s magic that stuck long after
            players put it down.
          </Paragraph>
          <Paragraph>
            Despite slightly unfavorable comparisons, though, Saros&#39;s
            critical acclaim was still in line with the best of
            Housemarque&#39;s arcade era, and surpassed those titles in sales
            too. Most importantly, they&#39;ve successfully reinvented
            themselves with these 2 titles during Sony&#39;s live-service push,
            making Housemarque easily one of the bright spots for PS Studios
            this generation.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Housemarque are likely done on PS5, but they&#39;re in an excellent
            position to reach greater heights on PS6. Especially if they find
            that perfect middle ground between Returnal and Saros.
          </Paragraph>
        </div>
        <div>
          <Image
            src={sarosConceptArt}
            alt="Saros concept art"
            id="saros-concept-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="saros-concept-art" className="block text-center mb-8">
            Saros Concept Art
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Housemarque" />
    </Container>
  );
}

export default HousemarquePage;

import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import concordCharacters from "../../../../public/images/dev-pages/concord-characters.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Firewalk Studios",
  description:
    "The history of Firewalk Studios, a former first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function FirewalkStudiosPage(): JSX.Element {
  return (
    <Container>
      <Title title="Firewalk Studios" />
      <DeveloperButton
        developer="Firewalk"
        urlPath="https://x.com/firewalkstudios"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Firewalk Studios were a Washington-based developer founded in 2018 by
        senior veterans of shooters like Halo and Destiny. With this pedigree in
        multiplayer shooters and Sony&#39;s increased focus on live-service,
        it&#39;s not surprising they were acquired in April 2023. Firewalk then
        announced Concord, a 5v5 live-service FPS, shortly after in May 2023,
        with an initial CG teaser trailer that was mostly well received.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Unfortunately, Concord&#39;s subsequent story and gameplay trailers
        throughout 2024 were overwhelmingly hated, with character designs
        especially panned. Early playtests also showcased how gameplay
        wasn&#39;t compelling enough to justify $40, especially compared to its
        F2P competitors like Fortnite and Overwatch. All this negative publicity
        resulted in Concord&#39;s historically poor launch on PS5/PC in August
        2024, which forced Sony to take action they&#39;d never taken before and
        will likely never take again.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Critically, Concord is the lowest-rated first-party PS5 game with a
            62 on Metacritic - a score it shares with Firewall Ultra and Lost
            Soul Aside, 2 second-party titles made by far smaller development
            teams at a fraction of Concord&#39;s budget. However, it&#39;s
            Concord&#39;s commercial performance that&#39;s truly noteworthy.
          </Paragraph>
          <Paragraph>
            Concord only sold around 25,000 copies, a figure so low that after
            only 11 days, Sony removed it from sale and forced refunds, opting
            to completely write off the title in its current state. Firewalk
            explored how to successfully relaunch Concord, but in October, the
            studio closed along with confirmation that the game wouldn&#39;t
            return.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Concord marked the first time Sony refunded a game due to its
            reception. When factoring in Firewalk&#39;s acquisition cost as
            well, the Concord experiment easily resulted in over $100 million in
            losses. These are historic failures for PS Studios, rivalled only by Bungie in the PS5 era.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={concordCharacters}
            alt="Concord playable characters"
            id="concord-characters"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="concord-characters"
            className="block text-center mb-8"
          >
            Concord&#39;s Panned Character Designs
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Firewalk Studios" />
    </Container>
  );
}

export default FirewalkStudiosPage;

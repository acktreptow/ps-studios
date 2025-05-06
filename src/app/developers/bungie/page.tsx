import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import finalShape from "../../../../public/images/dev-pages/the-final-shape.png";
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
        Founded in 1991, this Washington-based developer is the most unique
        first-party studio for a variety of reasons:
      </Paragraph>
      <List>
        <li>
          Microsoft used to own Bungie when they created Xbox&#39;s flagship IP
          &#39;Halo&#39;.
        </li>
        <li>
          Sony acquired Bungie in 2022, but they&#39;re the only first-party
          developer not part of PS Studios. They&#39;re an independent Sony
          subsidiary.
        </li>
        <li>
          Bungie are the only first-party developer who can port their games to
          competing platforms like Xbox.
        </li>
      </List>
      <Paragraph>
        Why does Bungie have more freedom than all of PS Studios? Desperation.
        Sony saw the money live-service games like Destiny were making, but had
        no in-house knowledge to make their own. To get Bungie to sell, Sony
        overpaid at $3.6 billion and accepted all their terms.
      </Paragraph>
      <Paragraph>
        Bungie was meant to advise PS Studios on their live-service games while
        simultaneously raking in revenue from Destiny 2, but it turns out that
        the emperor has no clothes. D2 has been severely underperforming since
        the acquisition.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Since 2023, there&#39;s been many rounds of layoffs, Sony taking board
        seats, a migration of Bungie employers to other PS Studios, and a whole
        incubation team spun out into a new developer under PS Studios, (the
        MOBA Project Gummybears). Essentially, Sony are recouping what they can
        from Bungie once it became clear they wouldn&#39;t see ROI through their
        live-service expertise.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            On PS5, Bungie has only released a port of Destiny 2 in 2020.
            Although its final paid expansion, 2024&#39;s The Final Shape, was
            critically acclaimed, its underwhelming sales led to the hollowing
            out of Bungie and further integration into PS Studios.
          </Paragraph>
          <Paragraph>
            Bungie also revealed Marathon, a live-service extraction shooter, in
            2023. It then took until March 2025 to be showcased, with many
            playtests going on before releasing in September 2025.
          </Paragraph>
          <Paragraph>
            To call Marathon important for Bungie is an understatement. For
            Bungie to keep any remaining autonomy, it must do well commercially
            and help justify the $3.6 billion acquisition. However, the lukewarm
            response so far suggests its not good enough to justify its $40
            price tag.
          </Paragraph>
          <Paragraph marginBottom={8}>
            I therefore predict that while Marathon won&#39;t reach Concord
            levels of failure, it won&#39;t prevent Sony from further making
            changes to Bungie and recoup as much as it can from a failed
            acquisition.
          </Paragraph>
        </div>
        <div>
          <Image
            src={finalShape}
            alt="Destiny 2: The Final Shape key art"
            id="final-shape"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="final-shape" className="block text-center mb-8">
            Destiny 2&#39;s Last Expansion
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Bungie" />
    </Container>
  );
}

export default BungiePage;

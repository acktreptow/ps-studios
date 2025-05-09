import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import mlb24 from "../../../../public/images/dev-pages/mlb-24.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "San Diego Studio",
  description:
    "The history and future of San Diego Studio, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function SanDiegoStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="San Diego Studio" />
      <DeveloperButton
        developer="San Diego"
        urlPath="https://sonysandiegostudio.games/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2001, San Diego Studio is the first-party developer
        responsible for the MLB: The Show series. The annualized baseball game
        is the only IP they work on, meaning 5 MLB games have shipped on PS5
        since 2021. All releasing in the same March/April timeframe.
      </Paragraph>
      <Paragraph>
        This generation has been different though. Despite SDS being
        first-party, the MLB has forced PlayStation to develop an Xbox and
        Nintendo port since MLB 21 or they would lose the license. Furthermore,
        Xbox initially went around Sony and secured a deal with the MLB to have
        the game arrive day 1 into their Gamepass subscription.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Despite these enforced monumental changes to the IP&#39;s business
        model, clearly, they were the better alternative to losing the license
        as MLB The Show has continued to release annually.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            This one is easy to predict. SD Studio hasn&#39;t been the primary
            developer on a non-MLB game since 2016&#39;s Kill Strain.
            Considering rising development costs coupled with external economic
            factors like tariffs and inflation, it&#39;s also unlikely they
            would be allowed to experiment with something new, even if they want
            to.
          </Paragraph>
          <Paragraph>
            We&#39;re also 5 games deep into the series becoming multiplatform
            and nothing has materially changed. MLB going into Xbox Gamepass was
            the one change that could have altered SD Studio&#39;s trajectory,
            but even that didn&#39;t, with Xbox obviously not seeing the
            benefits as they didn&#39;t renew their original contract to have it
            appear day 1 in their subscription service.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It&#39;s therefore safe to assume they&#39;ll continue with MLB: The
            Show for the foreseeable future. However, MLB 25 was the first to
            skip the PS4/Xbox One, so the only big change is the move from
            Switch 1 to Switch 2 for MLB The Show 26.
          </Paragraph>
        </div>
        <div>
          <Image
            src={mlb24}
            alt="MLB The Show 24 promotional material"
            id="mlb-24"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="mlb-24" className="block text-center mb-8">
            MLB The Show 24 Advertisement
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="San Diego Studio" />
    </Container>
  );
}

export default SanDiegoStudioPage;

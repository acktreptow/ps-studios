import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import mlb25 from "../../../../public/images/dev-pages/mlb-25.png";
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
        This generation has been different though. Despite San Diego Studio
        being first-party, the MLB has forced PlayStation to develop an Xbox
        port since MLB 21 and Nintendo port since MLB 22, or they would lose the
        license. Furthermore, Xbox initially went around Sony and secured a deal
        with the MLB to have the game arrive day 1 into their Gamepass
        subscription.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Even with the enforced monumental changes to the IP&#39;s business model
        though, clearly, they were the better alternative to losing the license
        as San Diego Studio has continued to release MLB The Show annually.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            San Diego Studio hasn&#39;t been the primary developer of a non-MLB
            game since 2016&#39;s Kill Strain. Rising development costs coupled
            with external economic factors then further make it unlikely that
            SDS would work on something new, even if they wanted to.
          </Paragraph>
          <Paragraph>
            We&#39;re now also 5 games into the multiplatform strategy and
            nothing has materially changed. Additionally, going into Gamepass
            was the aspect that could&#39;ve shifted SDS&#39;s focus, but
            considering Xbox didn&#39;t renew that contract past MLB 24, its
            ability to move PS5 owners to the Xbox subscription didn&#39;t
            happen in numbers for either Sony or Microsoft to care.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It&#39;s therefore safe to assume SDS will continue with MLB: The
            Show for the foreseeable future, with the only big change likely
            being a move from Switch to Switch 2 for MLB 26.
          </Paragraph>
        </div>
        <div>
          <Image
            src={mlb25}
            alt="MLB 25 box art for all platforms"
            id="mlb-25"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="mlb-25" className="block text-center mb-8 md:ml-5">
            MLB 25&#39;s Box Art For All 3 Consoles
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="San Diego Studio" />
    </Container>
  );
}

export default SanDiegoStudioPage;

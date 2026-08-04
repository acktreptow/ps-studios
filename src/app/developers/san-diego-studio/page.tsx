import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import mlb26 from "../../../../public/images/dev-pages/mlb-26.png";
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
        Founded in 2001, San Diego Studio are the first-party studio responsible
        for the MLB: The Show series. This annualized baseball IP, which began
        in 2006 for PS2 and PSP, is the only series they work on, meaning 6 MLB
        games have shipped on PS5 since 2021, with all of them releasing in the
        same March/April window.
      </Paragraph>
      <Paragraph>
        While SDS continue to exclusively work on the series and have provided
        the incremental changes expected out of all yearly sports IPs, the PS5
        generation has significantly transformed the business side. Firstly,
        despite SDS being a PS Studio, MLB have forced PlayStation to
        develop an Xbox port since MLB 21 and a Nintendo port since MLB 22, or
        they would lose the license.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Additionally, Xbox also initially went around Sony and secured a deal
        with MLB to have the game launch day 1 into their Game Pass
        subscription. However, while these enforced changes to the IP&#39;s
        business model could&#39;ve easily led to some major disruptions, they
        instead provided some very surprising answers.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            San Diego Studio hasn&#39;t been the primary developer of a non-MLB
            game since 2016&#39;s Kill Strain. Rising development costs coupled
            with external economic factors then further make it unlikely that
            SDS would work on something new, even if they wanted to. Clearly,
            they were the better alternative to losing the license as SDS have
            continued to release MLB titles annually.
          </Paragraph>
          <Paragraph>
            We&#39;re now also 6 games into the multiplatform strategy and
            nothing has materially changed. Additionally, going into Gamepass
            was the aspect that could&#39;ve shifted SDS&#39;s focus, but
            considering Xbox didn&#39;t renew that contract past MLB 24, its
            ability to move PS5 owners to the Xbox subscription didn&#39;t
            happen in numbers for either Sony or Microsoft to care about.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It&#39;s therefore likely SDS just continues with MLB: The Show for
            the foreseeable future, with the big change for MLB 27 likely being
            a move from Switch to Switch 2. SDS also launched a standalone
            mobile version as a regional test in the Philippines that&#39;s
            worth keeping an eye on for 2027.
          </Paragraph>
        </div>
        <div>
          <Image
            src={mlb26}
            alt="MLB 25 box art for all platforms"
            id="mlb-25"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="mlb-25" className="block text-center mb-8 md:ml-5">
            MLB 26&#39;s Box Art For All 3 Consoles
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="San Diego Studio" />
    </Container>
  );
}

export default SanDiegoStudioPage;

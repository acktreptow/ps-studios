import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import mlb24 from "../../../../public/images/dev-pages/mlb-24.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
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
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2001, San Diego Studio is (obviously) a San Diego-based
        first-party developer that is responsible for the MLB: The Show series.
      </Paragraph>
      <Paragraph>
        This annual baseball series is the only IP they work on. So naturally,
        there&#39;s been four MLB games for the PS5 that have come out in
        March/April since 2021.
      </Paragraph>
      <Paragraph>
        This generation has been different in one aspect though. Despite being a
        Sony first-party developer, the MLB have forced PlayStation to develop
        an Xbox and Nintendo port since MLB 21, or they would lose the license.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Clearly, making the series multiplatform was the better alternative to
        losing the license as the series has continued.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            This one is easy to predict. SD Studio haven&#39;t developed a
            non-MLB game for close to a decade. And with rising development
            costs coupled with tighter profits for PlayStation, it&#39;s
            unlikely they would be allowed to experiment with something new,
            even if they want to.
          </Paragraph>
          <Paragraph>
            We&#39;re also four games deep into the series being multiplatform
            and nothing has materially changed. That was the one change that
            could have altered SD Studio&#39;s trajectory, but didn&#39;t.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It&#39;s therefore safe to assume they&#39;ll continue with MLB: The
            Show for the foreseeable future.
          </Paragraph>
        </div>
        <div>
          <Image
            src={mlb24}
            alt="MLB The Show 24 promotional material"
            width={500}
            height={500}
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

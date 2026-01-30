import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import kazunoriYamauchi from "../../../../public/images/dev-pages/kazunori-yamauchi.png";
import gt7PSVR2 from "../../../../public/images/dev-pages/gt7-psvr2.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Polyphony Digital",
  description:
    "The history and future of Polyphony Digital, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function PolyphonyDigitalPage(): JSX.Element {
  return (
    <Container>
      <Title title="Polyphony Digital" />
      <DeveloperButton
        developer="Polyphony"
        urlPath="https://www.polyphony.co.jp/"
      />
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="History" />
          <Paragraph>
            Founded internally by auteur Kazunori Yamauchi in 1998, this
            Tokyo-based developer is known for PlayStation&#39;s best-selling
            IP, the Gran Turismo sim racing series, which has sold over 100
            million.
          </Paragraph>
          <Paragraph marginBottom={8}>
            At least one GT has shipped on every PlayStation console. For PS5,
            that&#39;s 2022&#39;s critically and commercially acclaimed Gran
            Turismo 7, which is not only seen as the superior competitor to
            Xbox&#39;s Forza Motorsport, but is also viewed as the premier PSVR2
            experience.
          </Paragraph>
        </div>
        <div>
          <Image
            src={kazunoriYamauchi}
            alt="Polyphony Digital founder Kazunori Yamauchi"
            id="kazunori-yamauchi"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-sm"
          />
          <label
            htmlFor="kazunori-yamauchi"
            className="block text-center mb-8 md:ml-5"
          >
            Polyphony Founder Kazunori Yamauchi
          </label>
        </div>
      </ImageSection>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            It takes around 4-5 years for Polyphony to release a new GT these
            days, so I predict we&#39;ll see GT8 close to the end of the PS5
            gen. If you&#39;re a fan, I&#39;d be even more excited this time too
            - GT8 should be PS5 only and take an even further graphical leap on
            PS5 Pro. They&#39;ve also learned from GT7&#39;s launch issues,
            which will improve the gameplay loop.
          </Paragraph>
          <Paragraph>
            Never played GT or are a lapsed fan? It might be worth trying
            2024&#39;s My First Gran Turismo. Polyphony describes it as a
            &#39;free-to-play, beginner-friendly intro to the world of GT&#39;.
            Basically, it&#39;s an expanded demo with a limited number of cars and
            racetracks.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Otherwise, I would look to other PS Studios for your next
            first-party game. There&#39;s no confirmation Polyphony&#39;s next
            game is GT8, but it&#39;s a safe bet considering their track record.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gt7PSVR2}
            alt="GT7 on PSVR2"
            id="gt7-psvr2"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="gt7-psvr2" className="block text-center mb-8 md:ml-5">
            GT7&#39;s Optional VR Mode Via PSVR2
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Polyphony Digital" />
    </Container>
  );
}

export default PolyphonyDigitalPage;

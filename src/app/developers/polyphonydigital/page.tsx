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
            Founded internally by Sony auteur Kazunori Yamauchi in 1998, this
            Tokyo-based developer are renowned for their racing series Gran
            Turismo. It&#39;s also PlayStation&#39;s highest-selling franchise.
          </Paragraph>
          <Paragraph>
            At least one GT has shipped on every PlayStation console, so
            it&#39;s no surprise there&#39;s already one on the PS5. 2022&#39;s
            cross-gen Gran Turismo 7.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Despite a few (mostly self-inflicted) issues at launch, GT7 was
            critically and commercially acclaimed. It&#39;s also seen as the
            premier experience on PSVR2.
          </Paragraph>
        </div>
        <div>
          <Image
            src={kazunoriYamauchi}
            alt="Polyphony Digital founder Kazunori Yamauchi"
            id="kazunori-yamauchi"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-sm"
          />
          <label htmlFor="kazunori-yamauchi" className="block text-center mb-8">
            PD Founder Kazunori Yamauchi
          </label>
        </div>
      </ImageSection>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            It takes around four years for Polyphony to release a new GT, so I
            imagine we&#39;ll see GT8 close to the end of the PS5 gen.
          </Paragraph>
          <Paragraph>
            If you&#39;re a driving game fan, I would be even more excited this
            time too. GT8 will be PS5 only and should take an even further
            graphical leap with the PS5 Pro.
          </Paragraph>
          <Paragraph>
            They&#39;ve also learned from GT7&#39;s launch issues which will
            improve the gameplay loop, and the PSVR 2 mode could end up as the
            hardware&#39;s best experience.
          </Paragraph>
          <Paragraph>
            If you&#39;ve never played a Gran Turismo, or are perhaps a lapsed
            fan, it also might be worth trying 2024&#39;s &#39;My First Gran
            Turismo&#39;. It&#39;s what Polyphony describe as a
            &#39;free-to-play beginner-friendly introduction to the world of
            Gran Turismo&#39;. Basically, an expanded demo with a limited number
            of cars and racetracks.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Otherwise, I would just move on. There&#39;s zero confirmation
            Polyphony&#39;s next game is GT8, but it&#39;s a safe bet
            considering their track record.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gt7PSVR2}
            alt="GT7 PSVR2"
            id="gt7-psvr2"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="gt7-psvr2" className="block text-center mb-8">
            GT7&#39;s VR Mode Via PSVR2
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Polyphony Digital" />
    </Container>
  );
}

export default PolyphonyDigitalPage;

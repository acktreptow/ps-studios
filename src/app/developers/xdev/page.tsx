import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import ds2OTB from "../../../../public/images/dev-pages/ds2.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "XDev",
  description:
    "The history and future of XDev, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function XDevpage(): JSX.Element {
  return (
    <Container>
      <Title title="XDev" />
      <DeveloperButton developer="XDev" urlPath="https://x.com/Sony_XDEV" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Formed in 2000, XDev play a unique role within PS Studios as instead of
        developing games, they fund external studios to do so. This hands-off
        approach means XDev ship more games than other PS Studios and produce an
        eclectic selection from very different developers.
      </Paragraph>
      <Paragraph>
        So far, XDev have shipped 13 PS5 games. Their biggest successes are the
        surprise live-service juggernaut Helldivers 2 (Arrowhead Game Studios),
        and the AAA single-player blockbuster Death Stranding 2: On The Beach
        (Kojima Productions), showcasing the type of game PS Studios are known
        for. Both were commercially (especially HD2) and critically acclaimed.
      </Paragraph>
      <Paragraph>
        However, XDev partnerships have also resulted in some of the worst PS
        Studios offerings on PS5. Destruction AllStars (Lucid Games), Firewall
        Ultra (First Contact Entertainment), and Lost Soul Aside (Ultizero
        Games) all received a 62 on Metacritic, making them the lowest-rated PS
        Studio games on PS5. DSA and Firewall are also now unpurchasable as
        they&#39;re in the stages of shutting down.
      </Paragraph>
      <Paragraph marginBottom={8}>
        2024 was XDev&#39;s highest yearly output at 4, but there&#39;s only 1
        for 2026 - Marvel Tōkon: Fighting Souls (Arc System Works), which scored
        X on Metacritic. Tōkon also shipped on PC, something XDev will be
        increasingly known for given what Sony recently announced.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            XDev&#39;s PS5 collaborations have been inconsistent. While
            2021&#39;s Destruction AllStars and 2022&#39;s Firewall Ultra also
            scored 62 on Metacritic, making them the lowest rated PS Studios
            titles, 2024 games like Helldivers 2 and Stellar Blade far exceeded
            critical and commercial expectations.
          </Paragraph>
          <Paragraph>
            Recently released DS2 is however by far their most AAA PS5 game.
            It&#39;s also the more cinematic game that PS Studios are known for,
            but due to ex-PlayStation leadership&#39;s live-service push, it had
            been nearly 2 years since PS Studios released one. The 89 Metacritic
            was expected, and will likely only be surpassed by Helldivers 2
            commercially.
          </Paragraph>
          <Paragraph marginBottom={8}>
            In terms of 2026 and beyond, XDev&#39;s nature makes it hard to
            predict future games/genres. After all, no one saw Marvel Tōkon
            coming. Based on positive playtest feedback, this 2D fighter should
            at least start XDEV&#39;s 2026 off well. Additionally, as of 2026,
            XDev are the only PS Studios whose singe-player titles will come to
            PC going forward, whereas titles from other studios, like Saros and
            Ghost of Yotei from Housemarque and Sucker Punch respectively, will
            remain exclusive to PS5.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={ds2OTB}
            alt="Death Standing 2: On The Beach&#39;s Norman Reedus"
            id="d2s-otb"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="d2s-otb" className="block text-center mb-8 md:ml-5">
            XDev&#39;s Death Stranding 2: On The Beach
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="XDev" />
    </Container>
  );
}

export default XDevpage;

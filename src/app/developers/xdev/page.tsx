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
            As of 2026, XDev are the only PS Studio whose single-player games
            can come to PC. For example, Saros (Housemarque) and Ghost of Yōtei
            (Sucker Punch) are PS5 exclusive, even though their predecessors
            came to PC. This strategy shift is a new opportunity for XDev, as
            the PC audience can now only look to them for the single-player
            titles PS Studios are known for.
          </Paragraph>
          <Paragraph>
            XDev have announced 2 titles that coincidentally represent their
            inconsistent PS5 output. Kena: Scars of Kosmora (Ember Lab) is an
            anticipated action-adventure that the PC audience will likely pay
            more attention to, as it would be PS5-only if made by another
            studio. As a live-service shooter, 4:Loop (Bad Robot Games) was
            always PC-bound, but it faces an uphill battle due to the disdain
            Sony&#39;s hardcore base has for live services, and its 2 trailers
            were poorly received.
          </Paragraph>
          <Paragraph>
            Predicting future XDev titles is, however, difficult given their
            collaborative nature, especially since as of 2021, they now have
            European, American, and Japanese operations, allowing them to easily
            partner with studios in the industry&#39;s biggest regions. After
            all, no one saw Tōkon coming.
          </Paragraph>
          <Paragraph marginBottom={8}>
            With Sony&#39;s move away from PC, though, it makes sense for XDev
            to ship more single-player titles as they&#39;ll stand out even more
            now. More of them are also good for a hardcore PS5 base that&#39;s
            becoming increasingly disillusioned with Sony due to decisions like
            the live-service push.
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

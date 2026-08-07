import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
import Image from "next/image";
import gowRagnarok from "../../../../public/images/dev-pages/gow-ragnarok.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";
import GamesSection from "../../components/GamesSection";

export const metadata: Metadata = {
  title: "Santa Monica Studio",
  description:
    "The history and future of Santa Monica Studio, a first-party developer for PlayStation Studios.",
};

const gamesArray: Game[] = gamesData;

function SantaMonicaStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Santa Monica Studio" />
      <DeveloperButton
        developer="Santa Monica"
        urlPath="https://sms.playstation.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Santa Monica Studio are an LA-based developer founded in 1999. Outside
        of their first game, 2001&#39;s Kinetica for PS2, they&#39;ve
        exclusively developed titles for their critically and commercially
        acclaimed God of War series. SMS did, however, attempt to create a
        sci-fi IP in the mid-2010s, but it was cancelled in 2014. They also
        acted as a publisher and incubator for indie game studios, including
        renowned titles like 2012&#39;s Journey from Thatgamecompany, but this
        initiative was discontinued in 2016.
      </Paragraph>
      <Paragraph>
        So far, SMS have shipped 1 PS5 title as lead developer, 2022&#39;s God
        of War Ragnarök, which has already vaulted them into the top tier of PS
        Studios on PS5. Critically, Ragnarök is tied with Astro Bot as the
        highest-rated first-party PS5 game on Metacritic at 94. Commercially,
        the cross-gen title is also the fastest-selling first-party game in
        PlayStation history, with 5.1 million units in its first week, and has
        now surpassed 15 million copies sold. SMS also supported Ragnarök with
        PS5 Pro enhancements, a PC port, and the free Valhalla roguelite
        epilogue.
      </Paragraph>
      <Paragraph marginBottom={8}>
        SMS&#39;s other released PS5 title is 2026&#39;s God of War Sons of
        Sparta, a 2D action-platformer primarily developed by Mega Cat Studios,
        meaning the shadow-dropped title&#39;s mixed response lands mostly on
        them. Instead, SMS have been working on 2 mainline GoW projects.
        However, both bring something new to the IP, and therefore could easily
        disrupt the studio&#39;s fortunes if not executed correctly.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            God of War Laufey is SMS&#39;s next title and releases in February
            2027. Its initial 20-minute gameplay trailer was praised for its
            fast combat and enemies spanning numerous mythologies. However,
            it&#39;s the first mainline title where series protagonist Kratos is
            not the main character. Instead, it features his wife, the titular
            Laufey. This pivot, while narratively interesting, could limit
            sales, as some GoW fans may not want to play as anyone other than
            Kratos.
          </Paragraph>
          <Paragraph>
            SMS are also remaking the original Greek trilogy with a TBD release.
            While this news pleased long-time fans, unlike the PS3/Vita
            remasters, they&#39;re full remakes. This comes with its own
            challenges, as SMS must carefully modernize more old-school aspects,
            like camera perspective, difficulty spikes, and overt violent and
            sexual themes, in a way that doesn&#39;t feel censored.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Regardless of how these pan out, though, Ragnarök&#39;s
            record-breaking achievements ensure that SMS&#39;s work on PS5 will
            be positively viewed. At the very least, SMS will ship multiple PS5
            titles, which is more than most PS Studios, including similarly
            prestigious studios like Naughty Dog, can say. SMS&#39;s track
            record also suggests these new games will at least be good, which
            combined with Ragnarök, places them with Insomniac as two of the
            best PS Studios of the PS5 era.
          </Paragraph>
        </div>
        <div>
          <Image
            src={gowRagnarok}
            alt="The awards God of War Ragnarök won"
            id="gow-ragnarok"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="gow-ragnarok"
            className="block text-center mb-8 md:ml-5"
          >
            Ragnarök&#39;s 6 Game Awards Trophies
          </label>
        </div>
      </ImageSection>
      <SubTitle subtitle="PS5 Games" marginBottom={5} />
      <GamesSection games={gamesArray} developer="Santa Monica Studio" />
    </Container>
  );
}

export default SantaMonicaStudioPage;

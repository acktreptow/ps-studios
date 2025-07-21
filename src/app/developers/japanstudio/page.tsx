import { Metadata } from "next";
import Image from "next/image";
import japanStudioHolidays from "../../../../public/images/dev-pages/japan-studio-holidays.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Japan Studio",
  description:
    "The history of Japan Studio, a former first-party developer for PlayStation Studios.",
};

function JapanStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Japan Studio" />
      <DeveloperButton
        developer="Japan"
        urlPath="https://x.com/sonyjapanstudio"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        The Japan Studio branding began with 2006&#39;s PS3 launch game Genji:
        Days of the Blade, but they&#39;ve existed since PlayStation&#39;s 1993
        inception as a key internal developer within Sony Computer
        Entertainment, in a unique role. JS consisted of many internal teams
        such as Team ICO (ICO, Shadow of the Colossus) and Team Gravity (Siren,
        Gravity Rush), but an equal part of their portfolio came from external
        collaborations like FromSoftware (Demon&#39;s Souls, Bloodborne) and
        many golf games with Clap Hanz. Other JS IP include Ape Escape, Knack &
        Patapon.
      </Paragraph>
      <Paragraph>
        Japan Studio&#39;s split portfolio is best seen with its PS5 launch
        games. While Demon&#39;s Souls was in collaboration with prestige remake
        developer Bluepoint, the free PS5 pack-in Astro&#39;s Playroom was
        created internally by Team Asobi. Both were successful, but in April
        2021, JS was re-centered around Asobi to build on the popularity of
        Astro - effectively shuttering them.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Japan Studio&#39;s original AA games weren&#39;t considered profitable
        enough to continue, so Sony didn&#39;t renew most contracts outside of
        Asobi. Sony would instead continue with AAA cinematic games, whilst also
        diving into live-service. Thus leaving the AA and indie space to
        independent creators, third-party publishers, and second-party XDev
        partnerships.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            To be fair to Sony, it made sense to focus on Asobi. Astro&#39;s
            Playroom showcased the IP&#39;s potential, which was realized with
            2024&#39;s award-winning Astro Bot. Its success was also greater
            than anything developed by other Japan Studio teams in 10+ years and
            Sony still has XDev for external partnerships. But these points
            don&#39;t negate Sony&#39;s short-sighted dismissiveness of AA
            games, as JS would&#39;ve been a tremendous attribute for PS5 right
            now.
          </Paragraph>
          <Paragraph>
            Outside of Helldivers 2, Sony&#39;s live-strategy has failed. Most
            second-party games are cancelled, newly acquired studios have
            delayed games, and many old PS Studios like Bend have been wasted
            this generation. This has caused Sony&#39;s first-party output to
            become a sporadic wasteland since 2022, resulting in the prestige of
            PS Studios taking a significant hit.
          </Paragraph>
          <Paragraph>
            JS&#39;s AA games don&#39;t sell in the millions with a 90+
            Metacritic, but their smaller scope means many would ship, thus
            allowing Sony to still have consistent releases. With so few
            cinematic AAA titles currently, there&#39;s also an opening for the
            hardcore base to evangelize the AA scene more than they would&#39;ve
            pre-2022. Astro Bot perfectly shows the potential of AA games
            currently.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Fortunately, many former JS staff formed new studios to continue
            together, like Team Gravity&#39;s &#39;Slitterhead&#39; as Bokeh
            Game Studio, or Patapon staff&#39;s spiritual sequel
            &#39;Ratatan&#39;. Bandai Namco also licensed Everybody&#39;s Golf,
            Freedom Wars and Patapon from Sony to release sequels/remakes.
            Between these examples and Asobi, Japan Studio&#39;s legacy still
            lives on.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={japanStudioHolidays}
            alt="Japan Studio's final holiday card"
            id="jp-studio-holiday-card"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="jp-studio-holiday-card" className="block text-center">
            Japan Studio&#39;s Final Holiday Card
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default JapanStudioPage;

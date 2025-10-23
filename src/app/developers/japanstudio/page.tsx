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
        The Japan Studio branding began with 2006&#39;s Genji: Days of the Blade
        on PS3, but they&#39;ve existed since PlayStation&#39;s 1993 inception
        as a key developer within Sony Computer Entertainment, in a unique role.
        JS consisted of internal teams such as Team ICO (ICO, Shadow of the
        Colossus) and Team Gravity (Siren, Gravity Rush), but an equal part of
        their portfolio came from external partnerships like FromSoftware
        (Demon&#39;s Souls, Bloodborne) and many golf titles with Clap Hanz.
        Other IP include Ape Escape, Knack & Patapon.
      </Paragraph>
      <Paragraph>
        Japan Studio&#39;s split portfolio is best seen with its PS5 launch
        games. While Demon&#39;s Souls was in collaboration with Bluepoint, the
        free pack-in Astro&#39;s Playroom was created internally by Team Asobi.
        Both were successful, but Sony didn&#39;t renew JS contracts outside of
        Asobi because their original AA games weren&#39;t considered profitable
        enough to continue.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Instead, JS re-centered around Asobi to build on Astro&#39;s popularity
        in April 2021 - effectively closing JS. Sony would continue with AAA
        titles, while also diving into live-service. This left AA and indie
        titles to independent creators, third-party publishers, and XDev
        partnerships.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            To be fair to Sony, it made sense focusing on Asobi. Astro&#39;s
            Playroom showcased potential that was realized with 2024&#39;s
            award-winning Astro Bot - eclipsing any game from other JS teams in
            10+ years. Sony also has XDev for partnerships. But these points
            don&#39;t negate Sony&#39;s short-sighted dismissiveness of AA
            titles, where JS would be a tremendous attribute for PS5 right now.
          </Paragraph>
          <Paragraph>
            Outside of Helldivers 2, Sony&#39;s live-strategy has failed. Most
            second-party games are cancelled, newly acquired studios have
            delayed games, and many old studios like Bend have wasted this
            generation on GaaS. This has caused Sony&#39;s first-party output to
            become sporadic since 2022, resulting in the prestige of PS Studios
            taking a significant hit.
          </Paragraph>
          <Paragraph>
            JS&#39;s AA games don&#39;t sell millions with a 90+ Metacritic, but
            the smaller scope means many would ship, thus allowing Sony to still
            have consistent releases. With so few AAA titles currently,
            there&#39;s also an opening for the hardcore base to evangelize the
            AA scene more than they would&#39;ve pre-2023. Astro Bot&#39;s
            success demonstrates this perfectly.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Fortunately, many ex-JS staff formed new studios to continue making
            games together, like Team Gravity&#39;s Slitterhead as Bokeh Game
            Studio, or Patapon staff&#39;s spiritual sequel Ratatan. Bandai
            Namco also licensed Everybody&#39;s Golf, Freedom Wars & Patapon
            from Sony to release sequels/remakes. Between these games and Asobi,
            Japan Studio&#39;s legacy lives on.
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

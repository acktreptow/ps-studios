import { Metadata } from "next";
import Image from "next/image";
import japanstudioholidays from "../../../../public/images/dev-pages/japan-studio-holidays.png";
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
        developer="Japan Studio"
        urlPath="https://x.com/sonyjapanstudio"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Japan Studio was technically founded in 2005, with the 2006 PS3 launch
        title &#39;Genji: Days of the Blade&#39; being their first game to
        utilize this branding. In practice, however, the developer has been
        around since the very beginning of PlayStation in 1993, when they were a
        part of Sony Computer Entertainment.
      </Paragraph>
      <Paragraph>
        Japan Studio held a unique role within PlayStation Studios. Not only did
        it consist of multiple internal teams such as Team ICO (Shadow of the
        Colossus, The Last Guardian) and Team Gravity (Siren, Gravity Rush), but
        an equal part of their portfolio consisted of external collaborations.
        For example, FromSoftware with Demon&#39;s Souls and Bloodborne, as well
        as numerous golf games with Clap Hanz. Other well-known Japan Studio IP
        include Ape Escape, Knack and Patapon.
      </Paragraph>
      <Paragraph>
        Perhaps the best example of this split portfolio are the 2 games Japan
        Studio shipped for PS5&#39;s 2020 launch. While the Demon&#39;s Souls
        remake was in collaboration with prestige remake developer Bluepoint
        Games, the free PS5 pack-in title Astro&#39;s Playroom was created
        internally at Team Asobi. Both were a huge success, however just a few
        months later in April 2021, Japan Studio was re-centered around Team
        Asobi to build on the popularity of the Astro IP - effectively
        shuttering the developer.
      </Paragraph>
      <Paragraph marginBottom={8}>
        The reason given for this &#39;reorganization&#39; was that Japan
        Studio&#39;s AA game DNA was not considered profitable enough to
        continue with original game development, so most contracts outside of
        Asobi weren&#39;t renewed. Instead, PS Studios would continue with AAA
        cinematic games, whilst simultaneously diving head-first into the
        live-service arena. Therefore, leaving the AA and indie space to
        independent game creators and third-party publishers.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            While it made somewhat made sense for Japan Studio to be reorganized
            around Team Asobi. After all, Astro Bot and Astro&#39;s Playroom saw
            more success than any JS game had over the past decade, the simple
            fact is that it was a short-sighted move as Japan Studio
            would&#39;ve been a tremendous attribute to the PS5 first-party
            ecosystem right now.
          </Paragraph>
          <Paragraph>
            To call Sony execution of it&#39;s live-service strategy a failure
            would be a sever understatement. Not only has external partnerships
            like with Deviation been hit or miss, not only has newly acquired
            teams failed time and time again with Concord/FairGames etc, but
            even PS Studios who had no right to being this arena have
            essentially been completely wasted this generation like Bend and
            Bluepoint.
          </Paragraph>
          <Paragraph>
            Due to these failures, Sony&#39;s first-party output since 2021 has
            been dreadful. Instead, they&#39;ve had to resort to numerous
            second-party collaborations to pick up the slack, like Stellar
            Blade, Rise of the Ronin and Helldivers 2 in 2024 alone.
          </Paragraph>
          <Paragraph>
            Given this dearth, Japan Studio&#39;s AA DNA would have been a great
            asset right now. Although these games wouldn&#39;t set the world on
            fire critically or commercially, they would still be well received
            given the lack of other games and most importantly, it would allow
            Sony to have a consistent slate of first-party games. Something
            sorely missing, especially in contrast to Xbox&#39;s output since
            the second half of 2023. One just needs to look at Astro Bot to see
            the potential of these AA games currently.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Regardless, with Sony&#39;s live-service being severely downscaled,
            there&#39;s at least a chance that someone else could join the AA
            arena with the likes of Team Asobi and get PS Studios back to its
            roots. And fortunately for Japan Studio&#39;s main players its
            legacy lives on in other companies now. Like Toyama going from Siren
            and Gravity Rush to Slitterhead at his new Bokeh Studio. The
            developers of the Patapon series also continue its legacy with a
            spiritual sequel &#39;Ratatan&#39; under the Ratata Arts name.
          </Paragraph>
        </div>
        <div>
          <Image
            src={japanstudioholidays}
            alt="Concrete Genie"
            id="concrete-genie"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concrete-genie" className="block text-center">
            Some of JS&#39;s many IP wishing happy holidays a final time.
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default JapanStudioPage;

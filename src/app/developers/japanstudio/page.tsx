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
        independent game creators, third-party publishers, and second-party XDev
        collaborations.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            To be fair to Sony, in early 2021, it somewhat made sense to
            reorganize Japan Studio around Team Asobi. Astro&#39;s Playroom was
            so good that it could have been a traditionally released game
            instead of a pack-in. It also showcased a lot of Asobi&#39;s
            potential that was eventually realized with 2024&#39;s Astro Bot and
            its numerous Game of the Year awards. This Asobi success was so much
            more than anything internally developed by Japan Studio over the
            last decade, where even their biggest IP like Knack were so poorly
            received that it was basically a laughing stock. Finally, PS Studios
            also still had XDev to work on second-party collaborations so
            didn&#39;t have to rely on Japan Studio for that game development
            path. However, while one could play devil&#39;s advocate with the
            arguments, the more persuasive viewpoint is that it was an
            incredibly short-sighted move as Japan Studio would&#39;ve been a
            tremendous attribute to the PS5 first-party ecosystem right now.
          </Paragraph>
          <Paragraph>
            To describe Sony&#39;s execution of its live-service strategy a
            failure would be a sever understatement. At best, external
            partnerships have been hit or miss. As successful as Helldivers 2
            was, there were also many cancellations like Deviation&#39;s and
            Lucid Games&#39;s projects. Its newly acquired teams have also
            universally failed, whether that was the released Concord or the
            upcoming Fairgames/Marathon that are anchored with continuous bad
            press. Finally, there&#39;s also numerous established PS Studios
            that have no reason to even dip their toe into live service and have
            essentially been wasted this generation like Bend and Bluepoint. Due
            to these failures, Sony&#39;s first-party output since 2021 has been
            a sporadic wasteland of releases. So, they&#39;ve had to resort to
            numerous second-party collaborations to fill the gaps - like Stellar
            Blade, Rise of the Ronin and Helldivers 2 in 2024 alone.
          </Paragraph>
          <Paragraph>
            Given this dearth of first-party output, the prestige of PS Studios
            has taken a significant hit, which could&#39;ve been so bad that it
            could have cost Sony the dominant market position if not for the
            even worse mistakes from Xbox. Japan Studio&#39;s AA DNA therefore
            would have been a tremendous asset right now. Although these games
            wouldn&#39;t set the world on fire critically or commercially, they
            would still be well received given the lack of other games and most
            importantly, it would allow Sony to have a consistent slate of
            first-party games. Something sorely missing, especially in contrast
            to Xbox&#39;s output since the second half of 2023. One just needs
            to look at Astro Bot to see the potential of AA first-party games
            currently.
          </Paragraph>
          <Paragraph>
            Fortunately for gamers, Japan Studio&#39;s legacy lives on through
            various third-party developers that were formed in the wake of
            JS&#39;s closure. For example, Team Gravity developers formed Bokeh
            Studio to release Slitterhead and the developers of the Patapon
            continue its legacy with a spiritual sequel &#39;Ratatan&#39; under
            the Ratata Arts name. We&#39;re also getting direct sequels and/or
            ports of Everybody&#39;s Golf, Freedom Wars and Patapon thanks to
            Bandai Namco seeing the value of the AA space and licensing these IP
            to bring them back from Sony&#39;s graveyard.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Between these examples and Asobi, Japan Studio still somewhat lives
            on - certainly more than the other 5 studios that have been closed
            during the PS5 generation. However, Sony&#39;s mistakes guarantee
            they get very little credit for this while taking every piece of
            criticism for the severe lack of first-party games since 2021.
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

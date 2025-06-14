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
        Japan Studio was technically founded in 2005, with their first game
        under that name being 2006&#39;s Genji: Days of the Blade for the PS3
        launch. However, they were a part of Sony Computer Entertainment all the
        way back at the beginning since 1993. Japan Studio was just a rebrand
        that still incorporated several development teams like Team, Ico.
      </Paragraph>
      <Paragraph>
        Japan Studio&#39;s most well known IP are Ape Escape, Gravity Rush,
        Knack and Ueda&#39;s trilogy. They would continue to make and
        collaborate with other developers up until the PS5 launch with Demons
        Souls (Bluepoint) and Astro&#39;s Playroom (Team Asobi). However, in
        April 2021, it was announced that Japan Studio would be reorganized with
        Team Asobi as the main arm. SIE Japan Studio served as a collaborator or
        overseer of game projects commissioned to external developers, and has
        developed to all gaming platforms released by parent company Sony. It is
        responsible for several collaborations with third-party developers like
        Clap Handz, Acquire, FromSoftware, Level-5, Arc Entertainment,
        Media.Vision, NanaOn-Sha and Bluepoint Games, which produced titles such
        as the Everybody&#39;s Golf franchise, Demon&#39;s Souls, Dark Cloud and
        Dark Chronicle, the Arc the Lad series, Bloodborne, the Alundara series,
        PaRappa the Rapper and Soul Sacrifice.
      </Paragraph>
      <Paragraph marginBottom={8}>
        The reason for this closure was simple. Sony leadership didn&#39;t think
        there was a market for the AA games they were known for anymore.
        Instead, PS Studios would continue with AAA cinematic games whilst
        delving head-first into the live-service arena, while allowing
        independent studios to work in the indy space that every now and then
        would reach the budget of a AA game.
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

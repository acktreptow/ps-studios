import { Metadata } from "next";
import Image from "next/image";
import bendLeak from "../../../../public/images/dev-pages/bend-leak.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Visual Arts",
  description:
    "The history and future of Visual Arts, a first-party developer for PlayStation Studios.",
};

function VisualArtsPage(): JSX.Element {
  return (
    <Container>
      <Title title="Visual Arts" />
      <DeveloperButton
        developer="Visual Arts"
        urlPath="https://playstation-studios.fandom.com/wiki/Visual_Arts_Service_Group"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2007, this San Diego-based developer is part of
        PlayStation&#39;s Visual Arts Group. Supporting games from other
        first-party devs with animation, art etc. As a support studio, their
        contributions are small, but it means they work on 15-25 games at a
        time, in addition to Sony&#39;s non-gaming IP like Netflix&#39;s Love,
        Death & Robots. It&#39;s not the traditional role of a developer, but in
        2018 there was a failed pivot to become one.
      </Paragraph>
      <Paragraph>
        VASG&#39;s Senior Director Michael Mumbauer aspired to become a proper
        PS Studio with creative control over a game&#39;s direction, instead of
        just support work. 30 developers assembled from neighboring studios, but
        this size would only let them remake a classic. 2007&#39;s Uncharted was
        initially targeted, but as an early PS3 game, even that was deemed too
        big to modernize to PS5 standards. They then settled on 2013&#39;s The
        Last of Us, which was a far more modern PS3 game. After TLOU, VASG could
        then scale up to remake Uncharted, then their own games after.
      </Paragraph>
      <Paragraph>
        TLOU&#39;s remake (Project T1X) was only probationally approved, which
        meant T1X would remain a secret with no budget to hire more people.
        Mumbauer questioned if Sony were committed to his vision for VASG, but
        kept working. They completed a vertical slice showcasing T1X&#39;s look
        and feel in spring 2019, months before Hermen Hulst took over all of
        first-party. Due to his new role, Hulst thoroughly reviewed the entire
        PS Studios portfolio and grew concerned with T1X&#39;s budget
        considering it was a remake. Mumbauer argued that this was VASG&#39;s
        first project, on a brand new engine, and they actually needed to hire
        more people to modernize gameplay. Hulst was unconvinced.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Instead, T1X&#39;s team was brought on as extra VASG support to Naughty
        Dog&#39;s TLOU 2, following its internal delay from 2019 to 2020. Once
        completed, instead of hiring up, T1X shifted to ND&#39;s budget, and ND
        joined in a support role. Mumbauer wasn&#39;t pleased as he rightfully
        believed this would strip VASG&#39;s autonomy. Due to their size, ND
        gradually outpaced VASG&#39;s work. As it was their own IP, ND were also
        trusted more by Sony, which effectively gave them final say - to the
        point where VASG was jokingly referred to as Naughty Dog South. By
        November 2020, with his vision for VASG dead, Mumbauer and several team
        members left. Since then, VASG has continued in the support role Sony
        always saw them in.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Mumbauer&#39;s vision for Visual Arts died in 2020, which made it
            very unlikely for VASG to ever develop their own PS5 game. Since
            then, other factors have made the chances much worse.
          </Paragraph>
          <Paragraph>
            The economy has only gotten worse with companies like Sony executing
            multiple rounds of layoffs, and VASG wasn&#39;t immune. In March
            2025, Bend&#39;s live-service game that was in development for 4
            years was abruptly cancelled. As VASG was part of the project in a
            support role, Bend&#39;s cancellation resulted in an undisclosed
            number of VASG staff getting let go.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Perhaps circumstances change on PS6 and VASG make their own game,
            but this seems increasingly unlikely as time goes on. Until then, we
            can at least appreciate their work in most upcoming PS Studios games
            via art, animation and technical support. There&#39;s also rumors of
            VASG once again assisting Naughty Dog, alongside a new internal
            studio, on a project that&#39;s likely the next Uncharted. This may
            not be the dream Mumbauer had, but as part multiple projects,
            including big IP, VASG continue to be an essential part of PS
            Studios that&#39;s worth keeping an eye on.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={bendLeak}
            alt="Leaked screenshot of Bend's cancelled live service game"
            id="bend-leak"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="bend-leak" className="block text-center mb-8">
            Leak Of Bend&#39;s Cancelled Game
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default VisualArtsPage;

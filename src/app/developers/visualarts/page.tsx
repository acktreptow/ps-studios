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
        Founded in 2007, this San Diego-based developer supports games from
        other first-party with art, animation etc. As support, their
        contributions are small, but it means VASG work on 15-25 games at a
        time, in addition to Sony&#39;s non-gaming IP like Netflix&#39;s Love,
        Death & Robots. Though not the traditional role of a developer, there
        was a failed pivot to become one in 2018.
      </Paragraph>
      <Paragraph>
        VASG Senior Director Michael Mumbauer aspired to become a proper PS
        Studio, with creative control over a game instead of just support work.
        30 developers assembled from near studios, but the size only let them
        remake a classic. 2007&#39;s Uncharted was first targeted, but as an
        early PS3 game, even that was too big to modernize to PS5 standards.
        They then settled on 2013&#39;s The Last of Us, which was a far more
        modern PS3 game. After TLOU, VASG could scale up for Uncharted, then
        their own games.
      </Paragraph>
      <Paragraph>
        TLOU&#39;s remake (Project T1X) was only probationally approved, which
        meant T1X would stay a secret with no budget to hire up. Mumbauer
        questioned Sony&#39;s commitment to his vision for VASG, but kept
        working. They completed a vertical slice showcasing T1X&#39;s look and
        feel in spring 2019, months before Hermen Hulst took over all of
        first-party. Due to his new role, Hulst thoroughly reviewed the entire
        PS Studios portfolio and grew concerned with the remake&#39;s budget.
        Mumbauer argued this was VASG&#39;s first project on a new engine and
        they actually had to hire more people to modernize gameplay. Hulst was
        unconvinced.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Instead, T1X&#39;s team was brought to support Naughty Dog&#39;s TLOU 2,
        following its internal delay from 2019 to 2020. Once completed, instead
        of hiring up, T1X shifted to ND&#39;s budget, and ND joined in a support
        role. Mumbauer wasn&#39;t pleased as he knew this would strip VASG&#39;s
        autonomy. Due to their size, ND gradually outpaced VASG&#39;s work. As
        it was ND&#39;s own IP, they were also trusted more by Sony, which
        effectively gave them final say. At this point VASG was jokingly
        referred to as Naughty Dog South. So in November 2020, with his vision
        dead, Mumbauer and several team members left VASG. They now continue in
        the support role Sony always saw them in.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Mumbauer&#39;s vision for VASG died in 2020, which made it very
            unlikely that they&#39;d ever develop their own PS5 game. Since
            then, other factors have made the chances much worse.
          </Paragraph>
          <Paragraph>
            The worsening economy has companies like Sony executing multiple
            rounds of layoffs, and VASG wasn&#39;t immune. In March 2025,
            Bend&#39;s live-service game was cancelled despite 4 years of
            development. As VASG was part of the project as support, the
            cancellation resulted in an undisclosed number of VASG devs being
            let go.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Perhaps circumstances change on PS6, but this seems increasingly
            unlikely as time goes on. Until then, we can at least appreciate
            their work in most upcoming PS Studios games via art, animation and
            technical support. There&#39;s also rumors of VASG once again
            assisting Naughty Dog, alongside a new internal studio, on a project
            that&#39;s likely the next Uncharted. It may not be what Mumbauer
            envisioned, but as part of many big IP projects, VASG continue to be
            an essential part of PS Studios for the foreseeable future.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={bendLeak}
            alt="Leaked screenshot of Bend's cancelled live-service game"
            id="bend-leak"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="bend-leak" className="block text-center">
            Leak Of Bend&#39;s Cancelled Game
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default VisualArtsPage;

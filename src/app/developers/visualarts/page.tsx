import { Metadata } from "next";
import gamesData from "../../data/games.json";
import { Game } from "../../types/Game";
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

const gamesArray: Game[] = gamesData;

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
        Founded in 2007, this San Diego-based developer started as part of
        PlayStation&#39;s visual arts group. As the Visual Arts team, they help
        with games designed at other Sony-owned studios with animation, art or
        other content and development. Due to these small contributions, studio
        head Ingram said his team “works on 15 to 25 games at any one time”. And
        this is in addition to other assistance like CG animation tech for
        Netflix&#39;s Love, Death & Robots series.
      </Paragraph>
      <Paragraph>
        This is obviously not the role of a traditional PS Studios developer,
        but back in 2018, there was a failed pivot to become one. Michael
        Mumbouer, who was high up in Visual Arts, along with a few other
        influential Sony staff, had aspirations of acting like a proper studio
        within PlayStation first-party. A studio that had more creative control
        and lead game direction rather than just supporting popular titles such
        as Spider-Man and Uncharted. In order to attempt this, VASG managed to
        assemble around 30 developers from neighboring studios. However, this
        wasn&#39;t enough staff to create their own game, so they decided to
        remake a classic as a starting off point to prove they could do so. They
        initially decided on remaking 2007&#39;s Uncharted 1, however even that
        project was deemed too big as it would take a lot of resources to
        modernize a PS3-launch window title up to PS5-generation standards. So
        instead, they went with The Last of Us. Still a PS3 title, but one that
        came out 6 years later and was far more modern. Then, once
        Mumbauer&#39;s group had established itself, it could go on to remake
        the first Uncharted game and other titles down the road.
      </Paragraph>
      <Paragraph>
        Mumbauer&#39;s project T1X was approved, but only on a probationary
        basis, Sony also kept their existence a secret and refused to give them
        a budget to hire more people. This made Mumbauer and others question if
        Sony were really committed to letting VASG build into a new studio that
        could produce their own videogame. Still, they kept working and by the
        spring of 2019 they had completed a section of the game designed to
        showcase how the rest would look and feel. But things changed at Sony as
        Herman Hulst took over as head of first-party studios, resulting in an
        audit of all first-party studios so he knew exactly what was going on.
        He examined the project and was alerted to such a high planned budget
        for a remake project. Furthermore, he wasn&#39;t convinced by Mumbaeur
        trying to argue for the budget by stating it was on a brand new engine
        and that VASG needed to hire more people to work on the new engine and
        redesign gameplay mechanics.
      </Paragraph>
      <Paragraph>
        Instead, VASG was brought on to Naughty Dog&#39;s upcoming The Last of
        Us Part 2 following its internal delay from 2019 to 2020. After this,
        instead of hiring up, Naughty Dog would be brought into T1X in a support
        role, partially due to their other planned titles being at various
        stages in pre-production and VASG&#39;s lack of familiarity with the
        PS5&#39;s hardware. T1X would now also be under Naughty Dog&#39;s
        budget. Mumbauer rightfully didn&#39;t like this arrangement as he
        believed this was stripping his team from their autonomy. Especially as
        T1X would now also be under Naughty Dog&#39;s budget, which Sony gave
        more leeway than the Visual Arts Service Group. Sure enough, due to
        their size and experience with the IP, Naughty Dog&#39;s involvement
        gradually outplaced VASG&#39;s work. Between being forced onto TLOU2 and
        having ND forced onto T1X, many people in Sony were already jokingly
        referring to VASG as Naught Dog South. By November 2020, now realizing
        his dream of turning VASG into its own studio, Mumbauer, along with
        several members of his team, left due to the new development dynamics.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Since then, VA have continued in the support role Sony always saw them
        in. Working on numerous projects within PS Studios by creating art
        assets etc. For example, both TLOU remasters, Spider-Man 2 and even
        third-party support for PS5 versions of The Callisto Protocol.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Visual Arts will continue to have a small role in pretty much every
            PS Studios game that comes out during the PS5 generation. But
            considering what happened to Mumbauer, it&#39;s now also very
            unlikely that they will get to make their own PS5 game before the
            generation finishes.
          </Paragraph>
          <Paragraph>
            Furthermore, since Mumbauer and other higher ups left VASG after the
            failed attempt, the economy has only gotten worse with companies all
            over the world doing multiple rounds of layoffs to combat this, and
            Sony is no different. In March 2025, numerous VASG staff supporting
            Bend&#39;s now cancelled live-service were let go. As for the rest
            of the staff, there&#39;s already rumors that they&#39;re once again
            assisting Naughty Dog, alongside a new internal Sony studio, on a
            title based on a &#39;beloved franchise&#39;, which may well be a
            new Uncharted. Although these rumors are from 2022, and we&#39;ve
            seen from numerous other developers such as Bend. Bluepoint,
            Firewalk, Bungie and even Naughty Dog how much can change in 3
            years.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Perhaps circumstances change during the PS6 generation and Visual
            Arts are able to finally do what they set out to back in 2018 and
            create their own remake, which they’ll use as a springboard to
            eventually make their own PS6 game. Until then, if this unlikely
            scenario ever comes about, we can at least appreciate their work in
            pretty much every future PS Studios game through them providing art,
            animation and technical support.
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
            Leaked Screenshot Of Bend&#39;s Cancelled Live Service Game
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default VisualArtsPage;

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
        PlayStation&#39;s visual arts group. The Visual Arts team in San Diego
        also touches every first-party game that comes out of PlayStation, as
        well as other Sony projects such as aiding CG animation tech for
        Netflix&#39;s Love, Death & Robots series. Ingram said his team “works
        on 15 to 25 games at any one time”. The San Diego-based operation helps
        finish off games designed at other Sony-owned studios with animation,
        art or other content and development. But about three years ago, a
        handful of influential figures within the Visual Arts Service Group
        decided they wanted to have more creative control and lead game
        direction rather than being supporting actors on popular titles such as
        Spider-Man and Uncharted. Then, once Mumbauer&#39;s group had
        established itself, it could go on to remake the first Uncharted game
        and other titles down the road.
      </Paragraph>
      <Paragraph>
        It wasn&#39;t until 2018, with former PlayStation staff Michael
        Mumbouer, that Visual Arts had aspirations of acting like a proper
        studio within PlayStation first-party. to establish a development team
        within VASG and managed to assemble around 30 developers from
        neighboring studios. Visual Arts didn&#39;t have the manpower to create
        their own game, so wanted to remake a classic in order to get their feet
        wet. They initially decided on remaking 2007&#39;s Uncharted 1, however
        even that project was deemed too big as it would take a lot to get a
        PS3-launch window title up to PS5-generation standards. So instead, they
        went with The Last of Us. Development began in 2019 at a team within
        Sony&#39;s Visual Arts Services Group to prove its ability to produce
        video games, but moved to Naughty Dog after newly-elected PlayStation
        Studios Hermen Hulst examined the project and its budget. Naughty
        Dog&#39;s involvement gradually outplaced VASG&#39;s work as the remake
        moved to be produced on Naughty Dog&#39;s budget. By November 2020,
        several members of VASG including Mumbauer left the team due to the new
        development dynamics. That&#39;s just what Sony did. Mumbauer&#39;s
        project, code-named T1X, was approved on a probationary basis, but Sony
        kept the team&#39;s existence a secret, and refused to give them a
        budget to hire more people, leading many to wonder if the company was
        really committed to letting the team build a new studio. Still, the
        small team kept working and by the spring of 2019 they had completed a
        section of the game designed to showcase how the rest would look and
        feel. He thought the remake project was too expensive, according to
        people familiar with the matter, and asked why the planned budget for
        T1X was so much higher than remakes Sony had made in the past. The
        reason was that this one was on a brand new graphical engine for the
        PlayStation 5. Mumbauer needed to hire more people to help rework the
        graphics on new technology as well as redesign gameplay mechanics. Hulst
        wasn&#39;t convinced, the people said.
      </Paragraph>
      <Paragraph>
        The remake project, dubbed &#39;T1X&#39;, was approved by Sony
        Interactive Entertainment on a probationary basis, but Mumbauer&#39;s
        team received little support in recruiting and budgeting while the
        existence of the studio was never officially acknowledged. Issues with
        Naughty Dog&#39;s next project, The Last of Us Part II, necessitated the
        involvement of VASG and Mumbauer&#39;s employees to help finish the
        project after its internal delay from 2019 to 2020. By November 2019,
        then-new PlayStation Studios head Hermen Hulst inspected project T1X and
        assigned Naughty Dog to support Mumbauer&#39;s team, which Mumbauer saw
        as stripping his team from their autonomy. The game was moved under
        Naughty Dog&#39;s budget, which Sony gave more leeway than the Visual
        Arts Service Group.
      </Paragraph>
      <Paragraph>
        Work began on TLOU, but development was slow as Visual Arts needed to
        staff up during it. Sony grew dissatisfied with the studio&#39;s
        progress on the game. Sony reconfigured them into a support studio and
        tasked Naughty Dog with developing the project, partially due to their
        other planned titles being at various stages in pre-production and a
        lack of familiarity with the PS5&#39;s hardware. Naughty Dog were then
        brought onboard in 2020 to support the remake, which VA leadership
        didn&#39;t like as to them, it felt like autonomy was taken away. A lot
        of them decided to leave, which did eventual bring that into reality
        with Naughty Dog taking over the project with VA acting as support with
        various assets etc. Mumbauer also left. They were jokingly referred to
        as Naughty Dog South.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Since then, VA have continued this support role. Working on numerous
        projects within PS Studios by creating art assets etc. For example, both
        TLOU remasters, Spider-Man 2 and even third-party support for PS5
        versions of The Callisto Protocol.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            While Visual Arts will have a small role in pretty much every PS
            Studios game that comes out during the PS5 generation, it&#39;s now
            very unlikely that they will get to make their own game before the
            generation finishes.
          </Paragraph>
          <Paragraph>
            Higher ups like Mumbauer are now gone, and due to the worse economy
            since originally working on TLOU1 as the main developer, they have
            been affected by the many rounds of Sony layoffs. Including in March
            2025 where it was reported that some VA staff who were working on
            Bend&#39;s cancelled live-service game had been let go due to the
            cancellation.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Perhaps circumstances change during the PS6 generation and Visual
            Arts are able to finally do what they set out to back in 2018. Until
            then, if this scenario ever comes about, we can at least appreciate
            their work in pretty much every future PS Studios game through their
            producing art, animation and technical support. It was also
            announced last year that Visual Arts, alongside a new internal Sony
            studio, would be assisting Naughty Dog on a title based on a
            &#39;beloved franchise,&#39; though still no word on what that game
            is.
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

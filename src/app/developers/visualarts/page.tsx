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
        other PS Studios with art, animation etc. As support, their
        contributions are small, but it means VASG works on 15-25 games at a
        time, in addition to Sony&#39;s non-gaming IP like Netflix&#39;s Love,
        Death & Robots. Though not the traditional role of a developer, there
        was a failed pivot to become one in 2018.
      </Paragraph>
      <Paragraph>
        VASG Senior Director Michael Mumbauer aspired to become a proper PS
        Studio with full creative control over a game, so 30 devs joined from
        nearby studios to remake 2007&#39;s Uncharted. However, as an early PS3
        game, it was too hard to modernize on PS5 at that size. VASG then
        settled on 2013&#39;s The Last of Us - a more modern PS3 game.
        Afterwards, VASG could hire up for Uncharted, then their own titles.
      </Paragraph>
      <Paragraph>
        TLOU remake (Project T1X) was probationally approved, meaning it stayed
        a secret with no budget to hire up. VASG questioned Sony&#39;s
        commitment, but completed a vertical slice to showcase T1X&#39;s look
        and feel in spring 2019 - just before Hermen Hulst took over PS Studios.
        Due to his new role, Hulst thoroughly reviewed the entire PS Studios
        portfolio and grew concerned with T1X&#39;s budget. Mumbauer argued this
        was VASG&#39;s first project, on a new engine, and had to hire up to
        modernize gameplay. Hulst was unconvinced.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Instead, VASG supported Naughty Dog&#39;s TLOU 2 after its delay to
        2020. Once shipped, instead of hiring up, T1X shifted to ND&#39;s budget
        who joined in a support role. Mumbauer knew this would strip autonomy as
        ND outpaced VASG&#39;s work due to their size. As TLOU was their IP, ND
        were also trusted more by Sony, effectively giving them final say. VASG
        was now jokingly referred to as ND South, so in late 2020, with his
        vision dead, Mumbauer and many others quit. VASG now continues in the
        support role Sony always saw them in.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Mumbauer&#39;s vision for VASG died in 2020, which made it very
            unlikely that they&#39;d ever develop their own PS5 game. Since
            then, other factors have made the chances even lower.
          </Paragraph>
          <Paragraph>
            A worse economy resulted in multiple rounds of layoffs at Sony and
            VASG wasn&#39;t immune. In March 2025, Bend&#39;s live-service game
            was cancelled after 4 years of development. As VASG supported the
            cancelled project, an undisclosed number of VASG staff were let go.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Circumstances could change on PS6, but it&#39;s unlikely. Until
            then, we can still appreciate VASG&#39;s work in most upcoming PS
            Studios games via art, animation etc. They&#39;re also rumored to be
            assisting ND and a new internal studio on the next Uncharted.
            It&#39;s not what Mumbauer envisioned, but as part of many projects,
            VASG is still essential to PS Studios.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={bendLeak}
            alt="Leaked screenshot of Bend&#39;s cancelled live-service game"
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

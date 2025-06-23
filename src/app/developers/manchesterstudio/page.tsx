import { Metadata } from "next";
import Image from "next/image";
import csar from "../../../../public/images/dev-pages/combat-search-and-rescue.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Manchester Studio",
  description:
    "The history of Manchester Studio, a former first-party developer for PlayStation Studios.",
};

function ManchesterStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Manchester Studio" />
      <DeveloperButton
        developer="Manchester"
        urlPath="https://playstation-studios.fandom.com/wiki/Manchester_Studio"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        In 2015, Sony internally created Manchester Studio (formerly North West
        Studio) to develop AAA VR games for their PSVR headset. The only game
        they worked on was the unannounced &#39;CSAR: Combat, Search, and
        Rescue&#39;, where the player would fly a helicopter around shooting
        enemies, whilst simultaneously rescuing rescuing civilians from them.
      </Paragraph>
      <Paragraph>
        Unfortunately, the game&#39;s development struggled with concerns around
        vital decisions like art style and basic gameplay. Its co-lead designers
        also worked in London - only visiting the studio around once a week.
        When they were there, they&#39;d then micromanage the many prototypes.
        Hires were made in London to streamline development, but that created a
        further breakdown in communications.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Even with its issues, Sony left Manchester Studio alone due to the small
        30-person headcount who worked in a rented space. However, when Herman
        Hulst took over PS Studios in 2019, MS underwent proper scrutiny despite
        the cheap running costs. As he was new to the role, Hulst thoroughly
        reviewed the entire PS Studios portfolio and didn&#39;t like CSAR&#39;s
        lack of progress after 5 years of development. Combined with the end of
        PSVR&#39;s lifecycle due to the upcoming PS5 and PSVR2, Hulst ultimately
        cancelled CSAR when he closed MS in February 2020.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Sony&#39;s shut down 5 studios since the PS5 launched, with
            Manchester Studio closing a few months prior. But MS&#39;s closure
            coming first isn&#39;t surprising, as most in Hulst&#39;s position
            would&#39;ve done the same. By 2020, PSVR was years past its peak in
            popularity. Therefore, even if CSAR shipped, there was little money
            to be made from its almost guaranteed low sales.
          </Paragraph>
          <Paragraph>
            CSAR could&#39;ve transitioned to PSVR2, but this would mean a
            February 2023 release date at the earliest. An 8-year cycle for a VR
            game by an unproven studio with a track record of development issues
            makes no fiscal sense. Furthermore with 2025 hindsight, even a PSVR2
            version wouldn&#39;t have improved sales. Other, bigger PSVR2
            first-party titles like Horizon COTM performed so poorly that PS
            Studios hasn&#39;t released a VR game since the headset&#39;s
            launch.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It&#39;s always a shame when studios close, but the unfortunate
            reality is that it made sense to shut down Manchester Studios.
            According to a post-closure exposé, even ex-Manchester developers
            recognize closure was the logical decision and don&#39;t blame Sony
            for pulling the plug.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={csar}
            alt="CSAR Concept Art"
            id="csar-concept-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="csar-concept-art" className="block text-center">
            CSAR&#39;s Only Concept Art
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default ManchesterStudioPage;

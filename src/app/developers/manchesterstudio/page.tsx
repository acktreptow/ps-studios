import { Metadata } from "next";
import Image from "next/image";
import csr from "../../../../public/images/dev-pages/combat-search-rescue.png";
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
        developer="Manchester Studio"
        urlPath="https://playstation-studios.fandom.com/wiki/Manchester_Studio"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        In 2015, Sony internally formed Manchester Studio (formerly North West
        Studio) to develop AAA virtual reality games for their upcoming PSVR
        headset. The first (and only) game they worked on was the unannounced
        helicopter-centered CSAR: Combat, Search, and Rescue.
      </Paragraph>
      <Paragraph>
        In CSAR, the player would fly the helicopter around rescuing people in
        need of help, whilst simultaneously shooting at enemies. It&#39;s an
        interesting premise, especially for VR, but the game had a troubled
        development with concerns around numerous vital decisions like art style
        and moment-to-moment gameplay. What exacerbated the troubled development
        was the fact that the co-lead designers resided in London and would only
        visit the studio around once a week. Furthermore, when they were there,
        they&#39;d severely micromanage the differing prototypes. The disconnect
        between them and their staff was so bad that some hires were made in
        London to streamline development, but all it did was create further
        division and breakdown in communications.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Despite the troublesome development, Manchester Studio were mostly left
        alone by Sony due to its small headcount of around 30 people, who were
        only working in a rented space. However, this protection changed when
        Herman Hulst took over PlayStation Studios in 2019. Regardless of how
        cheap their running costs were, Manchester Studio underwent harsher
        scrutiny as due to being new in the role, Hulst needed to do a thorough
        review of the entire PS Studios portfolio. Hulst didn&#39;t like that
        there was nothing tangible of the VR game despite its 5 years of
        development. Especially as PSVR&#39;s lifecycle was close to its end due
        to the upcoming PS5 and PSVR2. This ultimately led to the cancellation
        of CSAR and the closure of Manchester studio in February 2020.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Sony has shut down 5 PS Studios since the PS5 launched, with
            Manchester Studio actually closing a few months prior. However,
            their closure shouldn&#39;t be particularly surprising as most
            people in Hulst&#39;s position would have come to the same decision.
          </Paragraph>
          <Paragraph>
            By 2020, 2016&#39;s PSVR had already reached its saturation point
            and was years past its peak in popularity. Therefore, even if CSAR
            shipped, there was no money to be made due to its almost guaranteed
            lack of sales.
          </Paragraph>
          <Paragraph>
            CSAR could have transitioned to PSVR2, but this would mean a
            February 2023 release date at the earliest. An 8-year cycle for a VR
            game by an unproven studio with a track record of development issues
            makes no sense from a fiscal perspective. Additionally with 2025
            hindsight, even a PSVR2 version wouldn&#39;t have improved sales.
            Other, bigger PSVR2 first-party titles like Horizon Call of the
            Mountain performed so poorly that PS Studios hasn&#39;t released a
            VR game since the hardware&#39;s launch.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It&#39;s always a shame to see people lose their jobs, but the
            unfortunate reality is that it made total sense to shut down
            Manchester Studios. According to a post-closure exposé, even
            ex-Manchester developers recognize closure was the logical decision
            and don&#39;t blame Sony for pulling the plug.
          </Paragraph>
        </div>
        <div>
          <Image
            src={csr}
            alt="Concrete Genie"
            id="concrete-genie"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concrete-genie" className="block text-center">
            The Only CSAR: Combat, Search, and Rescue Concept Art
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default ManchesterStudioPage;

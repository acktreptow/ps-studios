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
        Manchester Studio (formerly North West Studio) was founded internally in
        2015 to primarily develop virtual reality titles for the upcoming PSVR.
        The first (and only) game they worked on was the helicopter-based CSAR:
        Combat, Search, and Rescue.
      </Paragraph>
      <Paragraph>
        In this unannounced title, the player would fly around and rescue people
        from the helicopter whilst shooting at enemies. Whilst interesting, the
        game had a troubled development with concerns around big areas like art
        style and gameplay. What exacerbated this issue was the fact that the
        co-lead designers Resided in Lond and would only visit the studio around
        once a week, but when there would severely micromanage the project.
      </Paragraph>
      <Paragraph marginBottom={8}>
        It&#39;s therefore not surprising that when Herman Hulst took over
        PlayStation Studios, Manchester Studio was under harsher scrutiny to see
        why a VR game was taking this long. All this led to the cancellation of
        CSAR and the closure of Manchester studio in 2020.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
          </Paragraph>
          <Paragraph marginBottom={8}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            expedita facere libero voluptates veniam recusandae dolor, harum ad?
            Quidem eaque unde distinctio nam eos necessitatibus laborum
            inventore ducimus. Amet, ex!
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

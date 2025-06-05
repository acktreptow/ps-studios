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
  title: "London Studio",
  description:
    "The history of London Studio, a former first-party developer for PlayStation Studios.",
};

function LondonStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="London Studio" />
      <DeveloperButton
        developer="Manchester Studio"
        urlPath="https://playstation-studios.fandom.com/wiki/Manchester_Studio"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        expedita facere libero voluptates veniam recusandae dolor, harum ad?
        Quidem eaque unde distinctio nam eos necessitatibus laborum inventore
        ducimus. Amet, ex!
      </Paragraph>
      <Paragraph marginBottom={8}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        expedita facere libero voluptates veniam recusandae dolor, harum ad?
        Quidem eaque unde distinctio nam eos necessitatibus laborum inventore
        ducimus. Amet, ex!
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

export default LondonStudioPage;

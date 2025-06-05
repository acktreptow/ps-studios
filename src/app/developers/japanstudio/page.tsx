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
      <Paragraph>Japan Studio was founded in 2025.</Paragraph>
      <Paragraph marginBottom={8}>
        Japan Studio was shut down in 2021.
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

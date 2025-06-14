import { Metadata } from "next";
import Image from "next/image";
import tlouComparison from "../../../../public/images/dev-pages/tlou1.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Malaysia Studio",
  description:
    "The history of Malaysia Studio, a former first-party developer for PlayStation Studios.",
};

function MalaysiaStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Malaysia Studio" />
      <DeveloperButton
        developer="Malaysia Studio"
        urlPath="https://www.linkedin.com/company/pssmy/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2020, PlayStation Studios Malaysia was created from the
        ground up by Sony for a unique reason, to work on everything. The Last
        of Us Part 1/2 and MLB The Show are just 2 examples.
      </Paragraph>
      <Paragraph>
        This new Malaysian studio was founded in Kuala Lumpur as a support
        studio, working closely with PlayStation&#39;s Visual Arts team based in
        San Diego. PS Studios Malaysia was founded in 2020 to work alongside
        Visual Arts, which itself provides art and technical support to
        first-party PS studios. Malaysia is a small studio with under 100
        employees (who now work in-office as opposed to remote during the
        pandemic) creating character models and other visual assets as well as
        motion capture and more.
      </Paragraph>
      <Paragraph marginBottom={8}>
        While Malaysia do work on pretty much everything, their contributions to
        game are small. For example with The Last of Us, they worked on hints
        the player would receive when they died in order to get past whatever
        obstacle they were at. There&#39;s also various MLB art assets that need
        some attention to be updated year-to-year, but don&#39;t require to be
        created from scratch.
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
            src={tlouComparison}
            alt="Comparing TLOU 1 on PS3/PS4/PS5"
            id="tlou1"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="tlou1" className="block text-center">
            TLOU Comparison Between PS3, PS4 & PS5
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default MalaysiaStudioPage;

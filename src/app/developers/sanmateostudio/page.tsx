import { Metadata } from "next";
import Image from "next/image";
import concreteGenie from "../../../../public/images/dev-pages/concrete-genie.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "San Mateo Studio",
  description:
    "The history and future of San Mateo Studio, a first-party developer for PlayStation Studios.",
};

function SanMateoStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="San Mateo Studio" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1998, San Mateo Studio (formerly Foster City Studio) works
        out of San Mateo, California (shock I know).
      </Paragraph>
      <Paragraph>
        Unlike the majority of PlayStation first-party developers, San Mateo are
        only a support studio. They therefore haven&#39;t shipped a PS5 game,
        nor should you expect them to.
      </Paragraph>
      <Paragraph marginBottom={8}>
        They did spin off a small team in 2014 called Pixelopus who released two
        games before the PS5 launched, but a lack of sales resulted in Sony
        closing the studio down in June 2023.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Due to their support status, San Mateo haven&#39;t released a PS5
            game where they were the main developer. This situation is also very
            unlikely to change if the shuttering of Pixelopus is any indication.
          </Paragraph>
          <Paragraph marginBottom={8}>
            If you&#39;re looking for your next first-party PS5 game, you should
            probably look elsewhere.
          </Paragraph>
        </div>
        <div>
          <Image
            src={concreteGenie}
            alt="Concrete Genie"
            width={500}
            height={500}
            id="concrete-genie"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concrete-genie" className="block text-center">
            Pixelopus&#39;s Final Game: Concrete Genie
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default SanMateoStudioPage;

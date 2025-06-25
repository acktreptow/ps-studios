import { Metadata } from "next";
import Image from "next/image";
import thePersistence from "../../../../public/images/dev-pages/the-persistence.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Fabrik Games",
  description:
    "The history and future of Fabrik Games, a first-party developer for PlayStation Studios.",
};

function FabrikGamesPage(): JSX.Element {
  return (
    <Container>
      <Title title="Fabrik Games" />
      <DeveloperButton developer="Fabrik" urlPath="https://x.com/fabrikgames" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2014, this Manchester-based developer has made games like
        2016&#39;s Filthy Lucre on PS4 and 2017&#39;s The Lost Bear on PSVR.
      </Paragraph>
      <Paragraph>
        You likely haven&#39;t heard of these niche games and that&#39;s no
        problem. You won&#39;t need to because Fabrik was acquired by Firesprite
        in 2021 to bolster their headcount. As Firesprite were purchased by Sony
        only a few weeks prior, Fabrik became a de-facto PS studio.
      </Paragraph>
      <Paragraph marginBottom={8}>
        The indirect way Fabrik joined PS Studios is very unique, but not
        particularly surprising. Both Firesprite and Fabrik were founded by the
        same individual. Fabrik had also already supported Firesprite during
        their development of VR game The Persistence in 2018.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            As Fabrik are only a support studio to Firesprite, they&#39;ve not
            released a PS5 game. Nor should you expect them to barring
            unforeseen circumstances.
          </Paragraph>
          <Paragraph marginBottom={8}>
            We&#39;ll indirectly hear from them whenever Firesprite announce
            their next game, which based on rumors, is a sequel to 2015&#39;s
            Until Dawn. The horror/interactive drama was remade in 2024 and
            included a new ending teasing Until Dawn 2.
          </Paragraph>
        </div>
        <div>
          <Image
            src={thePersistence}
            alt="The Persistence cover art"
            id="the-persistence"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="the-persistence" className="block text-center">
            The Persistence Cover Art
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default FabrikGamesPage;

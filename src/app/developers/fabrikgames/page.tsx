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
      <DeveloperButton developer="Fabrik" urlPath="https://firesprite.com/" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2014, this Manchester-based developer has shipped games like
        2016&#39;s &#39;Filthy Lucre&#39; for the PS4 and 2017&#39;s &#39;The
        Lost Bear&#39; for PSVR.
      </Paragraph>
      <Paragraph>
        You almost certainly haven&#39;t heard of these niche games and
        that&#39;s no problem. You won&#39;t need to because Fabrik was acquired
        by Firesprite in 2021 to bolster the latter&#39;s manpower. As
        Firesprite were purchased by Sony only a few weeks prior, Fabrik became
        a de-facto first-party studio.
      </Paragraph>
      <Paragraph marginBottom={8}>
        This indirect way Fabrik joined PS Studios is very unique, but not
        particularly surprising. Both Firesprite and Fabrik were founded by the
        same individual. Fabrik had also already acted as support for Firesprite
        during the development of their VR title &#39;The Persistence&#39;, in
        2018.
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
            We&#39;ll indirectly here from them whenever Firesprite announce
            their next game, which should (hopefully) be soon.
          </Paragraph>
        </div>
        <div>
          <Image
            src={thePersistence}
            alt="The Persistence"
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

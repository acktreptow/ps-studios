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
        Founded in 2014, Fabrik Games were a Manchester-based studio that
        developed 2016&#39;s Filthy Lucre on PS4 and 2017&#39;s The Lost Bear on
        PSVR. Both titles failed to perform critically or commercially, and
        Fabrik wouldn&#39;t return to these IPs before they were acquired by
        Firesprite in 2021 to bolster their headcount. As Firesprite were
        purchased by Sony a few weeks prior, Fabrik became a de-facto PS Studio.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Fabrik&#39;s indirect path into PS Studios was unique, but not
        particularly surprising, as Fabrik and Firesprite were founded by Graeme
        Ankers. Fabrik had also already supported Firesprite during the
        development of their 2018 PSVR game The Persistence, so the transition
        to a support studio was relatively smooth. However, while it was
        initially thought that the Fabrik name would continue, this wasn&#39;t
        the case.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Fabrik are in a unique situation within PS Studios. While
            they&#39;re still legally active and maintain assets, in practice
            Fabrik are closed. That&#39;s because according to Fabrik&#39;s
            public filings, by March 2024, they had ceased production of games,
            have no employees, and are non-trading.
          </Paragraph>
          <Paragraph marginBottom={8}>
            For all intents and purposes, then, Fabrik are an inactive shell
            within Sony and their employees have either moved on (e.g. former
            Studio Head Errol Ismail) or are now directly part of Firesprite.
            Fabrik will therefore never release a PS5 game, but much of their
            talent are working on Firesprite&#39;s next title, 2027&#39;s Until
            Dawn 2, which was announced to mostly positive reception.
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

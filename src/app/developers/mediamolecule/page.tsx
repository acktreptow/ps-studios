import { Metadata } from "next";
import Image from "next/image";
import sackboy from "../../../../public/images/dev-pages/sackboy.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Media Molecule",
  description:
    "The history and future of Media Molecule, a first-party developer for PlayStation Studios.",
};

function MediaMoleculePage(): JSX.Element {
  return (
    <Container>
      <Title title="Media Molecule" />
      <DeveloperButton
        developer="Media Molecule"
        urlPath="https://www.mediamolecule.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2006, this Surrey-based developer is primarily known for the
        critically acclaimed LittleBigPlanet series that started on the PS3 in
        2008.
      </Paragraph>
      <Paragraph>
        Media Molecule&#39;s last title was 2020&#39;s Dreams for the PS4, and
        therefore has yet to release a PS5 title.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Despite Dreams releasing over 5 years go, MM still hasn&#39;t even
        announced the name of their next game, let alone shown gameplay.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Whatever Media Molecule&#39;s next game is, to call it important for
            the studio would be a severe understatement. For one, they&#39;re
            far removed from their greatest successes seen on PS3.
          </Paragraph>
          <Paragraph>
            Additionally, Dreams wasn&#39;t close to a commercial success, the
            vast majority of Media Molecule&#39;s founders have left, and
            it&#39;s been reported that they were extremely close to being
            shuttered in late 2023, instead of London Studio.
          </Paragraph>
          <Paragraph>
            These struggles combined with rising development costs and their
            games not being commercially mainstream means it&#39;s far more
            likely MM closes before shipping another game.
          </Paragraph>
          <Paragraph marginBottom={8}>
            However, Sony currently desperately needs the types of games Media
            Molecule makes to have a diverse portfolio. That combined with their
            many BAFTA awards might keep them afloat as they bring other types
            of benefits to PlayStation Studios.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={sackboy}
            alt="Sackboy from LittleBigPlanet"
            id="sackboy"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="sackboy" className="block text-center">
            LittleBigPlanet&#39;s Mascot - Sackboy
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default MediaMoleculePage;

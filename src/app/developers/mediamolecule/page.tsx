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
            Whatever Media Molecule&#39;s next game is, to just call it
            important is a severe understatement because they&#39;re far removed
            from their greatest successes seen on PS3.
          </Paragraph>
          <Paragraph>
            Dreams wasn&#39;t close to a commercial success, the vast majority
            of MM&#39;s founders have left, and it&#39;s been reported that they
            were extremely close to being shuttered in late 2023, instead of
            London Studio.
          </Paragraph>
          <Paragraph>
            However, Sony does need the types of games Media Molecule makes,
            even if it&#39;s not in their DNA to be commercially mainstream. For
            one, their many BAFTA awards provide a benefit that can&#39;t be
            quantified with money in/out. It also helps to diversify the
            PlayStation Studios portfolio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Yet with rising development costs and other external economic
            factors at play, these more prestigious reasons may not be strong
            enough in 2025. It&#39;s therefore far more likely MM closes before
            shipping another game.
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

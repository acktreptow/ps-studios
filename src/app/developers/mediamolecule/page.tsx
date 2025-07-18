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
        critically and commercially acclaimed LittleBigPlanet series that
        started on PS3 in 2008. Although after 2011&#39;s LittleBigPlanet 2, the
        IP continued without Media Molecule&#39;s involvement.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Media Molecule&#39;s last title was 2020&#39;s Dreams on PS4 and
        therefore haven&#39;t released a PS5 game. Furthermore, despite Dreams
        releasing over 5 years go, MM still hasn&#39;t even announced the name
        of their next game, let alone shown gameplay.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Whatever Media Molecule&#39;s next game is, to call it important is
            an understatement as they&#39;re far removed from their greatest
            successes seen on PS3. Dreams wasn&#39;t close to a commercial
            success, the vast majority of founders have left, and it was
            reported that MM nearly shuttered instead of London Studio in late
            2023.
          </Paragraph>
          <Paragraph>
            However, Sony needs the types of games MM make, even if it&#39;s not
            in their DNA to be commercially mainstream. For one, their many
            BAFTA awards provide utility that can&#39;t be quantified with money
            in/out. Experiments like Dreams also help diversify the PS Studios
            portfolio.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Yet with rising development costs and other external economic
            factors at play, these more prestigious reasons may not be enough in
            2025. It&#39;s therefore more likely Media Molecule closes before
            shipping a PS5 game.
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

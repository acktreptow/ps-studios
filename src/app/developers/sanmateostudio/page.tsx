import { Metadata } from "next";
import Image from "next/image";
import jetLiPS2 from "../../../../public/images/dev-pages/jet-li-ps2.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
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
      <DeveloperButton
        developer="San Mateo"
        urlPath="https://playstation-studios.fandom.com/wiki/San_Mateo_Studio"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 1998, San Mateo Studio (formerly Foster City Studio) work out
        of California as a support studio for other PlayStation first-party
        developers - particularly neighboring California-based studios like
        Naughty Dog and Insomniac. They therefore haven&#39;t shipped their own
        PS5 game and you shouldn&#39;t expect them to.
      </Paragraph>
      <Paragraph marginBottom={8}>
        San Mateo Studio did spin off a small team in 2014 called Pixelopus, who
        released 2 games before the PS5 launched. However, despite many award
        nominations for their second game (2019&#39;s Concrete Genie), very low
        sales, mediocre reviews, and their more AA singleplayer DNA resulted in
        Sony closing the studio down in June 2023, during the midst of their
        live-service push.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Due to San Mateo Studio&#39;s support status, they haven&#39;t
            shipped a PS5 game where they were the primary developer. In fact,
            that last game they traditionally developed was 2004&#39;s Jet Li:
            Rise to Honor on PS2. An action-adventure that only scored 68 on
            Metacritc.
          </Paragraph>
          <Paragraph marginBottom={8}>
            If you&#39;re looking for your next first-party PS5 game, you should
            look elsewhere. If anything, San Mateo Studio are more likely to
            close if Pixelopus and 2004&#39;s Jet Li are any indications.
          </Paragraph>
        </div>
        <div>
          <Image
            src={jetLiPS2}
            alt="Jet Li PS2 cover art"
            id="jet-li-ps2"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="jet-li-ps2" className="block text-center">
            Jet Li Is San Mateo&#39;s Only Game
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default SanMateoStudioPage;

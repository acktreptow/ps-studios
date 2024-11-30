import { Metadata } from "next";
import Image from "next/image";
import savageLogo from "../../../../public/images/dev-pages/savage-logo.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Neon Koi",
  description:
    "The history and future of Neon Koi, a first-party developer for PlayStation Studios.",
};

function NeonKoiPage(): JSX.Element {
  return (
    <Container>
      <Title title="Neon Koi" />
      <DeveloperButton
        developer="Neon Koi"
        urlPath="https://www.neonkoi.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Neon Koi was a German-Finnish developer that was founded in 2020 under
        the name &#39;Savage Game Studios&#39;. It was under this initial name
        when Sony acquired them in August, 2022.
      </Paragraph>
      <Paragraph marginBottom={8}>
        When it comes to Neon Koi&#39;s PS5 output, they haven&#39;t released
        anything. This is because they were a
        founding member of PlayStation Studios&#39;s Mobile Division and
        purchased to exclusively develop mobile games.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Still interested in Neon Koi&#39;s mobile offerings? Well, don&#39;t your breath. 
            On October 29th, Neon Koi was officially shut down. 
            So despite forming over four years ago, Neon Koi didn&#39;t even announce a game, 
            let alone show gameplay or
            actually release something.
          </Paragraph>
          <Paragraph>
            In fact, Neon Koi was only in the news for negative
            headlines. Like when the head of PlayStation&#39;s Mobile Division
            and an SGS founder abruptly left PlayStation under suspicious
            circumstances, or their failed rebranding in November 2023.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Between that and the revamped website, hopefully
            it means that at the least, a game announcement is coming soon. We
            can then start determining if Neon Koi are worth keeping an eye on.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={savageLogo}
            alt="Savage Game Studios Logo"
            id="savage-logo"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="savage-logo" className="block text-center">
            Neon Koi: Formerly Savage Game Studios
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default NeonKoiPage;

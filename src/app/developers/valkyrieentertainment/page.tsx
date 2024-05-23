import { Metadata } from "next";
import Image from "next/image";
import gunsUpGameplay from "../../../../public/images/dev-pages/guns-up.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Valkyrie Entertainment",
  description:
    "The history and future of Valkyrie Entertainment, a first-party developer for PlayStation Studios.",
};

function ValkyrieEntertainmentPage(): JSX.Element {
  return (
    <Container>
      <Title title="Valkyrie Entertainment" />
      <SubTitle subtitle="History" />
      <Paragraph>
        Valkyrie Entertainment are a Seattle-based developer who were founded in
        2002 and acquired by Sony in 2021.
      </Paragraph>
      <Paragraph>
        Never heard of Valkyrie or their games? Makes sense. That&#39;s because
        Valkyrie only act as a support studio for PlayStation games developed at
        other first-party studios.
      </Paragraph>
      <Paragraph>
        In fact despite being founded over 20 years ago, Valkyrie has only been
        the main developer on 2015&#39;s digital only &#39;Guns Up!&#39; for PSN
        and mobile, which came and went with no fanfare.
      </Paragraph>
      <Paragraph marginBottom={8}>
        You&#39;re far more likely to have seen their support work on titles
        from other PlayStation developers like God of War: Ragnarök from Sony
        Santa Monica.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            This one&#39;s easy to forecast. Due to their support status,
            Valkyrie haven&#39;t released a game for the PS5.
          </Paragraph>
          <Paragraph>
            Based off the critical and commercial failure of Guns Up!, it&#39;s
            also unlikely they&#39;ll get a chance to. Especially if their
            unsecure, bare-bones unsecure website is anything to go by.
          </Paragraph>
          <Paragraph marginBottom={8}>
            If you&#39;re looking for your next great first-party PS5 game to
            play, you can safely ignore Valkyrie Entertainment.
          </Paragraph>
        </div>
        <div>
          <Image
            src={gunsUpGameplay}
            alt="Guns Up! gameplay"
            id="guns-up"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="guns-up" className="block text-center">
            Guns Up! Gameplay
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default ValkyrieEntertainmentPage;

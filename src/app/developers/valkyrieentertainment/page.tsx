import { Metadata } from "next";
import Image from "next/image";
import gunsUpGameplay from "../../../../public/images/dev-pages/guns-up.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
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
      <DeveloperButton
        developer="Valkyrie"
        urlPath="https://www.valkyrie-entertainment.com/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Valkyrie Entertainment are a Seattle-based developer founded in 2002,
        but were acquired by Sony very recently, in 2021. Haven&#39;t heard of
        Valkyrie or their games? That&#39;s because they act as a support studio
        for games developed at other PlayStation first-party studios.
      </Paragraph>
      <Paragraph>
        On PS5, that&#39;s been 2022&#39;s God of War: Ragnarök from Sony Santa
        Monica and 2024&#39;s ill-fated Concord from Firewalk. They also have
        extensive history with the inFamous and Twisted Metal IP during the
        PS3/PS4 generations, and even contributed to many Xbox IP
        pre-acquisition such as Forza Motorsport and State of Decay.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Despite being founded over 20 years ago, Valkyrie has only been the main
        developer on 2015&#39;s digital only &#39;Guns Up!&#39; for PSN and
        mobile. It was a commercial failure and only received 54 on Metacritic.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Valkyrie&#39;s support studio status means they haven&#39;t shipped
            their own PS5 game. Considering the critical and commercial failure
            of Guns Up!, it&#39;s also unlikely they&#39;ll ever get a chance
            to. Valkyrie haven&#39;t shown any signs that they even want to.
          </Paragraph>
          <Paragraph marginBottom={8}>
            If you&#39;re looking for your next great first-party PS5 game to
            play, you can safely ignore Valkyrie Entertainment. Especially if
            their unoptimized, bare-bones website is anything to go by.
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

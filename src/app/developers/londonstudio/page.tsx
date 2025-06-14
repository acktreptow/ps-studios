import { Metadata } from "next";
import Image from "next/image";
import londonStudioConceptArt from "../../../../public/images/dev-pages/london-studio-cancelled-game.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "London Studio",
  description:
    "The history of London Studio, a former first-party developer for PlayStation Studios.",
};

function LondonStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="London Studio" />
      <DeveloperButton
        developer="London Studio"
        urlPath="https://x.com/londonstudiohq"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        London Studio was founded in 2002, following their merger of SCE Studio
        Camden (formerly a division of then-first party developer Psygnosis) and
        Team Soho. While they did have some traditional IP such as the
        open-world Getaway series and also helped assist with the development of
        traditional games at other studios like Killzone 2 and LittleBigPlanet,
        London Studio has always been one of Sony&#39;s most experimental teams
        as they primarily worked on games that used the myriad of peripherals
        PlayStation created for its various consoles.
      </Paragraph>
      <Paragraph>
        By far, the most successful series London Studio developed was the
        Singstar IP that managed to sell more than 20 million copies in 6 years
        and spanned numerous games from PS2-PS4. However their other IP such as
        the PS2&#39;s EyeToy, Wonderbook and PlayStation Home for PS3 and
        PSVR&#39;s Blood and Truth were also commercially and/or successful.
      </Paragraph>
      <Paragraph>
        London Studio&#39;s final game was 2019&#39;s Erica. An interactive film
        game that took advantage of PS4&#39;s PlayLink, which allowed the game
        to be interfaced with a smartphone. The game received a mixed response,
        which combined with PSVR&#39;s failing popularity and PS Studios pivot
        to live-service, is no surprise that&#39;s the London Studio also went.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Of course, this was also not meant to be as the game was cancelled along
        with the closure of London Studio in early 2024 as part of wider
        layoffs.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            While London Studio will never end up shipping a PS5 game, it&#39;s
            perhaps not surprising that their pivot to live-service wouldn&#39;t
            work out. This cancelled live-service game (Project Camden) was
            described as a co-op multiplayer game set in a modern fantasy London
            and would use the studio&#39;s Soho engine they built (mostly) from
            the ground up for the PS5. It was described by studio head Tara
            Saunders as the company&#39;s &#39;most ambitious project to-date
            and specifically stated that a VR headset wouldn&#39;t be
            needed.&#39; &#39;It is our most ambitious game to-date,&#39;
            Saunders says. We&#39;re going to take all of that innovation DNA
            and apply that into this online co-op combat game. The game was
            still in early stages of production in early 2022 as they were
            trying to figure out where to go after 2019&#39;s Erica.
          </Paragraph>
          <Paragraph>
            Considering the description, it makes total sense why this was
            greenlit back in 2020. However in early 2024, following a much worse
            economy, being in one of the most expensive cities in the world,
            stagnant playtime amongst live-service games as people were out of
            lockdown and a growing hatred amongst the audience for Sony&#39;s
            live-service push that came to ahead with Concord later in the year.
            It makes sense why Sony would target London Studio for closure.
          </Paragraph>
          <Paragraph>
            It&#39;s a shame for London Studio because while the closure makes
            sense, there was a path for incredible success for them back during
            the PS3-era. Unfortunately for London Studio, both of their
            traditional AAA games in The Getaway 3 and Eight Days were cancelled
            by Sony Europe to relocate resources to other first-party games. Had
            these more serious/traditional/cinematic games have come out and
            reached their potential, London Studio could easily be in the upper
            echelon of PS Studios, with these IP standing side-by-side with The
            Last of Us/God of War etc.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It wasn&#39;t to be though, and London Studio&#39;s legacy will
            forever be a studio with some great IP that outside of Singstar,
            could never past the barriers a peripheral puts on them and become
            successful enough that they would still be around.
          </Paragraph>
        </div>
        <div>
          <Image
            src={londonStudioConceptArt}
            alt="Concept art of cancelled live service game"
            id="cancelled-game-concept-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label
            htmlFor="cancelled-game-concept-art"
            className="block text-center"
          >
            Concept Art Of London Studio&#39;s Cancelled Live Service Game
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default LondonStudioPage;

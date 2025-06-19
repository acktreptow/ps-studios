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
        London Studio was founded in 2002, following SCE Studio Camden (formerly
        Psygnosis) and Team Soho&#39;s merger. Their portfolio includes
        traditional IP such as PS2&#39;s open-world &#39;The Getaway&#39; series
        and support work on EU first-party games like LittleBigPlanet and
        Killzone 2. However, the vast majority of LS&#39;s games were developed
        to take advantage of the various peripherals each PlayStation had.
      </Paragraph>
      <Paragraph>
        By far, London Studios&#39; most successful IP was Singstar, which sold
        more than 20 million copies across many games from PS2-PS4. It used a
        USB microphone, but LS still developed games that required more unique
        peripherals. For PS2, it was their various camera-based EyeToy games.
        For PS3, it was their AR Wonderbook games. And for PS4, it was their
        PSVR title Blood and Truth. All were commercially and/or critically
        successful. PS3&#39;s PlayStation Home must also be mentioned, as it was
        one of the first metaverses - launching over a decade before that was
        even a term.
      </Paragraph>
      <Paragraph marginBottom={8}>
        London Studio&#39;s final game was 2019&#39;s &#39;Erica&#39; on PS4.
        While you could use a regular controller, it also took advantage of
        PS4&#39;s PlayLink. This allowed the game to be interfaced with a
        smartphone. However, Erica only achieved a mixed critical and commercial
        reception. Combined with PSVR&#39;s plummeting popularity, the upcoming
        PS5, and Sony&#39;s heavy live-service initiative, it&#39;s no surprise
        LS pivoted to a live-service PS5 game. While it wouldn&#39;t use a
        peripheral, it was still consistent with LS&#39;s DNA as live-service
        was a completely new arena for them. Unfortunately, this unannounced
        game would not only result in cancellation, but also the shuttering of
        London Studio in early 2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite London Studios’ demonstrated success across PS2-PS4, in
            hindsight, it’s easy to see that their pivot to a live-service
            multiplayer game (Project Camden) wouldn’t work out.
          </Paragraph>
          <Paragraph>
            Camden was a co-op multiplayer game set in a modern fantasy London,
            which would use the Soho engine LS (mostly) built for PS5. The
            online combat game would be their most ambitious project to date and
            would also have the longest development time in studio history as LS
            took their time to decide what type of game they should create after
            2019’s Erica.
          </Paragraph>
          <Paragraph>
            Considering Sony’s 2020-23 live-service push, Camden was easily
            greenlit. Yet with how long game development is, there’s major risk
            following trends as its popularity might fall off rapidly. By early
            2024, there was now a worse economy, decreasing playtime
            post-lockdown, and a fast growing hatred for Sony’s live-service
            push. LS was also working out of an expensive city, in a genre they
            had no experience in. So, when Sony needed to cut costs in the
            live-service arena it was increasingly bearish in, LS was naturally
            chosen for closure instead of others like Haven.
          </Paragraph>
          <Paragraph marginBottom={8}>
            London Studios’ closure in particular is a shame as they once had a
            path for extreme success. In 2005, LS revealed 2 traditional AAA PS3
            games – The Getaway and Eight Days – with trailers that were
            excellently received. Unfortunately, Sony EU cancelled both to
            reallocate money to other games. Had these more cinematic games
            reached their potential and launched to a starving 06-09 PS3
            audience, alongside casual IP like Singstar, LS would now be in the
            highest tier of PS Studios.
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

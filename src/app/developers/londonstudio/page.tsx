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
            While London Studio never ended up shipping a PS5 game, it&#39;s
            still worth analyzing whether their closure was justified. After
            all, they had demonstrated numerous successes across PS2-PS4.
            However, with hindsight, it&#39;s easy to see that their pivot to a
            live-service multiplayer game (Project Camden) wouldn&#39;t work
            out.
          </Paragraph>
          <Paragraph>
            Camden was described as a co-op multiplayer game set in a modern
            fantasy London, which would use the studio&#39;s Soho engine they
            (mostly) built from the ground up for the PS5. According to Studio
            head Tara Saunders, the online combat game would be their most
            ambitious project to date. It would also have the longest
            development time out of all London Studio games, as it was still in
            the early stages of production in early 2022. This was due to LS
            taking the time to figure out exactly what type of game they should
            create after 2019&#39;s Erica.
          </Paragraph>
          <Paragraph>
            Considering Camden&#39;s description and how bullish Sony was on
            live-service between 2020-23, it makes logical sense why it was
            greenlighted. However, as is always the risk when following game
            development trends, due to how long game development takes these
            days, the situation might change at some point during the
            development of your version of the trend. In early 2024, following a
            much worse economy, stagnant playtime amongst live-service games as
            people were out of lockdown, and a growing hatred amongst the
            audience for Sony&#39;s live-service push that came to ahead with
            Concord later in the year, Sony were in desperate need of cutting
            costs. Considering London Studio was located in one of the most
            expensive cities in the world and was working on a game in a genre
            they had not only had no experience, but was an arena Sony was
            getting increasingly hesitant to fully dive into, it makes sense why
            Sony would target them for closure while prioritizing other
            live-service studios with more expertise in the area like Haven.
          </Paragraph>
          <Paragraph>
            Closing London Studio in particular is a shame. While the decision
            to do so in 2024 makes sense, there was once a path for them to
            achieve incredible success back during the PS3 era. In 2005, they
            had 2 traditional AAA games that were in development - The Getaway 3
            and Eight Days. Despite their reveal trailers being excellently
            received, however, Sony Europe cancelled both games in order to
            relocate resources to other first-party games. Had these more
            serious/traditional/cinematic games reached their potential and
            shipped to a starving 2008 PS3 audience, London Studio could easily
            be in the upper echelon of PS Studios, with these IP standing
            side-by-side with The Last of Us/God of War etc. They could have
            even surpassed these developers considering they also had the more
            casual peripheral-focused games like Singstar.
          </Paragraph>
          <Paragraph marginBottom={8}>
            It wasn&#39;t to be though. So, London Studio&#39;s legacy will
            forever be a studio that would showcase the best of what
            PlayStation&#39;s peripherals had to offer but was yet another
            casualty of the failed live-service push.
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

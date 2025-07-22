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
        developer="London"
        urlPath="https://x.com/londonstudiohq"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        London Studio was founded in 2002, when SCE Studio Camden (formerly
        Psygnosis) and Team Soho merged. Their portfolio includes traditional IP
        such as PS2&#39;s open-world &#39;The Getaway&#39; series and supporting
        EU first-party games like LittleBigPlanet and Killzone 2. However, most
        of LS&#39;s games were developed to take advantage of the various
        peripherals each PlayStation had.
      </Paragraph>
      <Paragraph>
        London Studios&#39;s most successful IP was Singstar, selling more than
        20 million games across PS2-PS4. It used a USB mic, but LS also
        developed games that required more unique peripherals. For PS2, it was
        various camera-based EyeToy games. For PS3, it was AR Wonderbook games.
        And for PS4, it was PSVR&#39;s Blood and Truth. All were commercially
        and/or critically successful. PS3&#39;s PlayStation Home must also be
        mentioned, as it was one of the first metaverses - launching 10+ years
        before that was even a term.
      </Paragraph>
      <Paragraph marginBottom={8}>
        London Studios&#39;s final game was 2019&#39;s Erica, which utilized
        PS4&#39;s PlayLink to add smartphone compatibility. However, Erica only
        received a tepid reception. Combined with PSVR&#39;s plummeting
        popularity, the upcoming PS5, and Sony&#39;s heavy live-service push,
        it&#39;s no surprise LS pivoted to a live-service PS5 game. While it
        wouldn&#39;t use a peripheral, it was still consistent with LS&#39;s DNA
        as live-service was new to them. Unfortunately, the game would not only
        be cancelled, but also cause LS&#39;s closure in 2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Despite London Studios&#39;s demonstrated success across PS2-PS4, in
            hindsight, it&#39;s easy to see that their pivot to a live-service
            multiplayer game (Project Camden) would fail.
          </Paragraph>
          <Paragraph>
            Camden was a co-op multiplayer game set in a modern fantasy London,
            which would use the Soho engine LS (mostly) built for PS5. The
            online combat game would be their most ambitious project to date and
            also have the longest development time in studio history as LS took
            their time to decide what game to make after 2019&#39;s Erica.
          </Paragraph>
          <Paragraph>
            Considering Sony&#39;s 2020-23 live-service push, Camden was easily
            greenlit. Yet with how long game development takes, there&#39;s
            major risk following trends as its popularity might fall off
            rapidly. By early 2024, there was a worse economy, decreased
            playtime post-lockdown, and a growing hatred for Sony&#39;s
            live-service push. LS was also in an expensive city, in a genre they
            had no experience in. So when Sony needed to cut costs in a
            live-service space it was increasingly bearish in, LS was logically
            chosen for closure over others.
          </Paragraph>
          <Paragraph marginBottom={8}>
            London Studios&#39;s closure is a particular shame as they once had
            a path for great success. In 2005, LS revealed 2 traditional AAA PS3
            games - The Getaway and Eight Days - with excellently received
            trailers. Unfortunately, Sony EU cancelled both to reallocate money
            to others. Had these blockbuster games reached their potential and
            launched to a starving 06-09 PS3 audience alongside Singstar,
            LS&#39;s history would be very different.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={londonStudioConceptArt}
            alt="Concept art of project Camden"
            id="camden-concept-art"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="camden-concept-art" className="block text-center">
            Project Camden&#39;s Only Concept Art
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default LondonStudioPage;

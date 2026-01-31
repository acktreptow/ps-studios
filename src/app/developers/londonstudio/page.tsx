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
        such as PS2&#39;s GTA-like The Getaway series. However, most LS games
        took advantage of the various peripherals each PlayStation had.
      </Paragraph>
      <Paragraph>
        LS&#39;s most successful IP was Singstar, which sold 20 million+ across
        PS2-PS4. It used a USB mic, but LS also utilized more unique
        peripherals. For PS2, it was the camera-based EyeToy. For PS3, it was
        the AR Wonderbook. For PS4, it was PSVR&#39;s Blood and Truth. All were
        commercially and/or critically successful. PS3&#39;s PlayStation Home
        was also one of the first metaverses - launching 10+ years before it was
        even a term.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Their final game was 2019&#39;s Erica, which used PS4&#39;s PlayLink to
        add smartphone compatibility, but was only tepidly received. Considering
        the upcoming PS5 and Sony&#39;s live-service push, it&#39;s no surprise
        LS pivoted there too - especially as it was still consistent with their
        DNA, as live-service was new to them. Unfortunately, the title would not
        only be cancelled, but also caused LS&#39;s closure in 2024.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Project Camden was an online co-op combat game set in a modern
            fantasy London, used the Soho engine LS built for PS5, and had the
            longest development time in LS history. Sony&#39;s 2020-23
            live-service push also meant Camden was easily greenlit, yet
            there&#39;s major risk following trends with how long game
            development now is.
          </Paragraph>
          <Paragraph>
            By 2024, there was a worse economy, less playtime post-lockdown, and
            a hatred for live-services among PS5&#39;s hardcore base. LS was
            also in an expensive city, in a genre they had no experience in. So
            when Sony cut costs, LS was logically chosen for closure over
            others.
          </Paragraph>
          <Paragraph>
            LS&#39;s closure is a particular shame as they had a path for great
            success. In 2005, LS revealed 2 traditional AAA PS3 titles - The
            Getaway and Eight Days - with excellently received trailers. But
            Sony cancelled both to reallocate money to others. Had these
            blockbusters reached their potential and launched to a starving
            06-09 PS3 hardcore audience, history would be very different.
          </Paragraph>
          <Paragraph marginBottom={8}>
            London Studio now lives on through Twisted Works - a new developer
            composed of many former LS staff. In Dec 2025, they revealed Cast
            Outs, which is basically what Camden was. An early access beta is
            scheduled for PS5/PC in early 2027, so it&#39;ll be about a year
            before it can be determined if Sony made the right choice in closing
            LS.
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

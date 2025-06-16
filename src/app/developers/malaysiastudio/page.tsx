import { Metadata } from "next";
import Image from "next/image";
import tlouComparison from "../../../../public/images/dev-pages/tlou1.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Malaysia Studio",
  description:
    "The history of Malaysia Studio, a former first-party developer for PlayStation Studios.",
};

function MalaysiaStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Malaysia Studio" />
      <DeveloperButton
        developer="Malaysia Studio"
        urlPath="https://www.linkedin.com/company/pssmy/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2020, in Kuala Lumpur, Malaysia Studio was created from the
        ground up by Sony to work alongside San Diego&#39;s Visual Arts team on
        character models, visual assets, animations, motion capture etc. Due to
        this sole role as a support studio, they take quite a unique place
        within PS Studios as they essentially work on every project. For
        example, Naughty Dog&#39;s The Last of Us Parts 1 & 2, as well as the
        MLB The Show IP by San Diego Studio (the first-party developer in SD,
        not Visual Arts).
      </Paragraph>
      <Paragraph>
        While you&#39;ll see Malaysia Studio&#39;s work in pretty much every PS
        Studios project going forward, as a small support developer with under
        100 employees (who now work in-office as opposed to remote during the
        pandemic), their contributions to each game are also small.
      </Paragraph>
      <Paragraph marginBottom={8}>
        With The Last of Us, Malaysia Studio worked on the hints that the player
        would receive upon death in order to get past whatever obstacle and/or
        combat scenario that they were stuck at. For MLB The Show, they worked
        on various art assets that need some attention to ensure they&#39;re up
        to date for each yearly iteration of the game, but don&#39;t require to
        be created from scratch.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Over the past decade, Malaysia has become a popular country for
            support developers to form and work alongside the primary developer
            to help them achieve their vision for their videogame. Whilst this
            is great in providing more opportunities for game developers in a
            country you wouldn&#39;t necessarily expect, as developers like
            Malaysia Studio aren&#39;t built to be the primary developer of
            videogames, you therefore shouldn&#39;t expect them to develop their
            own PS5 game any time soon.
          </Paragraph>
          <Paragraph>
            These studios are also not immune from the multiple rounds of
            layoffs the industry has seen over the past couple of years. Just in
            March 2025 alone, around 20 Malaysia studio staff were let go. This
            included asset and concept artists as well as project managers who
            were specifically told this wasn&#39;t due to performance, but
            rather about needing to reduce the workforce in this economy. It
            would be a near-impossible task for a studio originally meant for
            support work to start their own game up when they have to deal with
            these type of layoffs that are out of their control.
          </Paragraph>
          <Paragraph>
            However, these unfortunate circumstances may not always be the case
            long-term. In Malaysia alone, the talent pool extends to other
            companies such as Larian (Baldur&#39;s Gate 3), Codemasters and
            Bandai Namco. It&#39;s therefore not out of the realm of possibility
            that Malaysia Studio, under better circumstances, could grow into a
            developer that one day might develop their own PS6 game. The intent
            already seems to be there, evidenced by Malaysia Studios head Hasnul
            Hadi Samsudin when he said: &#39;There&#39;s nothing that can be
            done in our world of AAA games that can&#39;t be done here in
            Malaysia&#39;.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Clearly, the talent is there, and their traditionally non-gaming
            place in the world could generate new game ideas that would stand
            out. Similar to what we see with Sony&#39;s China, India and MENA
            Hero Projects. Until then, you can enjoy Malaysia Studios&#39;s
            small contributions on a variety of PS5 games across most of the PS
            Studios portfolio.
          </Paragraph>
        </div>
        <div>
          <Image
            src={tlouComparison}
            alt="Comparing TLOU 1 on PS3/PS4/PS5"
            id="tlou1"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="tlou1" className="block text-center">
            TLOU Comparison Between PS3, PS4 & PS5
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default MalaysiaStudioPage;

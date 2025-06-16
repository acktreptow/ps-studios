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
            Malaysia (the country not studio) has become a prime location for
            videogame development support over the past decade. Whilst this is
            great in providing more opportunities for game developers in that
            region than one would expect, these companies (PS Malaysia included)
            are not built to developer their own games as the primary developer.
            You should therefore not expect PS Malaysia to develop their own PS5
            games. Especially as around 20 staff were let go in March 2025
            during a round of Sony layoffs, which included asset and concept
            artists.
          </Paragraph>
          <Paragraph>
            However, considering the talent pool in Malaysia that extends to
            other companies such as Larian (Baldur&#39;s Gate 3), Codemasters
            and Bandai Namco, it&#39;s not out of the realm of possibility that
            over the long-term, PS Malaysia could grow into a developer that one
            day might develop their own PS6 game. In regards to the layoffs,
            staff were notified via an email of the layoffs, being told that it
            wasn&#39;t due to the studio&#39;s performance and rather about
            reducing the overall workforce. Clearly, there&#39;s talent there.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Until then, we can enjoy their small contributions in a wide variety
            of other PS Studios PS5 games. After all, PlayStation Studios
            Malaysia head Hasnul Hadi Samsudin said it himself: &#39;There&#39;s
            nothing that can be done in our world of AAA games that can&#39;t be
            done here in Malaysia&#39;.
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

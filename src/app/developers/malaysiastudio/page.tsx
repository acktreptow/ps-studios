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
        Founded in 2020, PlayStation Studios Malaysia was created from the
        ground up by Sony for a unique reason, to work on everything. The Last
        of Us Part 1/2 and MLB The Show are just 2 examples.
      </Paragraph>
      <Paragraph>
        This new Malaysian studio was founded in Kuala Lumpur as a support
        studio, working closely with PlayStation&#39;s Visual Arts team based in
        San Diego. PS Studios Malaysia was founded in 2020 to work alongside
        Visual Arts, which itself provides art and technical support to
        first-party PS studios. Malaysia is a small studio with under 100
        employees (who now work in-office as opposed to remote during the
        pandemic) creating character models and other visual assets as well as
        motion capture and more.
      </Paragraph>
      <Paragraph marginBottom={8}>
        While Malaysia do work on pretty much everything, their contributions to
        game are small. For example with The Last of Us, they worked on hints
        the player would receive when they died in order to get past whatever
        obstacle they were at. There&#39;s also various MLB art assets that need
        some attention to be updated year-to-year, but don&#39;t require to be
        created from scratch.
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

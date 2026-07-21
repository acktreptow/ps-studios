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
    "The history and future of Malaysia Studio, a first-party developer for PlayStation Studios.",
};

function MalaysiaStudioPage(): JSX.Element {
  return (
    <Container>
      <Title title="Malaysia Studio" />
      <DeveloperButton
        developer="Malaysia"
        urlPath="https://www.linkedin.com/company/pssmy/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Founded in 2020 in Kuala Lumpur, Malaysia Studio was created by Sony to
        work alongside PlayStation&#39;s Visual Arts group on character models,
        visual assets, animations, and motion capture. As they&#39;re solely a
        support studio, they work on nearly every PS Studios game. For example,
        they contributed to Naughty Dog&#39;s The Last of Us Part 1 and 2, and
        San Diego Studio&#39;s MLB The Show. However, their contribution to each
        game is small, especially as MS only has around 100 employees.
      </Paragraph>
      <Paragraph marginBottom={8}>
        With TLOU, MS worked on hints the player receives upon death to get past
        the obstacle and/or combat scenario they&#39;re stuck on. For MLB, they
        worked on art assets that only need to be updated for the next yearly
        iteration, not created from scratch. Most recently, MS supported Ghost
        of Yōtei and Saros with art, animation, and QA.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Malaysia has recently become a popular country for support studios
            to form, providing more opportunities for developers in a region
            with historically so few. However, as these studios are built to
            support, don&#39;t expect MS to develop their own PS5 game.
          </Paragraph>
          <Paragraph>
            Support studios are also not immune from layoffs due to the weak
            economy. Around 20 MS staff were let go in March 2025, including
            artists and managers, explicitly to save money. It&#39;s therefore
            currently impossible for MS to hire up and make their own games.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Economic issues may not last though, and Malaysian talent already
            extends to Larian, Bandai Namco, and others. With a better economy,
            MS could expand to make their own PS6 title. The intent is there -
            Studio Head Hasnul Samsudin stated: &#39;There&#39;s nothing that
            can be done in... AAA games that can&#39;t be done in Malaysia&#39;.
            It&#39;s an initiative the Malaysian government is also backing.
            Until then, you can enjoy MS contributions in most first-party PS5
            games.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={tlouComparison}
            alt="Comparing TLOU 1 on PS3, PS4 & PS5"
            id="tlou1"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="tlou1" className="block text-center">
            TLOU Graphics On PS3, PS4 & PS5
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default MalaysiaStudioPage;

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
        Founded in 2020, in Kuala Lumpur, Malaysia Studio was created by Sony to
        work alongside San Diego&#39;s Visual Arts group on character models,
        visual assets, animations and motion capture etc. As they&#39;re solely
        a support studio, they work on nearly every PS Studios game. For
        example, Naughty Dog&#39;s The Last of Us Parts 1 & 2, as well as the
        MLB The Show IP by San Diego Studio (not Visual Arts). However, their
        contribution to each game is small - especially as the studio only has
        around 100 employees.
      </Paragraph>
      <Paragraph marginBottom={8}>
        With TLOU, Malaysia Studio worked on the hints the player receives upon
        death to help with whatever obstacle and/or combat scenario they were
        stuck on. For MLB, they worked on various art assets that only need to
        be updated for the next yearly iteration. Not created from scratch.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Over the past decade, Malaysia has become a popular country for
            support studios to form and help the main developer achieve their
            vision for a game. This is great in providing more opportunities for
            game developers in a country with traditionally so few. But as
            they&#39;re built to support, you shouldn&#39;t expect Malaysia
            Studio to develop their own PS5 game any time soon.
          </Paragraph>
          <Paragraph>
            These support studios are also not immune from the numerous rounds
            of layoffs every company is going through due to the worsening
            economy. In March 2025 alone, around 20 Malaysia Studio staff were
            let go. Including asset/concept artists and project managers who
            were specifically told this wasn&#39;t due to performance, but to
            save money. It&#39;s therefore a near-impossible task for support
            studios to hire up and make their own games in this current economic
            climate.
          </Paragraph>
          <Paragraph marginBottom={8}>
            However, these economic issues may not persist long-term. And in
            Malaysia, the talent pool already extends to Larian, Codemasters,
            Namco etc. It&#39;s therefore possible that Malaysia Studio, under
            better economic circumstances, grows into a developer that one day
            develops their own PS6 game. The intent already seems to be there as
            studio head Hasnul Samsudin stated: &#39;There&#39;s nothing that
            can be done in our world of AAA games that can&#39;t be done here in
            Malaysia&#39;. Until then, you can enjoy their small contributions
            in most PS5 games across the PS Studios portfolio.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={tlouComparison}
            alt="Comparing TLOU 1 on PS3/PS4/PS5"
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

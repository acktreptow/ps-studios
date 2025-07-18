import { Metadata } from "next";
import Image from "next/image";
import savageLogo from "../../../../public/images/dev-pages/savage-logo.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Neon Koi",
  description:
    "The history of Neon Koi, a former first-party developer for PlayStation Studios.",
};

function NeonKoiPage(): JSX.Element {
  return (
    <Container>
      <Title title="Neon Koi" />
      <DeveloperButton
        developer="Neon Koi"
        urlPath="https://www.linkedin.com/company/neonkoi/"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Neon Koi was a German-Finnish developer that was founded in 2020 under
        the name &#39;Savage Game Studios&#39;. It was under this initial name
        when Sony acquired them in August 2022, before rebranding to Neon Koi in
        November 2023 after many leadership resignations.
      </Paragraph>
      <Paragraph marginBottom={8}>
        When it comes to Neon Koi&#39;s PS5 output, they didn&#39;t release
        anything. That&#39;s because they were a founding member of PlayStation
        Studios&#39;s Mobile Division and acquired to exclusively develop mobile
        games. According to their 2022 acquisition press release, their debut
        title was supposedly a AAA live-service action game that was still very
        early in development.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Neon Koi closed in October 2024. And despite forming four years
            before closure, NK didn&#39;t even announce the name of their game,
            let alone show gameplay or actually ship.
          </Paragraph>
          <Paragraph>
            In fact, Neon Koi was only known for negative headlines. Like when
            the head of PlayStation&#39;s Mobile Division and an SGS founder
            abruptly quit under suspicious circumstances, or the failed
            rebranding to Neon Koi in 2023.
          </Paragraph>
          <Paragraph marginBottom={8}>
            At best, Neon Koi are an insignificant footnote in PlayStation&#39;s
            history during the PS5 era. At worst, they&#39;re a glaring example of
            mistakes made by former PlayStation leadership. From
            short-sighted, poorly researched acquisitions to wasted spending on
            games that were cancelled before they were even announced. NK
            embodies the missteps of the Jim Ryan era.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={savageLogo}
            alt="Savage Game Studios logo"
            id="savage-logo"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="savage-logo" className="block text-center">
            Neon Koi: Formerly Savage Game Studios
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default NeonKoiPage;

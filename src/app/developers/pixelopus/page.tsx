import { Metadata } from "next";
import Image from "next/image";
import concreteGenie from "../../../../public/images/dev-pages/concrete-genie.png";
import Container from "../../components/Container";
import Title from "../../components/Title";
import DeveloperButton from "../../components/DeveloperButton";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";
import ImageSection from "../../components/ImageSection";

export const metadata: Metadata = {
  title: "Pixelopus",
  description:
    "The history of Pixelopus, a former first-party developer for PlayStation Studios.",
};

function PixelopusPage(): JSX.Element {
  return (
    <Container>
      <Title title="Pixelopus" />
      <DeveloperButton
        developer="Pixelopus"
        urlPath="https://x.com/pixelopus"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Pixelopus was a California-based developer internally formed under
        unique circumstances in 2014. In 2012, Thatgamecompany&#39;s released
        PS3 indie adventure &#39;Journey&#39; to monumental critical and
        commercial success. The industry took note, and it inspired Sony
        first-party developer &#39;Foster City Studio&#39; (now San Mateo
        Studio) to fund small development teams to try and emulate this success.
      </Paragraph>
      <Paragraph>
        One university where they executed this strategy was Carnegie Mellon,
        who they gave PS Vitas to experiment with. 6 students were hired, along
        with 3 from San Jose University and 2 industry vets to form Pixelopus.
        That same year, they released Entwined for PS3, PS4 and Vita. The
        twin-stick rhythm game shadow-dropped at Sony&#39;s 2014 E3 showcase but
        only received tepid critical and commercial success.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Pixelopus followed Entwined with 2019&#39;s Concrete Genie on PS4. This
        award-winning action-adventure was heavily inspired by Jet Set Radio and
        street art, and also received positive reviews for its artistry. But
        like Entwined, it wasn&#39;t a commercial hit. It was unfortunately also
        Pixelopus&#39;s final game, as Sony shuttered them in 2023.
      </Paragraph>
      <ImageSection flexOnMdScreens={false}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Like Japan Studio who shut in 2021, Pixelopus would&#39;ve been more
            useful to Sony now than in 2023. It&#39;s not surprising Sony closed
            Pixelopus as their AA single-player DNA clashed with the
            live-service push. However in 2025, it&#39;s clear with games like
            Concord, Fairgames and Marathon that the live-service pivot has
            failed - resulting in consequential gaps between first-party games.
            More than ever, Sony could use Pixelopus&#39;s AA games to fill
            these gaps.
          </Paragraph>
          <Paragraph>
            Nonetheless, the unfortunate reality is that closing Pixelopus is
            still justified. Unlike Japan Studio, their legacy amongst
            PlayStation fans is non-existent. JS games might not sell millions,
            but games like Ico provide utility that goes beyond money as it
            keeps the hardcore base engaged. Whereas Pixelopus games not only
            don&#39;t sell, but aren&#39;t viewed by hardcore PlayStation fans
            as a brand differentiator, regardless of awards.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Pixelopus&#39;s expensive San Mateo location further makes it hard
            to justify keeping open in a worsening economy. Finally, their
            cancelled PS5 game was a licensed IP in partnership with Sony
            Animation, which would incur extra fees/red tape. Considering these
            factors, even with Sony&#39;s failed live-service push, closing
            Pixelopus is still an understandable conclusion.
          </Paragraph>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={concreteGenie}
            alt="Concrete Genie"
            id="concrete-genie"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concrete-genie" className="block text-center">
            Concrete Genie&#39;s PS4 Cover Art
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default PixelopusPage;

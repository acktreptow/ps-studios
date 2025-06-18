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
        urlPath="https://x.com/pixelopus?lang=en"
      />
      <SubTitle subtitle="History" />
      <Paragraph>
        Pixelopus was a California-based developer internally formed under
        unique circumstances in 2014. Two years earlier, Thatgamecompany&#39;s
        released PS3 indie adventure game &#39;Journey&#39; to monumental
        critical and commercial success. The industry took note, and it inspired
        PlayStation first-party developer &#39;Foster City Studio&#39; (now San
        Mateo Studio) to fund small development teams in the hope of recreating
        this success.
      </Paragraph>
      <Paragraph>
        One place where they executed this strategy was Carnegie Mellon
        University, who they gave PS Vitas to experiment with. 6 students were
        hired, along with 3 from San Jose University and 2 industry vets to form
        Pixelopus. That same year, they released Entwined for PS3, PS4 and PS
        Vita. The twin-stick rhythm game shadow-dropped at Sony&#39;s 2014 E3
        showcase but only received mediocre critical and commercial success.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Pixelopus followed up Entwined with 2019&#39;s Concrete Genie on PS4.
        This action-adventure game, which was heavily inspired by Jet Set Radio
        and street art, won/was nominated for many awards due to its artistry.
        It also received good reviews in general, but like Entwined wasn&#39;t a
        commercial hit. It was unfortunately also Pixelopus&#39;s final game, as
        Sony shuttered them in 2023.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Like Japan Studio, who was shut in 2021, Pixelopus would&#39;ve been
            more useful to Sony now than in 2023. It&#39;s not surprising Sony
            closed Pixelopus when their AA single-player DNA clashed with the
            live-service initiative. However, in 2025, it&#39;s clear with games
            like Concord, Fairgames and Marathon that their live-service pivot
            mostly failed - resulting in consequential gaps between first-party
            output. More than ever, Sony could use Pixelopus&#39;s AA games to
            fill the gaps.
          </Paragraph>
          <Paragraph>
            Nonetheless, even taking this argument into account, the unfortunate
            reality is that closing Pixelopus is still somewhat justified.
            Unlike Japan Studio, their legacy amongst PlayStation fans is
            non-existent. JS games might not sell millions, but a game like Ico
            provides utility that goes beyond money as it keeps the hardcore
            base engaged. Whereas Pixelopus games not only don&#39;t sell, but
            aren&#39;t viewed by hardcore PlayStation fans as a brand
            differentiator, regardless of awards.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Pixelopus&#39;s expensive San Mateo location further makes it hard
            to justify keeping open in a worsening economy. Finally, their
            cancelled PS5 game was a licensed IP in collaboration with Sony
            Animation, which would incur extra fees/red tape. Considering all
            these factors, even with Sony&#39;s failed live-service push,
            shutting Pixelopus is still an understandable conclusion.
          </Paragraph>
        </div>
        <div>
          <Image
            src={concreteGenie}
            alt="Concrete Genie"
            id="concrete-genie"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concrete-genie" className="block text-center">
            Pixelopus&#39;s Final Game: Concrete Genie
          </label>
        </div>
      </ImageSection>
    </Container>
  );
}

export default PixelopusPage;

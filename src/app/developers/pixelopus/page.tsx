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
        Pixelopus was a California-based developer that was founded in 2014.
        What makes them particularly interesting is the unique way they were
        created within PS Studios. In 2012, Thatgamecompany&#39;s released the
        PS3 indie adventure game &#39;Journey&#39; to monumental critical and
        commercial success. The whole industry took note, and it inspired the
        PlayStation first-party developer &#39;Foster City Studio&#39; (now
        known as San Mateo Studio) to use some of its money to fund small
        development teams in the hope of recreating this success.
      </Paragraph>
      <Paragraph>
        One place where they executed this strategy was at Carnegie Mellon
        University in Pittsburgh, where they provided PS Vitas to experiment
        with. This led to the hiring of six students, along with three from San
        Jose University and two industry veterans to form Pixelopus.
      </Paragraph>
      <Paragraph>
        Pixelopus released their first game the same year they were founded,
        2014&#39;s Entwined for PS3, PS4 and PS Vita. This twin-stick rhythm
        game was shadow-dropped at Sony&#39;s 2014 E3 showcase but only received
        mediocre critical and commercial success.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Pixelopus followed up Entwined with 2019&#39;s Concrete Genie on PS4.
        This action-adventure was heavily inspired by Jet Set Radio and street
        art, which isn&#39;t particularly surprising considering the game was
        nominated for numerous awards due to its artistry. It also received good
        reviews in general, but like Entwined, it wasn&#39;t a commercial hit.
        While Concrete Genie was a step in the right direction, at least
        critically, it was unfortunately also Pixelopus&#39;s final game as Sony
        shuttered them four years later in 2023.
      </Paragraph>
      <ImageSection flexOnMdScreens={true}>
        <div>
          <SubTitle subtitle="My Analysis & Predictions" />
          <Paragraph>
            Obviously as Pixelopus are shut down, it&#39;s easy to predict that
            we won&#39;t see any PS5 games from them. However, it&#39;s worth
            examining whether the shuttering was justified.
          </Paragraph>
          <Paragraph>
            Despite Sony&#39;s focus on live-service at this time, it would be
            easy to say this was unfair just because their singleplayer-focused
            portfolio didn&#39;t match. However, in the case of Pixelopus, the
            unfortunate reality is that shuttering them down was justified.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Neither of Pixelopus&#39;s games sold well and being in San Mateo,
            it would cost a lot to keep the studio going despite the limited
            headcount. Furthermore, the cancelled game they were working on was
            leaked to be a licensed IP that whey were collaborating with Sony
            Pictures Animation on. This likely would incur extra fees that
            wouldn&#39;t be there if it was their own IP, like Spider-Man is for
            Insomniac. Therefore, even if Sony&#39;s live-strategy didn&#39;t
            crash and burn, one could still find it hard to argue that Pixelopus
            was worth keeping around in this economy.
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

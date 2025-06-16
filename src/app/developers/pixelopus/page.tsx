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
            Obviously, as Pixelopus is closed, it&#39;s easy to predict that
            they&#39;ll never ship a PS5 game. However, it&#39;s still worth
            examining whether their closure by Sony was justified.
          </Paragraph>
          <Paragraph>
            In 2023, PlayStation were full-steam ahead with their live-service
            strategy. Considering Pixelopus&#39;s single-player, more artistic
            DNA, it&#39;s not surprising why they were one of the first
            developers to go this generation, but it was short-sighted. As
            we&#39;ve seen Concord and the missteps with Fairgames/Marathon
            before they&#39;ve even released, PlayStation&#39;s execution of
            their live-service strategy has been horrendous. Now more than ever,
            PlayStation could have used the type of AA games Pixelopus was known
            for to fill the wasteland that is their first-party output right now
            due to so many live-service cancellations.
          </Paragraph>
          <Paragraph>
            However, even taking the live-service execution into account, the
            unfortunate reality is that shuttering Pixelopus is still somewhat
            justified. Neither of their games sold well, but they did provide
            utility that goes beyond money in/out, such as prestige gained from
            awards. But the studio&#39;s expensive San Mateo location and the
            worsening economy. Furthermore, Pixelopus&#39;s cancelled PS5 game
            was a licensed IP in collaboration with Sony Pictures Animation. The
            project therefore would incur extra fees/red tape that their own IP
            wouldn&#39;t, like Spider-Man does for Insomniac. Award nominations
            are just not enough when companies are looking everywhere to save
            money and it&#39;s not like the audience have shown they&#39;ll buy
            Pixelopus games that are their own IP anyways.
          </Paragraph>
          <Paragraph marginBottom={8}>
            Therefore, even if Sony&#39;s live-strategy didn&#39;t crash and
            burn, the unfortunate reality is one could still find it hard to
            argue that Pixelopus was worth keeping around in this economy.
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

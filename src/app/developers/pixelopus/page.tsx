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
        Pixelopus was a California-based developer that was founded in 2014 and
        they have a very unique history within PS Studios due to how they were
        created. Due to Thatgamecompany&#39;s critical and commercial success
        with 2012&#39;s Journey, fellow PS Studios first-party developer San
        Mateo Studio were inspired to fund small development teams to try and
        recreated the success.
      </Paragraph>
      <Paragraph>
        One such example was their funding of a game development program at
        Carnegie Mellon University, which eventually led to student at other
        universities plus a couple of industry veterans to created the 9-man
        Pixelopus.
      </Paragraph>
      <Paragraph>
        Pixelopus released their first game the same year they were founded,
        2014&#39;s Entwined for PS3, PS4 and PS Vita. This twin-stick rhythm
        game was a shadow-drop at Sony&#39;s 2014 E3 showcase, but only received
        mediocre critical and commercial success.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Pixelopus then followed-up Entwined with 2019&#39;s Concrete Genie. An
        action-adventure that was heavily inspired by Jet Set Radio and street
        art. Concrete Genie received good reviews and was nominated for many
        awards due to its artistry. However, it again didn&#39;t sell well. It
        would also be Pixelopus&#39;s last game as theyu were closed down in
        2023.
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

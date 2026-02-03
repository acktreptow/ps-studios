import { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";

export const metadata: Metadata = {
  title: "About",
  description:
    "The about section of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

function AboutPage(): JSX.Element {
  return (
    <Container>
      <Title title="About PS5 Studios" />

      {/* Overview Section */}
      <SubTitle subtitle="Overview" />
      <Paragraph marginBottom={8}>
        Welcome to PS5 Studios! This site is my fan-made project that aims to
        provide a comprehensive overview of all the current and former
        PlayStation Studios first-party developers during the PS5 generation.
      </Paragraph>

      {/* Why Section */}
      <SubTitle subtitle="Why PS5 Studios Exists" />
      <Paragraph>
        The video game industry has changed significantly since the PS4 era -
        more so than any industry analyst anticipated. Ballooning game budgets,
        a record high number of layoffs and the increase in live service games
        are just a few examples.
      </Paragraph>
      <Paragraph>
        The PlayStation Studios umbrella has also changed significantly. Sony
        has acquired 10 new studios, rebranded others, and even closed a few.
      </Paragraph>
      <Paragraph>
        Consequently, it&#39;s hard to keep track of all the changes and to know
        what each studio is working on. But it&#39;s something worth doing
        because their first-party games are considered by many to be the peak of
        what the PS4 gen had to offer.
      </Paragraph>
      <Paragraph marginBottom={8}>
        I therefore felt ps5studios.com was a necessary platform to see if this
        prestige has been maintained, to separate fact from fiction, and
        sprinkle in my own analysis and predictions too.
      </Paragraph>

      {/* Developers Section */}
      <SubTitle subtitle="Developers Section" />
      <Paragraph>
        This section is the focal point of the site. Each page provides a brief
        history of a PlayStation developer, analyzes the games they&#39;ve
        already released on the PS5 (if any at all), and whether or not they
        hold a unique position under the PlayStation Studios umbrella.
      </Paragraph>
      <Paragraph>
        For close developers, I also go into why this closure occurred and
        whether or not it was justified. For current developers, one fact you
        might find particularly interesting is the number of days between each
        release by that developer.
      </Paragraph>
      <Paragraph>
        For example, has increasing budgets and more complicated development
        pipelines affected the number of games released by that studio? Or are
        other factors primarily at play? This is something I explore - coming to
        different conclusions depending on the developer.
      </Paragraph>
      <Paragraph marginBottom={8}>
        I also provide my own analysis and predictions on what you can expect
        from each studio for the remainder of the PS5 gen. Like predicting what
        their next game is and its release window.
      </Paragraph>

      {/* PS5 Games Section */}
      <SubTitle subtitle="PS5 Games Section" />
      <Paragraph>
        This section provides a list of every released and upcoming PS5 game
        from PlayStation Studios (so no PC ports). You&#39;ll see the game&#39;s
        developer, genre, release date, and Metacritic score.
      </Paragraph>
      <Paragraph marginBottom={8}>
        You&#39;re also able to sort the games by Metacritic score or by release
        date to analyze the information from various different angles.
      </Paragraph>

      {/* Stats Section */}
      <SubTitle subtitle="Stats Section" />
      <Paragraph>
        This is where the analysis goes many layers deep to provide a number of
        stats for each first-party developer and the PlayStation Studios
        umbrella as a whole.
      </Paragraph>
      <Paragraph>
        These stats range from basic ones like a bullet-point list detailing how
        many PS5 games each developer has released, to more complex ones like
        which developer&#39;s PS5 games result in the highest average Metacritic
        score.
      </Paragraph>
      <Paragraph>
        I also include some more subjective stats predicting the future of
        PlayStation Studios. For example, which five developers are most and
        least likely to be closed by Sony.
      </Paragraph>
      <Paragraph marginBottom={8}>
        Have any suggestions for other stats you&#39;d like to see? Please email
        me at{" "}
        <Link
          href="mailto:alex@treptow.dev"
          className="font-semibold hover:font-bold"
        >
          alex@treptow.dev
        </Link>
        !
      </Paragraph>

      {/* GitHub Link Section */}
      <SubTitle subtitle="GitHub Link" />
      <Paragraph>
        If you enjoyed the site, I would greatly appreciate it if you starred
        the linked repository in the header. Or you can click{" "}
        <Link href="https://github.com/acktreptow/ps-studios" target="_blank">
          <span className="font-semibold hover:font-bold">here</span>
        </Link>{" "}
        to go directly to the GitHub page. Thank you!
      </Paragraph>
    </Container>
  );
}

export default AboutPage;

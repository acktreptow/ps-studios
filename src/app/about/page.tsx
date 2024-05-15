import Link from "next/link";

function AboutPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        About PS5 Studios
      </h1>

      {/* Overview Section */}
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">Overview</span>
      </h2>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Welcome to PS5 Studios! This site is my fan-made project that aims to
        provide a comprehensive overview of all the first-party developers part
        of PlayStation Studios during the PS5 generation.
      </p>

      {/* Why Section */}
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          Why PS5 Studios Exists
        </span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        The video game industry has changed significantly since the PS4 era -
        more so than any industry analyst anticipated. Ballooning game budgets,
        a record high number of layoffs and the increase in live service games
        are just a few examples.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        The PlayStation Studios umbrella has also changed significantly. Sony
        has acquired 10 new studios, rebranded others, and even closed a few.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Consequently, it&#39;s hard to keep track of all the changes and to know
        what each studio is working on. But it&#39;s something worth doing
        because their first-party games are considered by many to be the peak of
        what the PS4 gen had to offer.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        I therefore felt ps5studios.com was a necessary platform to see if this
        prestige has been maintained, to separate fact from fiction, and
        sprinkle in my own analysis and predictions too.
      </p>

      {/* Developers Section */}
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">Developers Section</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        This section is the focal point of the site. Each page provides a brief
        history of a PlayStation developer, analyzes the games they&#39;ve
        already released on the PS5 (if any at all), and whether or not they
        hold a unique position under the PlayStation Studios umbrella.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        One fact you might find particularly interesting is the number of days
        between each release by that developer. This is just one unique way
        I&#39;m trying to separate fact from fiction.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        For example, has increasing budgets and more complicated development
        pipelines affected the number of games released by that studio? Or are
        other factors primarily at play? This is something I&#39;ll be exploring
        and coming to different conclusions depending on the developer.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        I&#39;ll also provide my own analysis and predictions on what you can
        expect from each studio for the remainder of the PS5 gen. Like
        predicting what their next game is and its release window.
      </p>

      {/* PS5 Games Section */}
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games Section</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        This section provides a list of every released and upcoming PS5 game
        from PlayStation Studios (so no Nixxes PC ports). You&#39;ll be able to
        see the game&#39;s developer, genre, release date, and Metacritic score.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        You&#39;ll also be able to sort the games by Metacritic score or by
        release date to analyze the information from various different angles.
      </p>

      {/* Stats Section */}
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">Stats Section</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        My favorite section of the site! This is where the analysis goes many
        layers deep to provide a number of stats for each first-party dev and
        the PlayStation Studios umbrella as a whole.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        These stats range from basic ones like a bullet-point list detailing how
        many PS5 games each developer has released, to more complex ones like
        which developer&#39;s PS5 games results in the highest average
        Metacritic score.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        I&#39;ll also include some more subjective stats predicting the future
        of PlayStation Studios. For example, which five developers are most and
        least likely to be closed by Sony.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        Have any suggestions for other stats you&#39;d like to see? Please email
        me at{" "}
        <Link
          href="mailto:alex@treptow.dev"
          className="font-semibold hover:font-bold"
        >
          alex@treptow.dev
        </Link>
        !
      </p>
    </div>
  );
}

export default AboutPage;

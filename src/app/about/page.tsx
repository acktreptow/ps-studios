import Link from "next/link";

function AboutPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        About PS5 Studios
      </h1>
      <p className="mb-5 text-lg">
        Welcome to PS5 Studios! This site is a fan-made project that aims to
        provide a comprehensive overview of all the first-party developers that
        are part of PlayStation Studios during the PS5 generation.
      </p>
      <p className="mb-8 text-lg">
        A lot of the video game industry has changed since the PS4 era, so I
        felt this site was necessary to keep track of PlayStation&#39;s
        first-party studios and their games. Most importantly to separate fact
        from fiction, and sprinkle in some of my own analysis and predictions
        too.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">Developers Section</span>
      </h2>
      <p className="mb-5 text-lg">
        This section of the site will provide a brief history of every
        PlayStation developers, including all the games they&#39;ve released
        during the PS5 era and whether or not they hold a unique position under
        the PlayStation Studios umbrella.
      </p>
      <p className="mb-8 text-lg">
        I&#39;ll also provide my own analysis and predictions for each studio,
        and what I think they&#39;ll be working on next.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games Section</span>
      </h2>
      <p className="mb-5 text-lg">
        This section will provide a list of every single released and upcoming
        PS5 game from PlayStation Studios (so no Nixxes PC ports). You&#39;ll be
        able to see the game&#39;s genre, developer, release date, and
        Metacritic score of the game.
      </p>
      <p className="mb-8 text-lg">
        You&#39;ll also be able to sort the games by Metacritic score or by
        release date so analyze the information from various different angles.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">Stats Section</span>
      </h2>
      <p className="mb-5 text-lg">
        My personal favorite section of the site! This where we get down to the
        nitty gritty stats of each first-party developer under PlayStation
        Studios. Some stats include which developer has released the most PS5
        games, which developer has been the most awarded, and which developer
        has the highest average Metacritic score.
      </p>
      <p className="mb-5 text-lg">
        I&#39;ll also include some analysis on these stats and what it could
        mean for the future of PlayStation Studios. For example, which 5
        developers are most and least likely to be shut down by Sony.
      </p>
      <p className="mb-8 text-lg">
        Have any suggestions for other stats you&#39;d like to see? Feel free to
        email me at{" "}
        <Link href="mailto:alex@treptow.dev" className="font-semibold">
          alex@treptow.dev
        </Link>
        !
      </p>
    </div>
  );
}

export default AboutPage;

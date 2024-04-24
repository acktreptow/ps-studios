import games from "../../data/games.json";
import Image from "next/image";
import tlouFactions from "../../../../public/images/tlou-factions.png";

function NaughtyDogPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Naughty Dog
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Naughty Dog are a Santa Monica, California-based developer that was
        founded all the way back in 1984 - before Nintendo had ever released a
        game!
      </p>
      <p className="mb-5 text-lg">
        They are also one of the earliest PlayStation Studios as they were
        founded in 2001. Due to the incredible success of their Crash Bandicoot
        trilogy that was essentially the Super Mario IP of the PS1.
      </p>
      <p className="mb-8 text-lg">
        After a decent PS2 generation with their Jak & Daxter series, Naughty
        Dog's prestige would shoot into the stratosphere during the PS3's
        generation. First with their Uncharted trilogy before basically becoming
        the premier PlayStation Studio with The Last of Us. This continued into
        the PS4 generation with sequels in both IP.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Technically, Naughty Dog are tied with Insomniac with putting the most
        PS5 titles out at 4. However unlike, Insomniac, all four games were
        either remasters or remakes of the most recent Uncharted games and both
        Last of Us titles.
      </p>
      <p className="mb-5 text-lg">
        Furthermore, the only future new title we knew anything about was The
        Last of Us Online, which was officially cancelled around 3.5 years into
        development. It's therefore hard to be particularly confident in the
        developer despite the pedigree they've shown over the past 15 years.
        While the remakes/remasters were nice, one could easily argue they were
        unnecessary due to the original titles still accessible on modern
        console and still play great.
      </p>
      <p className="mb-5 text-lg">
        I could easily see us getting one new game max from them this generation
        which would be a real shame and quite the drop-off. You could already
        name numerous other developers that are more important currently, which
        would have been unthinkable when The Last of Us released in 2013.
      </p>
      <Image
        src={tlouFactions}
        alt="The Last of Us Factions"
        width={500}
        height={500}
        id="tlou-factions"
        className="my-3 rounded-lg"
      />
      <label htmlFor="tlou-factions" className="block text-center">
        The only public asset of TLOU Online
      </label>
    </div>
  );
}

export default NaughtyDogPage;

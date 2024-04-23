import games from "../../data/games.json";
import Image from "next/image";
import concord from "../../../../public/images/concord.png";

function FirewalkStudiosPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Firewalk Studios
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Based in Washington, Firewalk Studios was founded in 2018 by individuals
        with significant leadership experience in popular multiplayer shooter IP
        like Halo and Destiny.
      </p>
      <p className="mb-8 text-lg">
        With this specialty and Sony&#39;s increased focus to expand their
        multiplayer portfolio this generation, it&#39;s no surprise that they
        officially joined PlayStation Studios in 2023 and unveiled its debut
        project: Concord. A live-service PVP shooter with an 80&#39;s sci-fi
        aesthetic that will launch on PS5 and PC in 2024.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Everything we know about Concord is written above, so suffice to say we
        don&#39;t have a lot to go off. Nonetheless, the pedigree of the
        developers before the creation of Firewalk is enough for you to be
        excited about Concord. As the game is still scheduled for a 2024
        release, we should hopefully see something more concrete soon.
      </p>
      <Image
        src={concord}
        alt="Concord key art"
        width={500}
        height={500}
        id="concord"
        className="my-3 rounded-lg"
      />
      <label htmlFor="concord" className="block text-center">
        Concord primary key art
      </label>
    </div>
  );
}

export default FirewalkStudiosPage;

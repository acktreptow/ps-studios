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
        Firewalk was founded in Washington, in 2018. Its founders are
        experienced veterans of popular multiplayer shooters, having worked on
        Halo and Destiny.
      </p>
      <p className="mb-5 text-lg">
        With this expertise and Sony&#39;s increased focus on live-service
        multiplayer games for PS5, it&#39;s no surprise they acquired Firewalk
        in 2023.
      </p>
      <p className="mb-8 text-lg">
        Firewalk then announced their first game: Concord. A live-service PVP
        shooter with an 80&#39;s sci-fi aesthetic. It launches on PS5 and PC in
        2024.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Everything we know about Concord is written above, so there&#39;s not a
        lot to go off. However, the pedigree of Firewalk&#39;s founders instills
        confidence.
      </p>
      <p className="mb-5 text-lg">
        They know how to make a good shooter, so I&#39;m cautiously optimistic
        until we see something that proves otherwise.
      </p>
      <p className="mb-5 text-lg">
        Concord has recently been reconfirmed for a 2024 release, so we{" "}
        <span className="italic">should</span>{" "}
        see something substantial soon.
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

import games from "../../data/games.json";
import Image from "next/image";
import gowRagnarok from "../../../../public/images/gow-ragnarok.png";

function SantaMonicaStudioPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Santa Monica Studio
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Santa Monica Studio is an LA-based developer that was founded in 1999.
        Outside of its first game, 2001's Kinetica, the studio has exclusively
        developed games for its hugely successful God of War series.
      </p>
      <p className="mb-8 text-lg">
        Their most recent game was 2022's God of War Ragnarok - a cross-gen
        title and the only game they have released on the PS5 so far. Like the
        2018 requel (thanks Scream 5 for this term), it was a big critical and
        commercial success.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        As of right now, we don't know what Santa Monica's next game will be
        aside from the fact that it will third-person. There's rumours that
        predict a new IP, a sequel to Ragnarok, and a smaller-scope Gof of War
        game in the vein of Spider-Man Miles-Morales.
      </p>
      <p className="mb-5 text-lg">
        Regardless of what it is, there's no reason to think it won't be a great
        game based off their last 2 projects. The new God of Wars were so
        critically acclaimed that many believe they helped usurp Naughty Dog as
        Sony's premier developer. Hopefully we hear something more concrete too,
        although Ragnarok only came out 1.5 years ago. There's A LOT of Sony
        developers that need to talk first as their going on 4-5 without a game.
      </p>
      <Image
        src={gowRagnarok}
        alt="God of War Ragnarok awards won"
        width={500}
        height={500}
        id="gow-ragnarok"
        className="my-3 rounded-lg"
      />
      <label htmlFor="gow-ragnarok" className="block text-center mb-8">
        The 6 awards God of War Ragnarok won at The Game Awards 2022
      </label>
    </div>
  );
}

export default SantaMonicaStudioPage;

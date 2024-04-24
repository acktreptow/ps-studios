import games from "../../data/games.json";
import Image from "next/image";
import gotDC from "../../../../public/images/got-dc.png";

function SuckerPunchProductionsPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Sucker Punch Productions
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Sucker Punch Productions are a Washington-based developer that was
        founded in 1997. This was to initially work on an N64 called Rocket:
        Robot on Wheels.
      </p>
      <p className="mb-5 text-lg">
        They then started having their games funded by Sony, where they made the
        Sly trilogy for the PS2 before switching to inFamous with the PS3
        generation. It was during this time that they were purchased by Sony in
        2011.
      </p>
      <p className="mb-8 text-lg">
        Sucker Punch have since moved to Ghost of Tsushima, which initially
        released for the PS4. However, a Director's Cut that featured a mini
        campaign was released on the PS5 in August 2021. This is currently their
        only PS5 game.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        It's been nearly 4 year since Ghost of Tsushima was released to
        widespread critical and commercial acclaim that catapulted the studio to
        a higher tier in the industry. All rumours suggest that their next game
        will also be direct sequel.
      </p>
      <p className="mb-5 text-lg">
        Considering these factors, ideally, the game should be announced very
        soon. And rest assured, it will be yet another excellent game based off
        Sucker Punch's track record.
      </p>
      <Image
        src={gotDC}
        alt="Ghost of Tsushima Director's Cut main menu screen"
        width={500}
        height={500}
        id="got-dc"
        className="my-3 rounded-lg"
      />
      <label htmlFor="got-dc" className="block text-center">
        GoT: Director&#39;s Cut main menu screen
      </label>
    </div>
  );
}

export default SuckerPunchProductionsPage;

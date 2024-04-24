import games from "../../data/games.json";
import Image from "next/image";
import ds2OTB from "../../../../public/images/ds2.png";

function Xdevpage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        XDev
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Formed in 2000, XDev have a very unique role amongst PlayStation
        developers. This is because they don't develop games themselves, but
        rather they collaborate with external developers to bring their games to
        PlayStation platforms.
      </p>
      <p className="mb-5 text-lg">
        This type of development used to be called second-party. But both Xbox
        and PlayStation now see them as first-party as they're still funcing the
        games, so we will too now.
      </p>
      <p className="mb-8 text-lg">
        Due to working with so many different developers, XDev can produce an
        eccelectic slection of games. On the PS5 alone, they've created a car
        combat game called Destruction All Stars, a platformer with Sackboy's
        Big Advanture, a multiplayer live-service game with Helldivers 2 a VR
        FPS with Firewall Ultra and a soulsborne game with Rise of the Ronin.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        XDev currently have 3 games publicly in development. Stellar Blade,
        Until Dawn Remake and Death Stranding 2. Even though their games have
        been hit or miss this generation, as these are sequels and remakes, it
        should be far more likely that they hit.
      </p>
      <Image
        src={ds2OTB}
        alt="Fairgames CGI trailer thumbnail"
        width={500}
        height={500}
        id="fairgames"
        className="my-3 rounded-lg"
      />
      <label htmlFor="d2s-otb" className="block text-center">
        XDEV&#39;s upcoming Death Stranding 2
      </label>
    </div>
  );
}

export default Xdevpage;

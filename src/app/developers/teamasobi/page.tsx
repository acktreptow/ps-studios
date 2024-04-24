import games from "../../data/games.json";
import Image from "next/image";
import astroBot from "../../../../public/images/astro-bot.png";

function TeamAsobiPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Team Asobi
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Team Asobi is a Tokyo-based developer that technically, was formed in
        2021. They were originally formed in 2012 as part of Japan Studio, but
        became independent once Japan Studio was shut down in 2020.
      </p>
      <p className="mb-5 text-lg">
        The developer are primarily known for the smaller-scoped games that
        focus on new PlayStation hardware. This was seen with The PlayRoom to
        show off the DualShock 4 and Astro Bot Rescue Mission to show off PSVR.
      </p>
      <p className="mb-8 text-lg">
        Their most recent game is Astro's Playroom. A free PS5 launch title that
        comes pre-installed. Its platforming was developer in a way to show off
        the consoles new features like haptic feedback.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Despite their last game releasing over 3 years ago, with PSVR2 releasing
        during that time frame, we still haven't officially heard anything about
        their next game.
      </p>
      <p className="mb-5 text-lg">
        However, there are rumors that there next game will have a short
        marketing cycle and will release towards the end of 2024. It will also
        be slightly larger in scale, and playable on both the TV screen and
        through PSVR2, taking advantage of both hardware.
      </p>
      <p className="mb-5 text-lg">
        Astro's Playroom was an incredible game that really showed off next-gen
        hardware in a tight package. After all, it was the reason they survived
        the closure of Japan Studio. With their next game also having double the
        development time as their used to, it should be a great game that
        hopefully showcases PSVR2 as the headset needs a win. Hopefully it is
        true that it comes out this year too.
      </p>
      <Image
        src={astroBot}
        alt="Team Asobi with their mascot Astro Bot"
        width={500}
        height={500}
        id="astro-bot"
        className="my-3 rounded-lg"
      />
      <label htmlFor="astro-bot" className="block text-center">
        Team Asobi with mascot Astro Bot
      </label>
    </div>
  );
}

export default TeamAsobiPage;

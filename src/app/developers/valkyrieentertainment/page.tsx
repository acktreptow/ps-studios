import { Metadata } from "next";
import Image from "next/image";
import gunsUpGameplay from "../../../../public/images/guns-up.png";

export const metadata: Metadata = {
  title: "Valkyrie Entertainment",
  description:
    "The history and future of Valkyrie Entertainment, a first-party developer for PlayStation Studios.",
};

function ValkyrieEntertainmentPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Valkyrie Entertainment
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Valkyrie Entertainment are a Seattle-based developer who were founded in
        2002 and acquired by Sony in 2021.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Never heard of Valkyrie or their games? Makes sense. That&#39;s because
        Valkyrie only act as a support studio for PlayStation games developed at
        other first-party studios.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        In fact despite being founded over 20 years ago, Valkyrie has only been
        the main developer on 2015&#39;s digital only &#39;Guns Up!&#39; for PSN
        and mobile, which came and went with no fanfare.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        You&#39;re far more likely to have seen their support work on titles
        from other PlayStation developers like God of War: Ragnarök from Sony
        Santa Monica.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            This one&#39;s easy to forecast. Due to their support status,
            Valkyrie haven&#39;t released a game for the PS5.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Based off the critical and commercial failure of Guns Up!, it&#39;s
            also unlikely they&#39;ll get a chance to. Especially if their
            unsecure, bare-bones website is anything to go by.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            If you&#39;re looking for your next great first-party PS5 game to
            play, you can safely ignore Valkyrie Entertainment.
          </p>
        </div>
        <div>
          <Image
            src={gunsUpGameplay}
            alt="Guns Up! gameplay"
            width={500}
            height={500}
            id="guns-up"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="guns-up" className="block text-center">
            Guns Up! gameplay: 54 on Metacritic
          </label>
        </div>
      </div>
    </div>
  );
}

export default ValkyrieEntertainmentPage;

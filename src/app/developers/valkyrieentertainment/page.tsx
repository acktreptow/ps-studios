import Image from "next/image";
import gunsUpGameplay from "../../../../public/images/guns-up.png";

function ValkyrieEntertainmentPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Valkyrie Entertainment
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Valkyrie Entertainment are a Seattle-based developer who were founded in
        2002 and officially purchased by Sony in 2021. Never heard of Valkyrie
        or their games? Makes sense. That&#39;s because Valkyrie only act as a
        support studio for PlayStation games developed at other first-party
        studios.
      </p>
      <p className="mb-8 text-lg">
        In fact despite being founded over 20 years ago, Valkyrie have only been
        the main developer for one game. 2015&#39;s digital only &#39;Guns
        Up!&#39; for PSN and mobile devices, which came and went with no
        fanfare. You&#39;re far more likely to have seen their support work on
        titles from other PlayStation Studios like God of War: Ragnarok from
        Sony Santa Monica.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        This one&#39;s easy to forecast. Due to their support status, Valkyrie
        haven&#39;t released any games for the PS5. And based off the critical
        and commercial failure of Guns Up, it&#39;s unlikely they&#39;ll get a
        chance to any time soon.
      </p>
      <p className="mb-5 text-lg">
        Especially if their unsecure, bare-bones website is anything to go by.
        If you&#39;re looking for your next PS5 first-party game, you can safely
        ignore Valkyrie Entertainment.
      </p>
      <Image
        src={gunsUpGameplay}
        alt="Guns Up! gameplay"
        width={500}
        height={500}
        id="guns-up"
        className="my-3 rounded-lg"
      />
      <label htmlFor="guns-up" className="block text-center">
        Guns Up! gameplay: scoring 54 on Metacritic
      </label>
    </div>
  );
}

export default ValkyrieEntertainmentPage;

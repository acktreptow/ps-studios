import games from "../../data/games.json";
import Image from "next/image";
import jadeRaymond from "../../../../public/images/jade-raymond.png";
import fairGames from "../../../../public/images/fairgames.png";

function HavenStudiosPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Haven Studios
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        This Montreal-based developer was founded in 2021 by Jade Raymond - one
        of the creators of Assassin&#39;s Creed. Raymond was at Google, but left
        once they stopped supporting their cloud-based console &#39;Stadia&#39;.
      </p>
      <p className="mb-5 text-lg">
        Raymond took this cloud infrastructure knowledge to Haven, which caught
        the attention of Sony. They immediately started funding their first game
        and acquired Haven a year later.
      </p>
      <p className="mb-5 text-lg">
        This game turned out to be FairGame$. A live service competitive heist
        shooter that will launch on PS5 and PC. It currently has no release
        date.
      </p>
      <Image
        src={jadeRaymond}
        alt="Picture of Jade Raymond"
        width={500}
        height={500}
        id="jade-raymond"
        className="my-3 rounded-lg"
      />
      <label htmlFor="jade-raymond" className="block text-center mb-8">
        Haven Studios founder Jade Raymond
      </label>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        We haven&#39;t seen Fairgame$ since the first trailer. Haven is also a
        new studio, and the first to emphasize the cloud. It&#39;s therefore
        hard to predict how Fairgame$ will do, but I&#39;m optimistic.
      </p>
      <p className="mb-5 text-lg">
        Mark Cerny, architect of the PS5, has taken an interest in Haven and is
        assisting with Fairgame$ and general R&D. Between his interest and Sony
        investing so quickly, I&#39;m confident.
      </p>
      <Image
        src={fairGames}
        alt="Fairgames CGI trailer thumbnail"
        width={500}
        height={500}
        id="fairgames"
        className="my-3 rounded-lg"
      />
      <label htmlFor="fairgames" className="block text-center">
        The CGI trailer is the only thing we&#39;ve seen
      </label>
    </div>
  );
}

export default HavenStudiosPage;

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
        This Montreal-based developer was founded in 2021 by popular video game
        producer Jade Raymond. Who had recently quite Google after the
        corporation had announced they would no longer be supporting Google
        Stadia with internally developed games.
      </p>
      <p className="mb-5 text-lg">
        Raymond would however take this knowledge of cloud infrastructure to
        Haven. Something Sony were particularly interested in, which is why they
        bought them in early 2023 after already partnering with them on a
        live-service title for a year.
      </p>
      <p className="mb-5 text-lg">
        We found out what this title was in May 2023 - FairGame$ a live service
        competitive heist shooter that will launch on PS5 and PC simultaneously.
        It currently does not have a release date.
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
        Despite the Haven being a young developer who haven&#39;t shown much,
        you should be relatively excited. We know Mark Cerny is impressed.
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

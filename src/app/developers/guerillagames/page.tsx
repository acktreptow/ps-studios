import games from "../../data/games.json";
import Image from "next/image";
import burningShores from "../../../../public/images/burning-shores.png";

function GuerillaGamesPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Guerilla Games
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2000, this Amsterdam-based developer is primarily known for
        its FPS series Killzone and third-person adventure series Horizon.
      </p>
      <p className="mb-5 text-lg">They were purchased by Sony in 2005.</p>
      <p className="mb-5 text-lg">
        So far, the only game Guerilla have released for the PS5 was the
        cross-gen title 'Horizon Forbidden West' that released in early 2022.
        Its DLC, which released in 2023, was however a PS5 exclusive.
      </p>
      <p className="mb-8 text-lg">
        Since the Burning Shores released, we haven't had any updates on their
        next game.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Despite no information to go off of, due to the popularity of the
        Horizon series and how it elevated the developer to a new tier above
        their Killzone routes, their next game is almost certainly a third
        Horizon game.
      </p>
      <p className="mb-5 text-lg">
        Fortunately this time, you don't have to put too much stock into my
        analysis. This game will almost certainly be very similar to 2022's
        Forbidden West. So try the game out and see if you like it!
      </p>
      <Image
        src={burningShores}
        alt="Horizon Burning Shores key art"
        width={500}
        height={500}
        id="burning-shores"
        className="my-3 rounded-lg"
      />
      <label htmlFor="burning-shores" className="block text-center">
        Key art for Horizon FW&#39;s DLC: Burning Shores
      </label>
    </div>
  );
}

export default GuerillaGamesPage;

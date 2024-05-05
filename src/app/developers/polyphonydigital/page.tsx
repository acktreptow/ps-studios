import games from "../../data/games.json";
import Image from "next/image";
import kazunoriYamauchi from "../../../../public/images/kazunori-yamauchi.png";
import gt7PSVR2 from "../../../../public/images/gt7-psvr2.png";

function PolyphonyDigitalPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Polyphony Digital
      </h1>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">History</span>
          </h2>
          <p className="mb-5 text-lg">
            Founded internally by Sony auteur Kazunori Yamauchi in 1998, this
            Tokyo-based developer are renowned for their racing series Gran
            Turismo. It&#39;s also PlayStation&#39;s highest-selling franchise.
          </p>
          <p className="mb-5 text-lg">
            At least one GT has shipped on every PlayStation console, so
            it&#39;s no surprise there&#39;s already one on the PS5. 2022&#39;s
            cross-gen Gran Turismo 7.
          </p>
          <p className="mb-8 text-lg">
            Despite a few (mostly self-inflicted) issues at launch, GT7 was
            critically and commercially acclaimed. It&#39;s also seen as the
            premier experience on PSVR2.
          </p>
        </div>
        <div>
          <Image
            src={kazunoriYamauchi}
            alt="Polyphony Digital founder Kazunori Yamauchi"
            width={500}
            height={500}
            id="kazunori-yamauchi"
            className="my-3 rounded-lg md:mx-auto md:max-w-xs md:ml-5"
          />
          <label htmlFor="kazunori-yamauchi" className="block text-center mb-8">
            Kazunori Yamauchi
          </label>
        </div>
      </div>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis and Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            It takes around four years for Polyphony to release a new GT, so I
            imagine we&#39;ll see GT8 at the end of the PS5 gen.
          </p>
          <p className="mb-5 text-lg">
            If you&#39;re a driving game fan, I would be even more excited this
            time too. GT8 will be PS5-only and should take an even further
            graphical leap with the PS5 Pro.
          </p>
          <p className="mb-5 text-lg">
            They&#39;ve also learned from GT7&#39;s launch issues which will
            make the game loop better, and the PSVR 2 mode could end up as the
            hardware&#39;s best experience.
          </p>
          <p className="mb-8 text-lg">
            If you&#39;re not a fan though, I would just move on. There&#39;s
            zero confirmation Polyphony&#39;s next game is GT8, but it&#39;s a
            safe bet considering the track record.
          </p>
        </div>
        <div>
          <Image
            src={gt7PSVR2}
            alt="GT7 PSVR2"
            width={500}
            height={500}
            id="gt7-psvr2"
            className="my-3 rounded-lg md:mx-auto md:max-w-xs lg:max-w-sm md:ml-5"
          />
          <label htmlFor="gt7-psvr2" className="block text-center mb-8">
            GT7 in VR via PSVR2
          </label>
        </div>
      </div>
      <h2 className="mb-5 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">PS5 Games</span>
      </h2>
      <div className="mb-5 grid gap-5 sm:grid-cols-2">
        {games
          .filter((game) => game.developer === "Polyphony Digital")
          .map((game) => (
            <div
              key={game.id}
              className="border-2 border-gray-200 rounded-lg shadow-md p-3"
            >
              <h3 className="text-xl font-bold text-center mb-1">
                {game.name}
              </h3>
              <p className="text-lg">Genre: {game.genre}</p>
              <p className="text-lg">Release Date: {game.releaseDate}</p>
              <p className="text-lg">
                Days Between Releases: {game.daysBetweenReleases}
              </p>
              <p className="text-lg">Metacritic Score: {game.metacritic}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PolyphonyDigitalPage;

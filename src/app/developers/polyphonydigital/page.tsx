import { Metadata } from "next";
import games from "../../data/games.json";
import Image from "next/image";
import kazunoriYamauchi from "../../../../public/images/kazunori-yamauchi.png";
import gt7PSVR2 from "../../../../public/images/gt7-psvr2.png";

export const metadata: Metadata = {
  title: "Polyphony Digital",
  description:
    "The history and future of Polyphony Digital, a first-party developer for PlayStation Studios.",
};

function PolyphonyDigitalPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Polyphony Digital
      </h1>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">History</span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Founded internally by Sony auteur Kazunori Yamauchi in 1998, this
            Tokyo-based developer are renowned for their racing series Gran
            Turismo. It&#39;s also PlayStation&#39;s highest-selling franchise.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            At least one GT has shipped on every PlayStation console, so
            it&#39;s no surprise there&#39;s already one on the PS5. 2022&#39;s
            cross-gen Gran Turismo 7.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
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
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-sm"
          />
          <label htmlFor="kazunori-yamauchi" className="block text-center mb-8">
            PD Founder Kazunori Yamauchi
          </label>
        </div>
      </div>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            It takes around four years for Polyphony to release a new GT, so I
            imagine we&#39;ll see GT8 at the end of the PS5 gen.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            If you&#39;re a driving game fan, I would be even more excited this
            time too. GT8 will be PS5 only and should take an even further
            graphical leap with the PS5 Pro.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            They&#39;ve also learned from GT7&#39;s launch issues which will
            improve the gameplay loop, and the PSVR 2 mode could end up as the
            hardware&#39;s best experience.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            If you&#39;re not a fan though, I would just move on. There&#39;s
            zero confirmation Polyphony&#39;s next game is GT8, but it&#39;s a
            safe bet considering their track record.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={gt7PSVR2}
            alt="GT7 PSVR2"
            width={500}
            height={500}
            id="gt7-psvr2"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="gt7-psvr2" className="block text-center mb-8">
            GT7&#39;s VR Mode Via PSVR2
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
              <h3 className="text-xl font-bold text-center mb-1 lg:text-2xl lg:mb-3">
                {game.name}
              </h3>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Genre: {game.genre}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Release Date: {game.releaseDate}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Days Since Their Last Game: {game.daysBetweenReleases}
              </p>
              <p className="text-lg lg:text-xl lg:tracking-wide">
                Metacritic Score: {game.metacritic}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PolyphonyDigitalPage;

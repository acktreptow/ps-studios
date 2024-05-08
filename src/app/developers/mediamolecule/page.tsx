import Image from "next/image";
import sackboy from "../../../../public/images/sackboy.png";

function MediaMoleculePage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Media Molecule
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2006, this Surrey-based developer is primarily known for the
        critically acclaimed LittleBigPlanet series that started on the PS3 in
        2008.
      </p>
      <p className="mb-5 text-lg">
        Media Molecule&#39;s last title was 2020&#39;s Dreams for the PS4, and
        therefore has yet to release a PS5 title.
      </p>
      <p className="mb-8 text-lg">
        In regards to their next game, we don&#39;t even have a name, let alone
        gameplay, despite Dreams releasing 4 years ago.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            Whatever Media Molecule&#39;s next game is, I wouldn&#39;t expect
            much as they&#39;re far removed from their heyday during the PS3
            generation.
          </p>
          <p className="mb-5 text-lg">
            Dreams wasn&#39;t close to a commercial success, the vast majority
            of Media Molecule&#39;s founders have left, and it&#39;s been
            reported that they were extremely close to being shuttered in late
            2023, instead of London Studio.
          </p>
          <p className="mb-5 text-lg">
            With rising development costs, smaller profit margins, and Media
            Molecule&#39;s games not being commercially viable to a mainstream
            audience, it&#39;s far more likely the studio will close before it
            releases another game.
          </p>
          <p className="mb-8 text-lg">
            For what it&#39;s worth, I hope I&#39;m wrong. Even if they
            don&#39;t sell well, Sony needs the types of games Media Molecule
            makes to have a diverse portfolio.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={sackboy}
            alt="Sackboy from LittleBigPlanet"
            width={500}
            height={500}
            id="sackboy"
            className="my-3 rounded-lg md:max-w-xs lg:max-w-sm md:ml-5"
          />
          <label htmlFor="sackboy" className="block text-center">
            LittleBigPlanet&#39;s mascot - Sackboy
          </label>
        </div>
      </div>
    </div>
  );
}

export default MediaMoleculePage;

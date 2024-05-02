import Image from "next/image";
import thePersistence from "../../../../public/images/the-persistence.png";

function FabrikGamesPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Fabrik Games
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2014, this Manchester-based developer has released games such
        as 2016&#39;s &#39;Filthy Lucre&#39; for the PS4 and &#39;The Lost
        Bear&#39; for PSVR in 2017.
      </p>
      <p className="mb-5 text-lg">
        You almost certainly haven&#39;t heard of these niche games and
        that&#39;s no problem. You won&#39;t need to because Fabrik was acquired
        by Firesprite in 2021 to bolster the latter&#39;s manpower. As
        Firesprite were purchased by Sony only a few weeks prior, Fabrik became
        a de-facto first-party studio.
      </p>
      <p className="mb-8 text-lg">
        This indirect way Fabrik joined PS Studios is very unique, but not
        particularly surprising. Both Firesprite and Fabrik were founded by the
        same individual. Fabrik had also already acted as support for Firesprite
        during the development of their VR title &#39;The Persistence&#39;, in
        2017.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis and Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg">
            As Fabrik are only a support studio to Firesprite, they&#39;ve not
            released a PS5 game. Nor should you expect them to barring
            unforeseen circumstances.
          </p>
          <p className="mb-8 text-lg">
            We&#39;ll indirectly here from them whenever Firesprite announce
            their next game, which should (hopefully) be soon.
          </p>
        </div>
        <div>
          <Image
            src={thePersistence}
            alt="The Persistence"
            width={500}
            height={500}
            id="the-persistence"
            className="my-3 rounded-lg md:mx-auto md:max-w-xs lg:max-w-sm md:ml-5"
          />
          <label htmlFor="the-persistence" className="block text-center">
            The Persistence cover art
          </label>
        </div>
      </div>
    </div>
  );
}

export default FabrikGamesPage;

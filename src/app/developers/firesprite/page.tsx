import games from "../../data/games.json";
import Image from "next/image";
import horizonCoTM from "../../../../public/images/horizon-call-of-the-mountain.png";

function FirespritePage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Firesprite
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 2012, Firesprite is a Liverpool-based developer that was
        formed by former members of first-party developer Sony Liverpool, which
        was closed by Sony just weeks prior.
      </p>
      <p className="mb-5 text-lg">
        Firesprite first major game was 2018&#39;s The Persistence, which also
        came to competing platforms like Xbox as it wouldn&#39;t be until 2021
        when Sony acquired the studio.
      </p>
      <p className="mb-8 text-lg">
        They&#39;ve released two games on the PS5 so far. An enhanced port of
        The Persistence as well as the flagship PSVR 2 launch title Horizon:
        Call of the Mountain. Neither game was particularly well received.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        We currently don&#39;t have any information on Firesprite&#39;s upcoming
        projects, as nothing has been officially announced since Horizon CoTM
        shipped 14 months ago.
      </p>
      <p className="mb-5 text-lg">
        Unofficially, things look VERY dire for the studio post-acquitsion. It
        was reported that crunch was implemented just to finish Horizon, with
        staff leaving in droves months later once all rention bonuses were paid
        out. Including all but one of the studio&#39;s founders.
      </p>
      <p className="mb-5 text-lg">
        Then a year later, it was reported that further layoffs had taken place
        and Firesprite&#39;s previously unrevealed Twisted Metal live service
        game was also cancelled.
      </p>
      <p className="mb-5 text-lg">
        Considering all this, I just don&#39;t see anything good coming out of
        this studio any time soon. Even if early leaks of a potential horror
        game do sound promising in a vacuum.
      </p>
      <Image
        src={horizonCoTM}
        alt="Horizon Call of the MMountain gameplay screenshot"
        width={500}
        height={500}
        id="horizon-cotm"
        className="my-3 rounded-lg"
      />
      <label htmlFor="horizon-cotm" className="block text-center">
        Horizon CoTM&#39;s excellent graphics
      </label>
    </div>
  );
}

export default FirespritePage;

import games from "../../data/games.json";
import Image from "next/image";
import kazunoriYamauchi from "../../../../public/images/kazunori-yamauchi.png";
import gt7PSVR2 from "../../../../public/images/gt7-psvr2.png";

function PolyphonyDigitalPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        Polyphony Digital
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 1998, this Tokyo-based developer are known for the hit racing
        series Gran Turismo.
      </p>
      <p className="mb-5 text-lg">
        They've released one game for the PS5 so far. The cross-gen title "Gran
        Turismo 7" that came out in March 2022. Despite some issues at launch,
        some brought on by themselves, the game was critically acclaimed and
        sold very well. It's also widely seen as the premier experience on
        PSVR2.
      </p>
      <Image
        src={kazunoriYamauchi}
        alt="Polyphony Digital founder Kazunori Yamauchi"
        width={500}
        height={500}
        id="kazunori-yamauchi"
        className="my-3 rounded-lg"
      />
      <label htmlFor="kazunori-yamauchi" className="block text-center mb-8">
        Polyphony Digital founder Kazunori Yamauchi
      </label>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">
          My Analysis and Predictions
        </span>
      </h2>
      <p className="mb-5 text-lg">
        Considering it takes around 4 years for Polyphony to release a new Gran
        Turismo, I imagine we'll almost see a Gran Turismo 8 towards the end of
        the PS5 generation. This one will be PS5-only and should also take a
        huge graphics leap with the PS5 Pro already out by then.
      </p>
      <p className="mb-5 text-lg">
        If you're not a driving game fan, I would move on as I highly doubt
        we'll get something else from Polyphony any time soon. Their last non
        Gran Turismo was 2006's Tourist Trophy which was essentially Gran
        Turismo but motorbikes. We're a LONG way from a non-racing game from
        Polyphony with 1999's Omega Boost.
      </p>
      <Image
        src={gt7PSVR2}
        alt="GT7 PSVR2"
        width={500}
        height={500}
        id="gt7-psvr2"
        className="my-3 rounded-lg"
      />
      <label htmlFor="gt7-psvr2" className="block text-center">
        GT7 in VR via PSVR2
      </label>
    </div>
  );
}

export default PolyphonyDigitalPage;

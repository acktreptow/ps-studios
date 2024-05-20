import { Metadata } from "next";
import Image from "next/image";
import savageLogo from "../../../../public/images/dev-pages/savage-logo.png";

export const metadata: Metadata = {
  title: "Neon Koi",
  description:
    "The history and future of Neon Koi, a first-party developer for PlayStation Studios.",
};

function NeonKoiPage(): JSX.Element {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        Neon Koi
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
        Neon Koi is a German-Finnish developer that was founded in 2020 under
        the name &#39;Savage Game Studios&#39;. It was under this initial name
        when the developer was acquired by Sony in August, 2022.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
        When it comes to Neon Koi&#39;s PS5 output, they haven&#39;t released
        anything, nor should you expect them to. This is because Neon Koi are a
        founding member of PlayStation Studios&#39;s Mobile Division and were
        purchased to exclusively develop mobile games.
      </p>
      <div className="lg:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            Still interested in Neon Koi&#39;s mobile offerings? Well, I still
            wouldn&#39;t hold my breath. Despite forming over four years ago,
            they&#39;ve yet to even announce a game, let alone show gameplay or
            actually release something.
          </p>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wide">
            In fact, Neon Koi has primarily been in the news for negative
            headlines. Like when the head of PlayStation&#39;s Mobile Division
            and an SGS founder abruptly left PlayStation under suspicious
            circumstances, in quick succession.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wide">
            These headlines probably contributed to the rebranding to Neon Koi
            in November, 2023. Between that and the revamped website, hopefully
            it means that at the least, a game announcement is coming soon. We
            can then start determining if Neon Koi are worth keeping an eye on.
          </p>
        </div>
        <div className="md:flex md:flex-col md:items-center">
          <Image
            src={savageLogo}
            alt="Savage Game Studios Logo"
            width={500}
            height={500}
            id="savage-logo"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="savage-logo" className="block text-center">
            Neon Koi: Formerly Savage Game Studios
          </label>
        </div>
      </div>
    </div>
  );
}

export default NeonKoiPage;

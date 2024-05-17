import { Metadata } from "next";
import Image from "next/image";
import concreteGenie from "../../../../public/images/concrete-genie.png";

export const metadata: Metadata = {
  title: "San Mateo Studio",
  description:
    "The history and future of San Mateo Studio, a first-party developer for PlayStation Studios.",
};

function SanMateoStudioPage() {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed">
        San Mateo Studio
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wid">
        Founded in 1998, San Mateo Studio (formerly Foster City Studio) works
        out of... San Mateo, California.
      </p>
      <p className="mb-5 text-lg lg:text-xl lg:tracking-wid">
        Unlike the majority of PlayStation first-party developers, San Mateo are
        only a support studio.
      </p>
      <p className="mb-8 text-lg lg:text-xl lg:tracking-wid">
        They did spin off a small team in 2014 that was called Pixelopus, but
        Sony closed the studio down in June 2023. They ended up releasing 2
        games - both of which came out before the PS5.
      </p>
      <div className="md:flex items-center">
        <div>
          <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
            <span className="border-b-2 border-gray-300">
              My Analysis & Predictions
            </span>
          </h2>
          <p className="mb-5 text-lg lg:text-xl lg:tracking-wid">
            Due to their support status, San Mateo haven&#39;t released a PS5
            game where they were the main developer. This situation is also very
            unlikely to change if the shuttering of Pixelopus is any indication.
          </p>
          <p className="mb-8 text-lg lg:text-xl lg:tracking-wid">
            If you&#39;re looking for your next first-party PS5 game, you should
            probably look elsewhere.
          </p>
        </div>
        <div>
          <Image
            src={concreteGenie}
            alt="Concrete Genie"
            width={500}
            height={500}
            id="concrete-genie"
            className="my-3 rounded-lg md:ml-5 md:max-w-xs lg:max-w-md"
          />
          <label htmlFor="concrete-genie" className="block text-center">
            Pixelopus&#39;s final game: Concrete Genie
          </label>
        </div>
      </div>
    </div>
  );
}

export default SanMateoStudioPage;

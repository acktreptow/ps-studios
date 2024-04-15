"use client";

import { useState } from "react";
import Image from "next/image";
import bendLogo from "../../public/images/bend-studio.png";
import bluepointLogo from "../../public/images/bluepoint-games.png";
import bungieLogo from "../../public/images/bungie.png";

function Homepage() {
  const [selectedDeveloper, setSelectedDeveloper] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDeveloper) {
      window.location.href = `/developers/${selectedDeveloper}`;
    }
  };

  return (
    <main className="text-center py-6">
      <h1 className="text-2xl font-bold py-2">PlayStation Studios</h1>
      <p className="py-2">
        Everything you need to know about Sonys first-party content during the
        PS5 generation.
      </p>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedDeveloper}
          onChange={(e) => setSelectedDeveloper(e.target.value)}
        >
          <option value="">Select developer</option>
          <option value={"bendstudio"}>Bend Studio</option>
          <option value={"bluepointgames"}>Bluepoint Games</option>
          <option value={"bungie"}>Bungie</option>
          <option value={"fabrikgames"}>Fabrik Games</option>
          <option value={"firesprite"}>Firesprite</option>
          <option value={"firewalkstudios"}>Firewalk Studios</option>
          <option value={"guerillagames"}>Guerilla Games</option>
          <option value={"havenstudios"}>Haven Studios</option>
          <option value={"housemarque"}>Housemarque</option>
          <option value={"insomniacgames"}>Insomniac Games</option>
          <option value={"mediamolecule"}>Media Molecule</option>
          <option value={"naughtydog"}>Naughty Dog</option>
          <option value={"neonkoi"}>Neon Koi</option>
          <option value={"nixxessoftware"}>Nixxes Software</option>
          <option value={"polyphonydigital"}>Polyphony Digital</option>
          <option value={"sandiegostudio"}>San Diego Studio</option>
          <option value={"sanmateostudio"}>San Mateo Studio</option>
          <option value={"santamonicastudio"}>Santa Monica Studio</option>
          <option value={"suckerpunchproductions"}>
            Sucker Punch Productions
          </option>
          <option value={"teamasobi"}>Team Asobi</option>
          <option value={"valkyrieentertainment"}>
            Valkyrie Entertainment
          </option>
          <option value={"xdev"}>XDev</option>
        </select>
        <button type="submit" className="block m-auto">
          Go to developer
        </button>
      </form>
      <div className="grid grid-cols-3 mx-2 mt-10 mb-4">
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bluepointLogo}
          alt="Bluepoint games Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bungieLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bendLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
      </div>
    </main>
  );
}

export default Homepage;

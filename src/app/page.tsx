"use client";

import { useState } from "react";
import Image from "next/image";
import bendLogo from "../../public/images/bend-studio.png";
import bluepointLogo from "../../public/images/bluepoint-games.png";
import bungieLogo from "../../public/images/bungie.png";
import fabrikGamesLogo from "../../public/images/fabrik-games.png";
import firespriteLogo from "../../public/images/firesprite.png";
import firewalkLogo from "../../public/images/firewalk.png";
import guerillaLogo from "../../public/images/guerilla-games.png";
import havenStudiosLogo from "../../public/images/haven-studios.png";
import housemarqueLogo from "../../public/images/housemarque.png";
import insomniacLogo from "../../public/images/insomniac-games.png";
import mediaMoleculeLogo from "../../public/images/media-molecule.png";
import naughtyDogLogo from "../../public/images/naughty-dog.png";
import neonKoiLogo from "../../public/images/neon-koi.png";
import nixxesLogo from "../../public/images/nixxes-software.png";
import polyphonyLogo from "../../public/images/polyphony-digital.png";
import sanDiegoStudioLogo from "../../public/images/san-diego-studio.png";
import sanMateoStudioLogo from "../../public/images/san-mateo-studio.png";
import santaMonicaStudioLogo from "../../public/images/santa-monica-studio.png";
import suckerPunchLogo from "../../public/images/sucker-punch-productions.png";
import teamAsobiLogo from "../../public/images/team-asobi.png";
import valkyrieEntertainmentLogo from "../../public/images/valkyrie-entertainment.png";
import playstationLogo from "../../public/images/playstation-logo.png";
import xdevLogo from "../../public/images/xdev.png";
import ps5Logo from "../../public/images/ps5-logo.png";
import developers from "../app/data/developers.json";

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
          {developers.map((developer) => (
            <option key={developer.id} value={developer.urlPath}>
              {developer.name}
            </option>
          ))}
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
          alt="Bluepoint Games Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={bungieLogo}
          alt="Bungie Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={fabrikGamesLogo}
          alt="Fabrik Games Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={firespriteLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={firewalkLogo}
          alt="Bend Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={guerillaLogo}
          alt="Guerilla Games Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={havenStudiosLogo}
          alt="Haven Studios Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={housemarqueLogo}
          alt="Housemarque Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={insomniacLogo}
          alt="Insomniac Games Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={mediaMoleculeLogo}
          alt="Media Molecule Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={naughtyDogLogo}
          alt="Naughty Dog Logo"
          className="transform scale-90 rounded-lg"
        />

        <Image
          src={neonKoiLogo}
          alt="Neon Koi Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={nixxesLogo}
          alt="Nixxes Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={polyphonyLogo}
          alt="Polyphony Digital Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={sanDiegoStudioLogo}
          alt="San Diego Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={sanMateoStudioLogo}
          alt="San Mateo Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={santaMonicaStudioLogo}
          alt="Santa Monica Studio Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={suckerPunchLogo}
          alt="Sucker Punch Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={teamAsobiLogo}
          alt="Team Asobi Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={valkyrieEntertainmentLogo}
          alt="Valkyrie Entertainment Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={playstationLogo}
          alt="PlayStation Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={xdevLogo}
          alt="XDEV Logo"
          className="transform scale-90 rounded-lg"
        />
        <Image
          src={ps5Logo}
          alt="PS5 Logo"
          className="transform scale-90 rounded-lg"
        />
      </div>
    </main>
  );
}

export default Homepage;

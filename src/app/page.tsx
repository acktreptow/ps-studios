"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bendLogo from "../../public/images/bend-logo.png";
import bluepointLogo from "../../public/images/bluepoint-logo.png";
import bungieLogo from "../../public/images/bungie-logo.png";
import fabrikGamesLogo from "../../public/images/fabrik-logo.png";
import firespriteLogo from "../../public/images/firesprite-logo.png";
import firewalkLogo from "../../public/images/firewalk-logo.png";
import guerillaLogo from "../../public/images/guerilla-logo.png";
import havenStudiosLogo from "../../public/images/haven-logo.png";
import housemarqueLogo from "../../public/images/housemarque-logo.png";
import insomniacLogo from "../../public/images/insomniac-logo.png";
import mediaMoleculeLogo from "../../public/images/media-molecule-logo.png";
import naughtyDogLogo from "../../public/images/naughty-dog-logo.png";
import neonKoiLogo from "../../public/images/neon-koi-logo.png";
import nixxesLogo from "../../public/images/nixxes-logo.png";
import polyphonyLogo from "../../public/images/polyphony-logo.png";
import sanDiegoStudioLogo from "../../public/images/san-diego-logo.png";
import sanMateoStudioLogo from "../../public/images/san-mateo-logo.png";
import santaMonicaStudioLogo from "../../public/images/santa-monica-logo.png";
import suckerPunchLogo from "../../public/images/sucker-punch-logo.png";
import teamAsobiLogo from "../../public/images/asobi-logo.png";
import valkyrieEntertainmentLogo from "../../public/images/valkyrie-logo.png";
import playstationLogo from "../../public/images/playstation-logo.png";
import xdevLogo from "../../public/images/xdev-logo.png";
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
        {developers.filter(developer => developer.name === "Bend Studio")
        .map(developer => (
          <Link key={developer.id} href={`/developers/${developer.urlPath}`}>
            <Image
              src={developer.img}
              width={500}
              height={500}
              alt="Bend Studio Logo"
              className="transform scale-90 rounded-lg"
            />
          </Link>
        ))}
        {/* <Link href="/developers/bendstudio">
          <Image
            src={bendLogo}
            alt="Bend Studio Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/bluepointgames">
          <Image
            src={bluepointLogo}
            alt="Bluepoint Games Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/bungie">
          <Image
            src={bungieLogo}
            alt="Bungie Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/fabrikgames">
          <Image
            src={fabrikGamesLogo}
            alt="Fabrik Games Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/firesprite">
          <Image
            src={firespriteLogo}
            alt="Firesprite Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/firewalkstudios">
          <Image
            src={firewalkLogo}
            alt="Firewalk Studios Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/guerillagames">
          <Image
            src={guerillaLogo}
            alt="Guerilla Games Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/havenstudios">
          <Image
            src={havenStudiosLogo}
            alt="Haven Studios Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/housemarque">
          <Image
            src={housemarqueLogo}
            alt="Housemarque Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/insomniacgames">
          <Image
            src={insomniacLogo}
            alt="Insomniac Games Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/mediamolecule">
          <Image
            src={mediaMoleculeLogo}
            alt="Media Molecule Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/naughtydog">
          <Image
            src={naughtyDogLogo}
            alt="Naughty Dog Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/neonkoi">
          <Image
            src={neonKoiLogo}
            alt="Neon Koi Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/nixxessoftware">
          <Image
            src={nixxesLogo}
            alt="Nixxes Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/polyphonydigital">
          <Image
            src={polyphonyLogo}
            alt="Polyphony Digital Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/sandiegostudio">
          <Image
            src={sanDiegoStudioLogo}
            alt="San Diego Studio Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/sanmateostudio">
          <Image
            src={sanMateoStudioLogo}
            alt="San Mateo Studio Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/santamonicastudio">
          <Image
            src={santaMonicaStudioLogo}
            alt="Santa Monica Studio Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/suckerpunchproductions">
          <Image
            src={suckerPunchLogo}
            alt="Sucker Punch Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/teamasobi">
          <Image
            src={teamAsobiLogo}
            alt="Team Asobi Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/valkyrieentertainment">
          <Image
            src={valkyrieEntertainmentLogo}
            alt="Valkyrie Entertainment Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="#">
          <Image
            src={playstationLogo}
            alt="PlayStation Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/developers/xdev">
          <Image
            src={xdevLogo}
            alt="XDEV Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link>
        <Link href="/about">
          <Image
            src={ps5Logo}
            alt="PS5 Logo"
            className="transform scale-90 rounded-lg"
          />
        </Link> */}
      </div>
    </main>
  );
}

export default Homepage;

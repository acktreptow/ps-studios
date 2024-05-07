import Link from "next/link";

function DevelopersPage() {
  return (
    <div className="text-center py-6 flex-grow container mx-auto md:py-10">
      <h1 className="text-3xl font-bold py-2 mb-3 md:text-5xl md:mb-5 lg:text-6xl">
        PlayStation Developers
      </h1>
      <ul className="text-xl leading-8 md:text-2xl md:leading-10 ">
        <Link href="/developers/bendstudio">
          <li>Bend Studio</li>
        </Link>
        <Link href="/developers/bluepointgames">
          <li>Bluepoint Games</li>
        </Link>
        <Link href="/developers/bungie">
          <li>Bungie</li>
        </Link>
        <Link href="/developers/fabrikgames">
          <li>Fabrik Games</li>
        </Link>
        <Link href="/developers/firesprite">
          <li>Firesprite</li>
        </Link>
        <Link href="/developers/firewalkstudios">
          <li>Firewalk Studios</li>
        </Link>
        <Link href="/developers/guerillagames">
          <li>Guerilla Games</li>
        </Link>
        <Link href="/developers/havenstudios">
          <li>Haven Studios</li>
        </Link>
        <Link href="/developers/housemarque">
          <li>Housemarque</li>
        </Link>
        <Link href="/developers/insomniacgames">
          <li>Insomniac Games</li>
        </Link>
        <Link href="/developers/mediamolecule">
          <li>Media Molecule</li>
        </Link>
        <Link href="/developers/naughtydog">
          <li>Naughty Dog</li>
        </Link>
        <Link href="/developers/neonkoi">
          <li>Neon Koi</li>
        </Link>
        <Link href="/developers/nixxessoftware">
          <li>Nixxes Software</li>
        </Link>
        <Link href="/developers/polyphonydigital">
          <li>Polyphony Digital</li>
        </Link>
        <Link href="/developers/sandiegostudio">
          <li>San Diego Studio</li>
        </Link>
        <Link href="/developers/sanmateostudio">
          <li>San Mateo Studio</li>
        </Link>
        <Link href="/developers/santamonicastudio">
          <li>Santa Monica Studio</li>
        </Link>
        <Link href="/developers/suckerpunchproductions">
          <li>Sucker Punch Productions</li>
        </Link>
        <Link href="/developers/teamasobi">
          <li>Team Asobi</li>
        </Link>
        <Link href="/developers/valkyrieentertainment">
          <li>Valkyrie Entertainment</li>
        </Link>
        <Link href="/developers/xdev">
          <li>XDev</li>
        </Link>
      </ul>
    </div>
  );
}

export default DevelopersPage;

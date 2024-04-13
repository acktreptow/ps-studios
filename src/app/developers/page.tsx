import Link from "next/link";

function DevelopersPage() {
  return (
    <>
      <h1>Sony First Party Developers</h1>
      <ul>
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

        <li>Polyphony Digital</li>
        <li>San Diego Studio</li>
        <li>San Mateo Studio</li>
        <li>Santa Monica Studio</li>
        <li>Sucker Punch Productions</li>
        <li>Team Asobi</li>
        <li>Valkyrie Entertainment</li>
        <li>XDev</li>
      </ul>
    </>
  );
}

export default DevelopersPage;

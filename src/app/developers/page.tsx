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

        <li>Firewalk Studios</li>
        <li>Guerilla Games</li>
        <li>Haven Studios</li>
        <li>Housemarque</li>
        <li>Insomniac Games</li>
        <li>Media Molecule</li>
        <li>Naughty Dog</li>
        <li>Neon Koi</li>
        <li>Nixxes Software</li>
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

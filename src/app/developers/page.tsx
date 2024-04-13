import Link from "next/link";

function DevelopersPage() {
  return (
    <>
      <h1>Sony First Party Developers</h1>
      <ul>
        <Link href="/developers/bendstudio">
          <li>Bend Studio</li>
        </Link>
        <li>Bluepoint Games</li>
        <li>Bungie</li>
        <li>Fabrik Games</li>
        <li>Firesprite</li>
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

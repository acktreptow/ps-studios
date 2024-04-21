import games from "../../data/games.json";

function SanMateoStudioPage() {
  return (
    <div className="bg-white text-gray-700 p-10">
      <h1 className="text-4xl text-center font-bold mb-10 text-gray-950">
        San Mateo Studio
      </h1>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">History</span>
      </h2>
      <p className="mb-5 text-lg">
        Founded in 1998, San Mateo Studio (formerly Foster City Studio) works
        out of... San Mateo, California.
      </p>
      <p className="mb-8 text-lg">
        Unlike the majority of PlayStation first-party developers, San Mateo are
        only a support studio. They did spin off a small team in 2014 that was
        called Pixelopus, but Sony closed the studio down in June 2023. They
        only ended up releasing 2 games - both of which came out before the PS5.
      </p>
      <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
        <span className="border-b-2 border-gray-300">My Analysis</span>
      </h2>
      <p className="mb-5 text-lg">
        Due to their support status, San Mateo haven&#39;t released a PS5 game
        where they were the main developer. This situation is also very unlikely
        to change if the shuttering of Pixelopus is any indication.
      </p>
      <p className="mb-5 text-lg">
        If you&#39;re looking for your next first-party PS5 game, you should
        probably look elsewhere.
      </p>
    </div>
  );
}

export default SanMateoStudioPage;

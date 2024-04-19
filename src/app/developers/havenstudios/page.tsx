import games from "../../data/games.json";

function HavenStudiosPage() {
  return (
    <>
      <h1>Haven Studios</h1>
      <p>
        This Montreal-based developer was founded in 2021 by popular video game
        producer Jadde Raymond. Who had recently quite Google after the
        corporation had announced they would no longer be supporting Google
        Stadia with internally developed games.
      </p>
      <p>
        Raymond would however take this knowledge of cloud infrastucture to
        Haven. Something Sony were particuarly interested in, which is why they
        bought them in early 2023 after already parneting with them on a
        liove-service title for a year.
      </p>
      <p>
        We found out what this title was in May 2023 - FairGame$ a live service
        competetive heist shooter that will launch on PS5 and PC simultaneously.
        It currently does not have a release date.
      </p>
      <p>
        Despite the Haven being a young developer who haven't shown much, you
        should be relatively excited. We know Mark Cerny is impressed.
      </p>
      <h2>Games</h2>
      {games
        .filter((game) => game.developer === "Haven Studios")
        .map((game) => (
          <div key={game.id}>{game.name}</div>
        ))}
    </>
  );
}

export default HavenStudiosPage;

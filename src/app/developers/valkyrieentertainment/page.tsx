import Image from "next/image";
import gunsUpGameplay from "../../../../public/images/guns-up.png";

function ValkyrieEntertainmentPage() {
  return (
    <div>
      <h1>Valkyrie Entertainment</h1>
      <h2>History</h2>
      <p>
        Valkyrie Entertainment are a Seattle-based developer who were founded in
        2002 and officially purchased by Sony in 2021. Never heard of Valkyrie
        or their games? Makes sense. That&#39;s because Valkyrie only act as a
        support studio for PlayStation games developed at other first-party
        studios.
      </p>
      <p>
        In fact despite being founded over 20 years ago, Valkyrie have only been
        the main developer for one game. 2015&#39;s digital only &#39;Guns
        Up!&#39; for PSN and mobile devices, which came and went with no
        fanfare. You&#39;re far more likely to have seen their support work on
        titles from other PlayStation Studios like God of War: Ragnarok from
        Sony Santa Monica.
      </p>
      <h2>My Analysis and Predictions</h2>
      <p>
        This one&#39;s easy to forecast. Due to their support status, Valkyrie
        haven&#39;t released any games for the PS5. And based off the critical
        and commercial failure of Guns Up, it&#39;s unlikely they&#39;ll get a
        chance to any time soon.
      </p>
      <p>
        Especially if their unsecure, bare-bones website is anything to go by.
        If you&#39;re looking for your next PS5 first-party game, you can safely
        ignore Valkyrie Entertainment.
      </p>
      <Image
        src={gunsUpGameplay}
        alt="Guns Up! gameplay"
        width={500}
        height={550}
        id="guns-up"
      />
      <label htmlFor="guns-up">Image of Guns Up! gameplay</label>
    </div>
  );
}

export default ValkyrieEntertainmentPage;

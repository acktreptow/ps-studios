import { Metadata } from "next";
import PS5GamesClient from "./page.client";

export const metadata: Metadata = {
  title: "PS5 Games",
  description:
    "The PS5 games section of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

function PS5Games(): JSX.Element {
  return <PS5GamesClient />;
}

export default PS5Games;

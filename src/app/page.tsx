import { Metadata } from "next";
import HomepageClient from "./page.client";

export const metadata: Metadata = {
  title:
    "PS5 Studios | Analysis, Predictions & Stats of PlayStation Studios for PS5",
  description:
    "The homepage of ps5studios.com, a fan site about the first-party developers under PlayStation Studios during the PS5 era.",
};

function Homepage(): JSX.Element {
  return <HomepageClient />;
}

export default Homepage;

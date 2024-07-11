import Link from "next/link";

type DeveloperButtonProps = {
  developer: string;
  urlPath: string;
};

function DeveloperButton({
  developer,
  urlPath,
}: DeveloperButtonProps): JSX.Element {
  return (
    <div className="flex align-middle items-center justify-center space-x-2 mb-12 text-sm font-semibold md:justify-start lg:justify-end lg:text-base">
      <button className="border p-3 bg-playstation text-white rounded-full hover:bg-blue-900 transition-colors duration-200 shadow-sm shadow-playstation">
        <Link href={urlPath} target="_blank">
          {developer} Website
        </Link>
      </button>
      <button className="border p-3  bg-playstation text-white rounded-full hover:bg-blue-900 transition-colors duration-200 shadow-sm shadow-playstation">
        <Link href="/developers">Back to Devs</Link>
      </button>
    </div>
  );
}

export default DeveloperButton;

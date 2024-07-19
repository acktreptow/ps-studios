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
      <button className="border p-3 bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation">
        <Link href={urlPath} target="_blank">
          {developer} Website
        </Link>
      </button>
      <button className="border p-3  bg-gradient-to-b from-blue-700 to-playstation text-white rounded-full hover:bg-gradient-to-b hover:from-blue-600 hover:to-playstation hover:font-bold transition-colors duration-200 shadow-md shadow-playstation">
        <Link href="/developers">Back to Devs</Link>
      </button>
    </div>
  );
}

export default DeveloperButton;

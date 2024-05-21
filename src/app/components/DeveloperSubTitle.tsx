type DeveloperSubTitleProps = {
  subtitle: string;
};

function DeveloperSubTitle({ subtitle }: DeveloperSubTitleProps): JSX.Element {
  return (
    <h2 className="mb-3 text-gray-800 text-2xl font-semibold pb-1">
      <span className="border-b-2 border-gray-300">{subtitle}</span>
    </h2>
  );
}

export default DeveloperSubTitle;
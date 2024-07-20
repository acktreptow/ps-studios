type DeveloperTitleProps = {
  title: string;
};

function DeveloperTitle({ title }: DeveloperTitleProps): JSX.Element {
  return (
    <h1 className="text-4xl text-center font-bold mb-10 text-gray-950 tracking-wide md:leading-relaxed lg:text-6xl">
      {title}
    </h1>
  );
}

export default DeveloperTitle;

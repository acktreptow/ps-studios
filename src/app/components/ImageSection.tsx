type ImageSectionProps = {
  children: React.ReactNode;
  flexOnMdScreens: boolean;
};

function ImageSection({
  flexOnMdScreens,
  children,
}: ImageSectionProps): JSX.Element {
  return (
    <section
      className={`${flexOnMdScreens ? "md:flex" : "lg:flex"} items-center`}
    >
      {children}
    </section>
  );
}

export default ImageSection;

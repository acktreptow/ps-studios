type ImageSectionProps = {
  children: React.ReactNode;
};

function ImageSection({ children }: ImageSectionProps): JSX.Element {
  return <section className="md:flex items-center">{children}</section>;
}

export default ImageSection;

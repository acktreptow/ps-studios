type ParagraphProps = {
  children: React.ReactNode;
  marginBottom?: number;
};

function Paragraph({ children, marginBottom = 5 }: ParagraphProps) {
  return (
    <p className={`mb-${marginBottom} text-lg lg:text-xl lg:tracking-wide`}>
      {children}
    </p>
  );
}

export default Paragraph;

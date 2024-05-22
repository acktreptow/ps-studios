type StatsListProps = {
  children: React.ReactNode;
  isNumbered: boolean;
};

function StatsList({ children, isNumbered }: StatsListProps) {
  return (
    <ul
      className={`${
        isNumbered
          ? `list-decimal pl-10 lg:text-xl lg:space-y-1`
          : "list-disc pl-5 mb-5 md:leading-10 lg:text-xl lg:space-y-2"
      } leading-8 text-lg md:pl-7 lg:pl-10 lg:tracking-wide`}
    >
      {children}
    </ul>
  );
}

export default StatsList;

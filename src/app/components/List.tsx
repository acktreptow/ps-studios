type ListProps = {
  children: React.ReactNode;
};

function List({ children }: ListProps) {
  return (
    <ul className="list-disc space-y-2 pl-5 mb-5 text-lg md:pl-7 lg:text-xl lg:tracking-wide lg:pl-10">
      {children}
    </ul>
  );
}

export default List;

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="bg-white text-gray-700 p-10 container mx-auto flex-grow">
      {children}
    </div>
  );
}

export default Container;

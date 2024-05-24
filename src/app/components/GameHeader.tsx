type GameHeaderProps = {
  children: React.ReactNode;
};

function GameHeader({ children }: GameHeaderProps): JSX.Element {
  return (
    <h3 className="text-xl font-bold text-center mb-1 lg:text-2xl lg:mb-3">
      {children}
    </h3>
  );
}

export default GameHeader;

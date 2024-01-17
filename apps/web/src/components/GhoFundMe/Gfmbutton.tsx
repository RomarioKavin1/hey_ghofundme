interface GfmbuttonProps {
  onClick?: () => void;
}

const Gfmbutton: React.FC<GfmbuttonProps> = ({ onClick }) => {
  const handleButtonClick = () => {
    console.log('open modal base');
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="mx-3 flex h-8 w-24 items-center justify-center"
      onClick={handleButtonClick}
    >
      <div className="i absolute  h-8 w-24 transform cursor-pointer items-center overflow-hidden rounded-lg border-[1px] border-yellow-500 bg-transparent shadow-2xl transition duration-300 ease-out hover:bg-white" />
      <a className="pointer-events-none z-10 text-center text-sm font-semibold text-yellow-500">
        Subscribe
      </a>
    </div>
  );
};

export default Gfmbutton;

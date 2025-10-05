import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingSpinner = () => {
  return (
    <div className="mt-12 flex justify-center items-center min-h-[200px]">
      <PacmanLoader color="#36d735" size={25} />
    </div>
  );
};

export default LoadingSpinner;

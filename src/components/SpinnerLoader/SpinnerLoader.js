import { Oval } from "react-loader-spinner";

const SpinnerLoader = () => {
  return (
    <>
      <Oval
        height={80}
        width={80}
        color="#ff0000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ff0000"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </>
  );
};

export default SpinnerLoader;

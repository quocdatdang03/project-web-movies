import { useContext } from "react";
import Context from "../../store/Context";

const Overlay = () => {
  const { setShowOverlay, showOverlay, setShowCategory } = useContext(Context);

  const handleOnClickOverlay = () => {
    setShowCategory(false);
    setShowOverlay(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] transition-all z-[150] ${
        showOverlay ? "visible" : "invisible"
      }`}
      onClick={handleOnClickOverlay}
    ></div>
  );
};

export default Overlay;

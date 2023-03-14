// library:
import { useEffect, useState } from "react";

import Context from "./Context";

const Provider = ({ children }) => {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      if (
        document.body.scrollTop > 128 ||
        document.documentElement.scrollTop > 128
      ) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };
    window.addEventListener("scroll", scrollHeader);
    // cleanup function :
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);
  // values :
  const values = {
    fixedHeader,
    setShowOverlay,
    showOverlay,
    showCategory,
    setShowCategory,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Provider;

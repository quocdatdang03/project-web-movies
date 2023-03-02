// library:
import { useEffect, useState } from "react";

import Context from "./Context";

const Provider = ({ children }) => {
  const [fixedHeader, setFixedHeader] = useState(false);

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
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Provider;

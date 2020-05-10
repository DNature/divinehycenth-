import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

interface Props {
  children: React.ReactNode;
}

const Portal: React.FC<Props> = ({ children }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // @ts-ignore
    ref.current = document.getElementById("__next");
    console.log(mounted, ref.current);
    setMounted(true);
  }, []);

  // @ts-ignore
  return mounted ? createPortal(children, ref.current) : null;
};

Portal.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Portal;

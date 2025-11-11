import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Reydex | ${title}`;
  }, []);
};

export default useTitle;

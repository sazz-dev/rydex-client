import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Gameov | ${title}`;
  }, []);
};

export default useTitle;

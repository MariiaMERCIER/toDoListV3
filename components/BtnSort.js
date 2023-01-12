"use client";

import useThemeContext from "../context/ThemeProvider";

const BtnSort = ({ sort, setSort }) => {
  const { setTheme, theme } = useThemeContext();

  return (
    <button
      className="text-2xl bg-purple-900 text-white w-52 h-12 rounded-lg"
      onClick={() => {
        setSort(!sort);
      }}
    >
      {sort ? "Unsort" : "Sort"}
    </button>
  );
};

export default BtnSort;

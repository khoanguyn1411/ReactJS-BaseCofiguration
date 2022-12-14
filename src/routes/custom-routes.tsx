import { GlobalTypes } from "@/global";
import { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#60a5fa",
    "1.0": "#60a5fa",
  },
  shadowBlur: 5,
});

export const CustomRoute: GlobalTypes.FCChildren = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();
  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);
  return (
    <>
      {progress && <TopBarProgress />}
      <>{children}</>
    </>
  );
};

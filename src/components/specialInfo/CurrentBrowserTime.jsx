import React, { useEffect, useState } from "react";

const CurrentBrowserTime = () => {
  const interval = 1000;
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date());
    }, interval);
    return () => clearTimeout(timer);
  });

  return <> {currentTime.toString()}</>;
};

export default CurrentBrowserTime;

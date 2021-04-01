import React, { useEffect, useState } from "react";
import { getCurrentBrowserTime } from "../../utils/dateUtil";

const CurrentBrowserTime = () => {
  const interval = 1000;
  const [currentTime, setCurrentTime] = useState(getCurrentBrowserTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(getCurrentBrowserTime());
    }, interval);
    return () => clearTimeout(timer);
  });

  return <> {currentTime.month} {currentTime.day} {currentTime.year}, {currentTime.hour}:{currentTime.minute} {Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).resolvedOptions().timeZone} </>;
};

export default CurrentBrowserTime;

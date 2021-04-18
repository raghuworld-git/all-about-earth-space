import React from 'react';



const TimeZoneContext = React.createContext();

export const TimeZoneProvider = TimeZoneContext.Provider
export const TimeZoneConsumer = TimeZoneContext.Consumer

export default TimeZoneContext
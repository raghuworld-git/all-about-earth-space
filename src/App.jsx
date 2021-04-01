import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HeaderNav from './components/navigation';
import SpecialInfo from './components/specialInfo';
import Routing from './router/Routing';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <>
      <HeaderNav />
      <SpecialInfo />
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </>
  );
}

export default App;

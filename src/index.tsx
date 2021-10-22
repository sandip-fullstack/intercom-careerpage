/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
})
ReactDOM.render (
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>  
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);

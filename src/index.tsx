import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);

console.log(process.env)

root.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);

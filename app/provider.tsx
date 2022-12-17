'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import themes from '../theme/themes';

const Provider = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={themes}>{children}</ChakraProvider>;
};

export default Provider;

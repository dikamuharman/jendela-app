'use client';
import { Container, useMediaQuery } from '@chakra-ui/react';
import JendelaLogo from '../logo/logo';
import JDrawer from './drawer/drawer';
import JNav from './nav/nav';

const JNavbar = () => {
  const [isSmallerThan800] = useMediaQuery('(max-width:48em)', {
    ssr: true,
    fallback: true,
  });

  return (
    <>
      <Container maxW="container.lg" as="header" mt={5}>
        {isSmallerThan800 ? <JendelaLogo /> : <JNav />}
      </Container>
      {isSmallerThan800 && <JDrawer />}
    </>
  );
};

export default JNavbar;

'use client';
import { Container, Icon, IconButton } from '@chakra-ui/react';
import { FiAlignRight } from 'react-icons/fi';
import JendelaLogo from '../logo/logo';

const JNavbar = () => {
  return (
    <>
      <Container maxW="container.lg">
        <JendelaLogo />
      </Container>
      <IconButton
        icon={<Icon as={FiAlignRight} />}
        aria-label="Menu"
        position="absolute"
        backgroundColor="white"
        borderRadius={12}
        bottom={8}
        right={4}
      />
    </>
  );
};

export default JNavbar;

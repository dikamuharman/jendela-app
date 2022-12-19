'use client';
import { Button, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import JendelaLogo from '../../logo/logo';
import listMenu from '../list_menu.json';

const JNav = () => {
  return (
    <HStack
      align="center"
      justifyContent="space-between"
      as="nav"
      px={4}
      py={2}
      backgroundColor="white"
      borderRadius={12}
      boxShadow="md"
    >
      <JendelaLogo />
      <HStack gap={4}>
        {listMenu.map((item, i) => (
          <Link
            key={i}
            as={NextLink}
            href={item.href}
            textDecoration="underline"
            fontSize={12}
            fontWeight="medium"
            _hover={{
              textDecoration: 'none',
            }}
            px={4}
            py={2}
          >
            {item.title}
          </Link>
        ))}
        <NextLink href="/">
          <Button
            backgroundColor="primary.50"
            color="white"
            _hover={{
              backgroundColor: 'primary.60',
            }}
          >
            Login
          </Button>
        </NextLink>
      </HStack>
    </HStack>
  );
};

export default JNav;

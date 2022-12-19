'use client';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Link,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRef } from 'react';
import { FiAlignRight } from 'react-icons/fi';
import JendelaLogo from '../../logo/logo';
import listMenu from '../list_menu.json';

const JDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={drawerButtonRef}
        onClick={onOpen}
        icon={<Icon as={FiAlignRight} boxSize={7} />}
        aria-label="Menu"
        position="absolute"
        backgroundColor="white"
        borderRadius={12}
        bottom={8}
        right={4}
        size={'lg'}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={drawerButtonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <JendelaLogo />
          </DrawerHeader>

          <DrawerBody>
            <VStack align="flex-end" gap={3}>
              {listMenu.map((item, i) => (
                <Link key={i} as={NextLink} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack justifyContent="space-between">
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
              <Button onClick={onClose}>CLose</Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default JDrawer;

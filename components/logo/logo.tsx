'use client';
import { HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import JendelaLogoPng from '../../assets/logo.png';
import style from './logo.module.css';

const JendelaLogo = () => {
  return (
    <HStack align="center">
      <Image src={JendelaLogoPng} width={52} height={52} alt="Jendela Logo" />
      <VStack align="flex-start">
        <Text
          fontWeight="medium"
          color="netural.90"
          className={style.logo}
          mb={0}
        >
          Jendela
        </Text>
        <span>know your career way</span>
      </VStack>
    </HStack>
  );
};

export default JendelaLogo;

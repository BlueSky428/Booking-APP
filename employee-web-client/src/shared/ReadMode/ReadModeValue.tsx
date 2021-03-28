import React, { ReactNode } from 'react';
import { Text, VStack } from '@chakra-ui/react';

interface IProps {
  value?: string | number | null;
  label: ReactNode | string;
}

const ReadModeValue = ({ value, label }: IProps) => {
  if (!value) return null;

  return (
    <VStack align='flex-start' spacing={0}>
      <Text color='gray.500' fontSize='sm'>
        {label}
      </Text>
      <Text>{value}</Text>
    </VStack>
  );
};

export { ReadModeValue };

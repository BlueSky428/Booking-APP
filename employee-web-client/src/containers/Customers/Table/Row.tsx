import React from 'react';
import { Badge, Flex } from '@chakra-ui/react';

import { GridItem, TruncatedCell } from 'shared/Grid';
import { ICustomer } from 'modules/customers/types';
import { ContactType } from 'types';

import { ActionButtons } from '../ActionButtons';

interface IProps {
  index: number;
  customer: ICustomer;
}

const Row = ({ index, customer }: IProps) => {
  const phone = customer.contacts.find(contact => contact.type === ContactType.Phone)?.value;
  const email = customer.contacts.find(contact => contact.type === ContactType.Email)?.value;
  const url = customer.contacts.find(contact => contact.type === ContactType.Url)?.value;
  const address = `${customer.address.city}, ${customer.address.street}`;

  return (
    <GridItem>
      <TruncatedCell>{index}</TruncatedCell>
      <TruncatedCell>{customer.fullName}</TruncatedCell>
      <Flex display={{ base: 'none', md: 'lex' }} className='cell'>
        <Badge variant='solid' colorScheme='gray'>
          0 pending
        </Badge>
      </Flex>
      <TruncatedCell display={{ base: 'none', md: 'flex' }}>{address ?? '---'}</TruncatedCell>
      <TruncatedCell>{phone}</TruncatedCell>
      <TruncatedCell display={{ base: 'none', lg: 'flex' }}>{customer.birthDate}</TruncatedCell>
      <TruncatedCell justify='flex-end'>
        <ActionButtons phone={phone} email={email} url={url} />
      </TruncatedCell>
    </GridItem>
  );
};

export { Row };
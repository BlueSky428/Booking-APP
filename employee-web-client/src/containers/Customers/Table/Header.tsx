import React from 'react';
import { FormattedMessage } from 'react-intl';

import { GridHeader } from 'shared/Grid';
import { HeaderCell } from 'shared/Filters';

const Header = () => {
  return (
    <GridHeader>
      <HeaderCell>
        <FormattedMessage id='lp-label' defaultMessage='Lp' />
      </HeaderCell>
      <HeaderCell name='test'>
        <FormattedMessage id='customers-full-name' defaultMessage='Full name' />
      </HeaderCell>
      <HeaderCell display={{ base: 'none', md: 'block' }}>
        <FormattedMessage id='customers-bookings' defaultMessage='Bookings' />
      </HeaderCell>
      <HeaderCell display={{ base: 'none', md: 'block' }}>
        <FormattedMessage id='customers-address' defaultMessage='Address' />
      </HeaderCell>
      <HeaderCell>
        <FormattedMessage id='customers-phone' defaultMessage='Phone number' />
      </HeaderCell>
      <HeaderCell display={{ base: 'none', lg: 'block' }}>
        <FormattedMessage id='customers-email' defaultMessage='Email' />
      </HeaderCell>
      <HeaderCell>{''}</HeaderCell>
    </GridHeader>
  );
};

export { Header };

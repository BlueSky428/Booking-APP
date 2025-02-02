import React from 'react';
import { FormattedMessage } from 'react-intl';

import { GridHeader } from 'shared/Grid';
import { HeaderCell } from 'shared/Filters';

const Header = () => {
  return (
    <GridHeader>
      <HeaderCell>
        <FormattedMessage id='schedule-name' defaultMessage='Schedule name' />
      </HeaderCell>
      <HeaderCell display={{ base: 'none', md: 'flex' }}>
        <FormattedMessage id='start-date' defaultMessage='Start date' />
      </HeaderCell>
      <HeaderCell>
        <FormattedMessage id='end-date' defaultMessage='End date' />
      </HeaderCell>
      <HeaderCell display={{ base: 'none', lg: 'flex' }}>
        <FormattedMessage id='created-at' defaultMessage='Created at' />
      </HeaderCell>
    </GridHeader>
  );
};

export { Header };

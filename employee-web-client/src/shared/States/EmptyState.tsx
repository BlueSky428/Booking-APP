import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Image, useBreakpointValue } from '@chakra-ui/react';

import { State } from './State';
import image from '../../assets/images/no-results.png';
import { HomeButton } from './HomeButton';

const EmptyState = () => {
  const { formatMessage } = useIntl();
  const size = useBreakpointValue({ base: '240px', md: '480px', lg: '640px' });

  return (
    <State
      image={
        <Image
          src={image}
          alt={formatMessage({
            id: 'empty-error',
            defaultMessage: 'No results',
          })}
          width={size}
          mt={8}
        />
      }
      header={<FormattedMessage id='empty-state-header' defaultMessage='No results found' />}
      description={
        <FormattedMessage
          id='not-found-description'
          defaultMessage='Enter other search parameters. If you think there is a problem, please contact our administrator.'
        />
      }
      mt={{ base: 20, md: 40, lg: 20 }}
    >
      <HomeButton mt={4} />
    </State>
  );
};

export { EmptyState };

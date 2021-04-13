import React from 'react';
import { VStack, Box, HStack, useColorModeValue, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import { DateInput } from 'react-hook-form-chakra-fields';

import { useWeekRange } from 'hooks';
import { dayjs } from 'utils/dayjs';

import { useScheduleQuery } from 'modules/schedules/infrastructure/query';
import { useFacilityConsumer } from 'modules/context';

import { PageWrapper } from 'shared/Layout/Page';
import { withErrorBoundary } from 'shared/ErrorBoundary';
import { FormattedDate } from 'shared/Date';
import { IconButton } from 'shared/Button';

import { Header } from './Header';
import { AvailableEmployeesGrid } from './AvailableEmployeesGrid';
import { WorkingDaysGrid } from './WorkingDaysGrid';
import { WeekDaysGrid } from './WeekDaysGrid';

const Schedule = () => {
  const { formatMessage } = useIntl();
  const { facilityId, workingDays } = useFacilityConsumer();
  const { scheduleId } = useParams<{ scheduleId: string }>();

  const color = useColorModeValue('primary.500', 'primary.300');
  const weekTextColor = useColorModeValue('gray.500', 'gray.400');

  const schedule = useScheduleQuery(facilityId, scheduleId);

  const {
    saturday,
    sunday,
    trackedDay,
    weekDates,
    nextWeek,
    prevWeek,
    setWeek,
    isPrevWeekNotAllowed,
    isNextWeekNotAllowed,
    isInRange,
  } = useWeekRange({
    dayWithinWeek: dayjs(schedule.startDate),
    minDate: dayjs(schedule.startDate),
    maxDate: dayjs(schedule.endDate),
  });

  return (
    <PageWrapper>
      <Header schedule={schedule} />
      <VStack w='100%' spacing={0}>
        <SimpleGrid w='100%' columns={3} spacingX={4}>
          <GridItem colSpan={1} mt={2}>
            <Box maxW='270px'>
              <DateInput
                isClearable={false}
                value={trackedDay?.toDate().toString()}
                placeholderText={formatMessage({ id: 'select-week', defaultMessage: 'Select week' })}
                onChange={value => {
                  if (Array.isArray(value) || !value) return;
                  setWeek(dayjs(value));
                }}
                minDate={new Date(schedule.startDate)}
                maxDate={new Date(schedule.endDate)}
              />
            </Box>
          </GridItem>
          <GridItem as={VStack} colSpan={1} spacing={-1}>
            <HStack spacing={3} fontSize='lg'>
              <IconButton onClick={prevWeek} isDisabled={isPrevWeekNotAllowed} path={mdiChevronLeft} title='' />
              <HStack color={color}>
                <FormattedDate value={sunday.toDate().toString()} format={'DD MMM'} />
                <Box>-</Box>
                <FormattedDate value={saturday.toDate().toString()} format={'DD MMM'} />
                <FormattedDate value={sunday.toDate().toString()} format='YYYY' />
              </HStack>
              <IconButton onClick={nextWeek} isDisabled={isNextWeekNotAllowed} path={mdiChevronRight} title='' />
            </HStack>
            <Box fontSize='sm' pb={{ base: 4, md: 8 }} color={weekTextColor}>
              <FormattedMessage
                id='week'
                defaultMessage='Week {week}'
                values={{
                  week: saturday.week(),
                }}
              />
            </Box>
          </GridItem>
        </SimpleGrid>
        <WeekDaysGrid weekDates={weekDates} />
        <WorkingDaysGrid workingDays={workingDays} />
        <AvailableEmployeesGrid isInRange={isInRange} weekDates={weekDates} availabilities={schedule.availabilities} />
      </VStack>
    </PageWrapper>
  );
};

export default withErrorBoundary(Schedule);

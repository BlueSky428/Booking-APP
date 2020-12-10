using System;
using System.Collections.Generic;
using Accessibility.Application.Schedules.CreateSchedule;
using MediatR;

namespace Accessibility.Application.Schedules.CorrectSchedule
{
    public class CorrectScheduleCommand : IRequest
    {
        public CorrectScheduleCommand(Guid facilityId, Guid scheduleId, List<AvailabilityDto> availabilities)
        {
            Availabilities = availabilities;
            FacilityId = facilityId;
            ScheduleId = scheduleId;
        }

        public Guid FacilityId { get; set; }
        public Guid ScheduleId { get; set; }
        public List<AvailabilityDto> Availabilities { get; }
    }
}

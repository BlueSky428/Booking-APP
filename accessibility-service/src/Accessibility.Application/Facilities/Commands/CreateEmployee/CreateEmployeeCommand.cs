using Accessibility.Domain.SharedKernel;
using MediatR;

namespace Accessibility.Application.Facilities.Commands.CreateEmployee
{
    public class CreateEmployeeCommand : IRequest
    {
        public CreateEmployeeCommand(EmployeeId employeeId, FacilityId facilityId, string name, string position, EntityStatus status)
        {
            EmployeeId = employeeId;
            FacilityId = facilityId;
            Name = name;
            Position = position;
            Status = status;
        }

        public EmployeeId EmployeeId { get; }
        public FacilityId FacilityId { get; }
        public string Name { get; }
        public string Position { get; }
        public EntityStatus Status { get; }
    }
}

using System.Threading;
using System.Threading.Tasks;
using Accessibility.Application.Bookings.Book.EventBus;
using Accessibility.Domain.Bookings;
using Accessibility.Domain.SeedWork;
using Accessibility.Domain.SharedKernel;
using MediatR;

namespace Accessibility.Application.Bookings.Book
{
    public class BookCommandHandler : IRequestHandler<BookCommand>
    {
        private readonly IBookingRepository repo;
        private readonly IUnitOfWork unitOfWork;
        private readonly IBookEventBus eventBus;

        public BookCommandHandler(IBookingRepository repo, IUnitOfWork unitOfWork, IBookEventBus eventBus)
        {
            this.repo = repo;
            this.unitOfWork = unitOfWork;
            this.eventBus = eventBus;
        }

        public Task<Unit> Handle(BookCommand request, CancellationToken cancellationToken)
        {
            eventBus.Publish(new BookingOrderMessage(), new FacilityId(request.FacilityId));

            return Unit.Task;
        }
    }
}
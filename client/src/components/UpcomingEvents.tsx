import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Event } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const EventCard = ({ event }: { event: Event }) => {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = eventDate.getDate();
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="event-date">
        <div className="text-sm">{month}</div>
        <div className="text-2xl font-bold">{day}</div>
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <i className="far fa-clock mr-2"></i>
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>{event.location}</span>
        </div>
        <p className="mb-4">{event.description}</p>
        <Link href={`/events/${event.id}`} className="text-primary font-semibold hover:text-lightblue transition-colors">
          View Details →
        </Link>
      </div>
    </div>
  );
};

const EventCardSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <Skeleton className="h-16 w-full" />
      <div className="p-6">
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/3" />
      </div>
    </div>
  );
};

const UpcomingEvents = ({ limit = 3 }: { limit?: number }) => {
  const { data: events, isLoading, error } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Filter and sort future events
  const upcomingEvents = events
    ?.filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-primary mb-2">UPCOMING EVENTS</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <EventCardSkeleton />
              <EventCardSkeleton />
              <EventCardSkeleton />
            </>
          ) : error ? (
            <div className="col-span-3 text-center text-red-500">
              <p>Failed to load events. Please try again later.</p>
            </div>
          ) : upcomingEvents && upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              <p>No upcoming events at this time. Check back soon!</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/events" className="inline-block bg-primary text-white font-montserrat font-semibold py-2 px-6 rounded-md hover:bg-darkblue transition-colors">
            VIEW FULL CALENDAR
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

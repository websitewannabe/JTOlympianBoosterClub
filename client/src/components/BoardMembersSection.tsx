import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { BoardMember } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import OptimizedImage from "@/components/ui/optimized-image";

const BoardMemberCard = ({ member }: { member: BoardMember }) => {
  return (
    <div className="text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
        <OptimizedImage 
          src={member.imageUrl} 
          alt={`${member.name}, ${member.position}`}
          width={256}
          height={256}
          quality={85}
          format="webp"
          fit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-montserrat font-bold text-xl text-primary">{member.name}</h3>
      <p className="text-lg font-semibold text-gray-600">{member.position}</p>
      <p className="text-gray-500 mt-2">parent of {member.children}</p>
    </div>
  );
};

const BoardMemberSkeleton = () => {
  return (
    <div className="text-center">
      <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
      <Skeleton className="h-5 w-1/2 mx-auto mb-2" />
      <Skeleton className="h-4 w-2/3 mx-auto" />
    </div>
  );
};

const BoardMembersSection = ({ limit = 4 }: { limit?: number }) => {
  const { data: boardMembers, isLoading, error } = useQuery<BoardMember[]>({
    queryKey: ['/api/board-members'],
  });

  const displayedMembers = boardMembers?.slice(0, limit);

  return (
    <section id="board" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-primary mb-2">BOARD MEMBERS</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 max-w-3xl mx-auto">Our volunteer board members are dedicated to supporting Olympian athletics and creating the best possible experience for our student-athletes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {isLoading ? (
            <>
              <BoardMemberSkeleton />
              <BoardMemberSkeleton />
              <BoardMemberSkeleton />
              <BoardMemberSkeleton />
            </>
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              <p>Failed to load board members. Please try again later.</p>
            </div>
          ) : displayedMembers && displayedMembers.length > 0 ? (
            displayedMembers.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p>Board member information is currently unavailable.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/about#board-details" className="inline-block bg-primary text-white font-montserrat font-semibold py-2 px-6 rounded-md hover:bg-darkblue transition-colors">
            VIEW ALL BOARD MEMBERS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BoardMembersSection;

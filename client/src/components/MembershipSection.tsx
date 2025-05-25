import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { MembershipLevel } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const MembershipCard = ({ 
  level, 
  featured = false
}: { 
  level: MembershipLevel, 
  featured?: boolean 
}) => {
  return (
    <div className={`bg-white text-darkgray rounded-lg shadow-lg overflow-hidden ${featured ? 'transform scale-105 z-10' : ''}`}>
      <div className={`${level.color} text-white py-4 text-center`}>
        {featured && (
          <div className="bg-primary text-white text-xs py-1 px-3 rounded-full inline-block mb-2">MOST POPULAR</div>
        )}
        <h3 className="font-montserrat font-bold text-xl">{level.name}</h3>
        <p className="text-2xl font-bold mt-2">${level.price}<span className="text-sm">/year</span></p>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {level.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <Link href={`/membership?level=${level.id}#join`} className={`block text-center ${featured ? 'bg-secondary text-primary' : 'bg-primary text-white'} font-montserrat font-semibold py-2 px-6 rounded-md mt-6 hover:bg-opacity-90 transition-colors`}>
          JOIN NOW
        </Link>
      </div>
    </div>
  );
};

const MembershipCardSkeleton = ({ featured = false }: { featured?: boolean }) => {
  return (
    <div className={`bg-white text-darkgray rounded-lg shadow-lg overflow-hidden ${featured ? 'transform scale-105 z-10' : ''}`}>
      <Skeleton className="h-20 w-full" />
      <div className="p-6">
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-start">
              <Skeleton className="h-5 w-5 mt-1 mr-2 rounded-full" />
              <Skeleton className="h-5 w-full" />
            </div>
          ))}
        </div>
        <Skeleton className="h-10 w-full mt-6 rounded-md" />
      </div>
    </div>
  );
};

const MembershipSection = () => {
  const { data: membershipLevels, isLoading, error } = useQuery<MembershipLevel[]>({
    queryKey: ['/api/membership-levels'],
  });

  return (
    <section id="membership" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl mb-2">BECOME A MEMBER</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {isLoading ? (
            <>
              <MembershipCardSkeleton />
              <MembershipCardSkeleton featured={true} />
              <MembershipCardSkeleton />
            </>
          ) : error ? (
            <div className="col-span-3 text-center">
              <p>Failed to load membership information. Please try again later.</p>
            </div>
          ) : membershipLevels && membershipLevels.length > 0 ? (
            membershipLevels.map((level, index) => (
              <MembershipCard 
                key={level.id} 
                level={level} 
                featured={index === 1} // Middle card is featured
              />
            ))
          ) : (
            <div className="col-span-3 text-center">
              <p>Membership information is currently unavailable. Please check back later.</p>
            </div>
          )}
        </div>
        
        <p className="text-center mt-12 max-w-3xl mx-auto">
          All membership fees directly support our student-athletes through equipment purchases, facility improvements, team travel, and scholarships. Your support makes a difference!
        </p>
      </div>
    </section>
  );
};

export default MembershipSection;

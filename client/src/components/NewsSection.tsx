import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { NewsItem } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-500">
            {new Date(item.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <span className="bg-lightblue text-white text-xs py-1 px-2 rounded">{item.category}</span>
        </div>
        <h3 className="font-montserrat font-bold text-xl mb-2">{item.title}</h3>
        <p className="mb-4 text-gray-700">{item.excerpt}</p>
        <Link href={`/news/${item.id}`} className="text-primary font-semibold hover:text-lightblue transition-colors">
          Read More →
        </Link>
      </div>
    </div>
  );
};

const NewsCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Skeleton className="h-48 w-full" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-8 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <Skeleton className="h-6 w-24" />
      </div>
    </div>
  );
};

const NewsSection = ({ limit = 3 }: { limit?: number }) => {
  const { data: newsItems, isLoading, error } = useQuery<NewsItem[]>({
    queryKey: ['/api/news'],
  });

  const displayedItems = newsItems?.slice(0, limit);

  return (
    <section id="news" className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-primary mb-2">LATEST NEWS</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <NewsCardSkeleton />
              <NewsCardSkeleton />
              <NewsCardSkeleton />
            </>
          ) : error ? (
            <div className="col-span-3 text-center text-red-500">
              <p>Failed to load news. Please try again later.</p>
            </div>
          ) : displayedItems && displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              <p>No news articles available at this time.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/news" className="inline-block bg-primary text-white font-montserrat font-semibold py-2 px-6 rounded-md hover:bg-darkblue transition-colors">
            VIEW ALL NEWS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

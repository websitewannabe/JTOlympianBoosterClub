import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { GalleryImage } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import OptimizedImage from "@/components/ui/optimized-image";

const GalleryItem = ({ image }: { image: GalleryImage }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        className="overflow-hidden rounded-lg shadow-sm cursor-pointer" 
        onClick={() => setOpen(true)}
      >
        <OptimizedImage 
          src={image.thumbnailUrl} 
          alt={image.alt}
          width={400}
          height={300}
          quality={85}
          format="webp"
          fit="cover"
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <div className="p-2">
            <OptimizedImage 
              src={image.fullUrl} 
              alt={image.alt}
              width={1200}
              height={800}
              quality={90}
              format="webp"
              fit="contain"
              className="w-full object-contain max-h-[70vh]"
            />
            {image.caption && (
              <p className="mt-2 text-center text-gray-700">{image.caption}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const GalleryItemSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm">
      <Skeleton className="w-full h-48" />
    </div>
  );
};

const GallerySection = ({ limit = 8 }: { limit?: number }) => {
  const { data: galleryImages, isLoading, error } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery'],
  });

  const displayedImages = galleryImages?.slice(0, limit);

  return (
    <section id="gallery" className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-primary mb-2">PHOTO GALLERY</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <>
              {[...Array(limit)].map((_, i) => (
                <GalleryItemSkeleton key={i} />
              ))}
            </>
          ) : error ? (
            <div className="col-span-full text-center text-red-500">
              <p>Failed to load gallery images. Please try again later.</p>
            </div>
          ) : displayedImages && displayedImages.length > 0 ? (
            displayedImages.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p>No gallery images available at this time.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/gallery" className="inline-block bg-primary text-white font-montserrat font-semibold py-2 px-6 rounded-md hover:bg-darkblue transition-colors">
            VIEW ALL PHOTOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

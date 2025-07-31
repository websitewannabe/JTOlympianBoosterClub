import React, { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import OptimizedImage from "@/components/ui/optimized-image";

// Import a curated selection of football images for better performance
const footballImages = [
  "/assets/JT Football Images/dsc08767_54081646701_o.jpg",
  "/assets/JT Football Images/dsc08766_54081646506_o.jpg",
  "/assets/JT Football Images/dsc08765_54082107040_o.jpg",
  "/assets/JT Football Images/dsc08764_54082107735_o.jpg",
  "/assets/JT Football Images/dsc08749-edit-edit_54081898128_o.jpg",
  "/assets/JT Football Images/dsc08731_54081649121_o.jpg",
  "/assets/JT Football Images/dsc08701_54081975054_o.jpg",
  "/assets/JT Football Images/dsc08692-edit_54081976609_o.jpg",
  "/assets/JT Football Images/dsc08661_54081649841_o.jpg",
  "/assets/JT Football Images/dsc08651_54081976489_o.jpg",
  "/assets/JT Football Images/dsc08650-edit_54081977444_o.jpg",
  "/assets/JT Football Images/dsc08647_54080776597_o.jpg",
  "/assets/JT Football Images/dsc08645_54080777457_o.jpg",
  "/assets/JT Football Images/dsc08636_54082113600_o.jpg",
  "/assets/JT Football Images/dsc08627_54081978874_o.jpg",
  "/assets/JT Football Images/dsc08605_54081980839_o.jpg",
  "/assets/JT Football Images/dsc08600-edit_54080780677_o.jpg",
  "/assets/JT Football Images/dsc08596_54081905523_o.jpg",
  "/assets/JT Football Images/dsc08594_54082116310_o.jpg",
  "/assets/JT Football Images/dsc08564_54080783157_o.jpg",
  "/assets/JT Football Images/dsc08536_54081984109_o.jpg",
  "/assets/JT Football Images/dsc08524_54081985104_o.jpg",
  "/assets/JT Football Images/dsc08510-edit_54081906918_o.jpg",
  "/assets/JT Football Images/dsc08499_54082119725_o.jpg",
  "/assets/JT Football Images/dsc08315_54081662586_o.jpg",
  "/assets/JT Football Images/dsc08296_54082125930_o.jpg",
  "/assets/JT Football Images/dsc08290_54082126855_o.jpg",
  "/assets/JT Football Images/dsc08270_54081916723_o.jpg",
  "/assets/JT Football Images/dsc08247_54081918528_o.jpg",
  "/assets/JT Football Images/dsc08213_54082127010_o.jpg",
  "/assets/JT Football Images/dsc08187_54081918413_o.jpg",
  "/assets/JT Football Images/dsc08169_54081993159_o.jpg",
  "/assets/JT Football Images/dsc08140_54081920363_o.jpg",
  "/assets/JT Football Images/dsc08056_54081919833_o.jpg",
  "/assets/JT Football Images/dsc08044_54081669401_o.jpg",
  "/assets/JT Football Images/dsc08034_54080796332_o.jpg",
  "/assets/JT Football Images/dsc08016-edit_54081998374_o.jpg",
  "/assets/JT Football Images/dsc07996_54081922128_o.jpg",
  "/assets/JT Football Images/dsc07979_54080799122_o.jpg",
  "/assets/JT Football Images/dsc07966_54081672456_o.jpg",
  "/assets/JT Football Images/dsc07956_54080799132_o.jpg",
  "/assets/JT Football Images/dsc07946_54082001944_o.jpg",
  "/assets/JT Football Images/dsc07938-edit_54082138350_o.jpg",
  "/assets/JT Football Images/dsc07924-edit_54082137995_o.jpg",
  "/assets/JT Football Images/dsc07923-edit_54081676781_o.jpg",
  "/assets/JT Football Images/dsc07919_54081929998_o.jpg",
  "/assets/JT Football Images/dsc07906-edit_54081930628_o.jpg",
  "/assets/JT Football Images/dsc07902_54082007269_o.jpg",
  "/assets/JT Football Images/dsc07895_54081931178_o.jpg",
  "/assets/JT Football Images/dsc07890-edit_54081682276_o.jpg",
  "/assets/JT Football Images/dsc07886_54082009574_o.jpg",
  "/assets/JT Football Images/dsc07662-edit_54081693956_o.jpg",
  "/assets/JT Football Images/dsc07642_54080820952_o.jpg",
  "/assets/JT Football Images/dsc07639_54080823132_o.jpg",
  "/assets/JT Football Images/dsc07598-edit_54082158495_o.jpg",
  "/assets/JT Football Images/dsc07572-edit_54080822622_o.jpg",
  "/assets/JT Football Images/dsc07563_54081949148_o.jpg",
  "/assets/JT Football Images/dsc02158_54116821560_o.jpg",
  "/assets/JT Football Images/dsc02142_54115498742_o.jpg",
  "/assets/JT Football Images/dsc02136_54116822130_o.jpg",
  "/assets/JT Football Images/dsc02123_54116357391_o.jpg",
  "/assets/JT Football Images/dsc02115_54116822215_o.jpg",
  "/assets/JT Football Images/dsc02106_54116692554_o.jpg",
  "/assets/JT Football Images/dsc02100_54116633023_o.jpg",
  "/assets/JT Football Images/dsc02099_54116633028_o.jpg",
  "/assets/JT Football Images/dsc01906_54116696064_o.jpg",
  "/assets/JT Football Images/dsc01886_54116826860_o.jpg",
  "/assets/JT Football Images/dsc01880_54116637008_o.jpg",
  "/assets/JT Football Images/dsc01845_54115503872_o.jpg",
  "/assets/JT Football Images/dsc01837_54116826540_o.jpg",
  "/assets/JT Football Images/dsc01835_54116697134_o.jpg",
  "/assets/JT Football Images/dsc01807_54116827790_o.jpg",
  "/assets/JT Football Images/dsc01787_54116697424_o.jpg",
  "/assets/JT Football Images/dsc01773_54116638148_o.jpg",
  "/assets/JT Football Images/dsc01747_54116638453_o.jpg",
  "/assets/JT Football Images/dsc01729_54116363726_o.jpg",
  "/assets/JT Football Images/209-champs_54081763157_o.jpg",
];

const FootballImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const IMAGES_PER_BATCH = 12;
  const startIndex = useRef(0);

  // Initialize with first batch
  useEffect(() => {
    const initialBatch = footballImages.slice(0, IMAGES_PER_BATCH);
    setVisibleImages(initialBatch);
    startIndex.current = IMAGES_PER_BATCH;
    setHasMore(footballImages.length > IMAGES_PER_BATCH);
  }, []);

  const loadMoreImages = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate network delay for smooth loading animation
    setTimeout(() => {
      const nextBatch = footballImages.slice(
        startIndex.current,
        startIndex.current + IMAGES_PER_BATCH
      );
      
      if (nextBatch.length > 0) {
        setVisibleImages(prev => [...prev, ...nextBatch]);
        startIndex.current += IMAGES_PER_BATCH;
        setHasMore(startIndex.current < footballImages.length);
      } else {
        setHasMore(false);
      }
      
      setIsLoading(false);
    }, 300);
  }, [isLoading, hasMore]);

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreImages();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoading, loadMoreImages]);

  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages(prev => new Set([...prev, imageSrc]));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="old-sport-font text-3xl text-primary mb-2">
            FOOTBALL GALLERY
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relive the excitement and passion of Olympian football through our collection of action shots and memorable moments.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Responsive Masonry Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {visibleImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`break-inside-avoid overflow-hidden rounded-lg shadow-lg cursor-pointer 
                  transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl
                  ${loadedImages.has(image) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                  }`}
                onClick={() => setSelectedImage(image)}
                style={{
                  animationDelay: `${(index % IMAGES_PER_BATCH) * 100}ms`,
                }}
              >
                <OptimizedImage
                  src={image}
                  alt={`Olympian Football - Image ${index + 1}`}
                  width={400}
                  height={300}
                  quality={75}
                  format="webp"
                  fit="cover"
                  className="w-full h-auto object-cover"
                  onLoad={() => handleImageLoad(image)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Loading indicator and infinite scroll trigger */}
          <div 
            ref={loadMoreRef}
            className="flex justify-center items-center py-8"
          >
            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <span>Loading more images...</span>
              </div>
            )}
            {!hasMore && visibleImages.length > 0 && (
              <p className="text-gray-500 text-center">
                You've seen all {footballImages.length} images in our gallery!
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Click on any image to view it in full size • Images load as you scroll
          </p>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            <div className="relative">
              {selectedImage && (
                <OptimizedImage
                  src={selectedImage}
                  alt="Olympian Football - Full Size"
                  width={1200}
                  height={800}
                  quality={95}
                  format="webp"
                  fit="contain"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                ×
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FootballImageGallery; 
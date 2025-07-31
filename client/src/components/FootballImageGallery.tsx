import React, { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import OptimizedImage from "@/components/ui/optimized-image";

// Complete collection of all available football images (118 total)
const footballImages = [
"/assets/JT Football Images/209-champs_54081763157_o.jpg",
"/assets/JT Football Images/DJV02395.jpg",
"/assets/JT Football Images/DJV02450.jpg",
"/assets/JT Football Images/DJV02462.jpg",
"/assets/JT Football Images/DJV02524.jpg",
"/assets/JT Football Images/DJV02601.jpg",
"/assets/JT Football Images/DJV02610.jpg",
"/assets/JT Football Images/DJV02636.jpg",
"/assets/JT Football Images/DJV02649.jpg",
"/assets/JT Football Images/DJV02679.jpg",
"/assets/JT Football Images/DJV02707.jpg",
"/assets/JT Football Images/DJV02712.jpg",
"/assets/JT Football Images/DJV02783.jpg",
"/assets/JT Football Images/DJV02811.jpg",
"/assets/JT Football Images/DJV02837.jpg",
"/assets/JT Football Images/DJV02854.jpg",
"/assets/JT Football Images/DJV02862.jpg",
"/assets/JT Football Images/DJV02873.jpg",
"/assets/JT Football Images/DJV02883.jpg",
"/assets/JT Football Images/DJV02895.jpg",
"/assets/JT Football Images/DJV02918.jpg",
"/assets/JT Football Images/DJV02924.jpg",
"/assets/JT Football Images/DJV02933.jpg",
"/assets/JT Football Images/DJV02935.jpg",
"/assets/JT Football Images/DJV03007.jpg",
"/assets/JT Football Images/DJV03015.jpg",
"/assets/JT Football Images/DJV03041.jpg",
"/assets/JT Football Images/DJV03058.jpg",
"/assets/JT Football Images/DJV03073.jpg",
"/assets/JT Football Images/DJV03105.jpg",
"/assets/JT Football Images/DJV03285.jpg",
"/assets/JT Football Images/DJV03318.jpg",
"/assets/JT Football Images/DJV03533.jpg",
"/assets/JT Football Images/DJV03546.jpg",
"/assets/JT Football Images/DJV03558.jpg",
"/assets/JT Football Images/DJV03570.jpg",
"/assets/JT Football Images/DJV03574.jpg",
"/assets/JT Football Images/DJV03592.jpg",
"/assets/JT Football Images/DJV03597.jpg",
"/assets/JT Football Images/DJV03603.jpg",
"/assets/JT Football Images/DJV03629.jpg",
"/assets/JT Football Images/DJV03686.jpg",
"/assets/JT Football Images/dsc01729_54116363726_o.jpg",
"/assets/JT Football Images/dsc01747_54116638453_o.jpg",
"/assets/JT Football Images/dsc01773_54116638148_o.jpg",
"/assets/JT Football Images/dsc01787_54116697424_o.jpg",
"/assets/JT Football Images/dsc01807_54116827790_o.jpg",
"/assets/JT Football Images/dsc01835_54116697134_o.jpg",
"/assets/JT Football Images/dsc01837_54116826540_o.jpg",
"/assets/JT Football Images/dsc01845_54115503872_o.jpg",
"/assets/JT Football Images/dsc01880_54116637008_o.jpg",
"/assets/JT Football Images/dsc01886_54116826860_o.jpg",
"/assets/JT Football Images/dsc01906_54116696064_o.jpg",
"/assets/JT Football Images/dsc02099_54116633028_o.jpg",
"/assets/JT Football Images/dsc02100_54116633023_o.jpg",
"/assets/JT Football Images/dsc02106_54116692554_o.jpg",
"/assets/JT Football Images/dsc02115_54116822215_o.jpg",
"/assets/JT Football Images/dsc02123_54116357391_o.jpg",
"/assets/JT Football Images/dsc02136_54116822130_o.jpg",
"/assets/JT Football Images/dsc02142_54115498742_o.jpg",
"/assets/JT Football Images/dsc02158_54116821560_o.jpg",
"/assets/JT Football Images/dsc07563_54081949148_o.jpg",
"/assets/JT Football Images/dsc07572-edit_54080822622_o.jpg",
"/assets/JT Football Images/dsc07598-edit_54082158495_o.jpg",
"/assets/JT Football Images/dsc07639_54080823132_o.jpg",
"/assets/JT Football Images/dsc07642_54080820952_o.jpg",
"/assets/JT Football Images/dsc07662-edit_54081693956_o.jpg",
"/assets/JT Football Images/dsc07886_54082009574_o.jpg",
"/assets/JT Football Images/dsc07890-edit_54081682276_o.jpg",
"/assets/JT Football Images/dsc07895_54081931178_o.jpg",
"/assets/JT Football Images/dsc07902_54082007269_o.jpg",
"/assets/JT Football Images/dsc07906-edit_54081930628_o.jpg",
"/assets/JT Football Images/dsc07919_54081929998_o.jpg",
"/assets/JT Football Images/dsc07923-edit_54081676781_o.jpg",
"/assets/JT Football Images/dsc07924-edit_54082137995_o.jpg",
"/assets/JT Football Images/dsc07938-edit_54082138350_o.jpg",
"/assets/JT Football Images/dsc07946_54082001944_o.jpg",
"/assets/JT Football Images/dsc07956_54080799132_o.jpg",
"/assets/JT Football Images/dsc07966_54081672456_o.jpg",
"/assets/JT Football Images/dsc07979_54080799122_o.jpg",
"/assets/JT Football Images/dsc07996_54081922128_o.jpg",
"/assets/JT Football Images/dsc08016-edit_54081998374_o.jpg",
"/assets/JT Football Images/dsc08034_54080796332_o.jpg",
"/assets/JT Football Images/dsc08044_54081669401_o.jpg",
"/assets/JT Football Images/dsc08056_54081919833_o.jpg",
"/assets/JT Football Images/dsc08140_54081920363_o.jpg",
"/assets/JT Football Images/dsc08169_54081993159_o.jpg",
"/assets/JT Football Images/dsc08187_54081918413_o.jpg",
"/assets/JT Football Images/dsc08213_54082127010_o.jpg",
"/assets/JT Football Images/dsc08247_54081918528_o.jpg",
"/assets/JT Football Images/dsc08270_54081916723_o.jpg",
"/assets/JT Football Images/dsc08290_54082126855_o.jpg",
"/assets/JT Football Images/dsc08296_54082125930_o.jpg",
"/assets/JT Football Images/dsc08315_54081662586_o.jpg",
"/assets/JT Football Images/dsc08499_54082119725_o.jpg",
"/assets/JT Football Images/dsc08510-edit_54081906918_o.jpg",
"/assets/JT Football Images/dsc08524_54081985104_o.jpg",
"/assets/JT Football Images/dsc08536_54081984109_o.jpg",
"/assets/JT Football Images/dsc08564_54080783157_o.jpg",
"/assets/JT Football Images/dsc08594_54082116310_o.jpg",
"/assets/JT Football Images/dsc08596_54081905523_o.jpg",
"/assets/JT Football Images/dsc08600-edit_54080780677_o.jpg",
"/assets/JT Football Images/dsc08605_54081980839_o.jpg",
"/assets/JT Football Images/dsc08627_54081978874_o.jpg",
"/assets/JT Football Images/dsc08636_54082113600_o.jpg",
"/assets/JT Football Images/dsc08645_54080777457_o.jpg",
"/assets/JT Football Images/dsc08647_54080776597_o.jpg",
"/assets/JT Football Images/dsc08650-edit_54081977444_o.jpg",
"/assets/JT Football Images/dsc08651_54081976489_o.jpg",
"/assets/JT Football Images/dsc08661_54081649841_o.jpg",
"/assets/JT Football Images/dsc08692-edit_54081976609_o.jpg",
"/assets/JT Football Images/dsc08701_54081975054_o.jpg",
"/assets/JT Football Images/dsc08731_54081649121_o.jpg",
"/assets/JT Football Images/dsc08749-edit-edit_54081898128_o.jpg",
"/assets/JT Football Images/dsc08764_54082107735_o.jpg",
"/assets/JT Football Images/dsc08765_54082107040_o.jpg",
"/assets/JT Football Images/dsc08766_54081646506_o.jpg",
"/assets/JT Football Images/dsc08767_54081646701_o.jpg",
];

/**
 * Football Image Gallery Component
 * 
 * Features:
 * - Displays images in random order (shuffled on each page load)
 * - Progressive loading with user-controlled "Load More" button
 * - Responsive batch sizes: 8 images on desktop, 3 on mobile
 * - Lazy loading and staggered animations (only new images animate)
 * - Static positioning for already loaded images (no re-shuffling)
 * - Interactive lightbox with full gallery navigation
 * - Navigate through entire collection with ← → keys or click arrows
 * - Images lazy load as accessed in lightbox
 * - Image counter shows position in full gallery
 * - Responsive masonry grid layout (1-4 columns based on screen size)
 */
const FootballImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [previousVisibleCount, setPreviousVisibleCount] = useState(0);

  const IMAGES_PER_BATCH_DESKTOP = 8;
  const IMAGES_PER_BATCH_MOBILE = 3;
  const startIndex = useRef(0);

  // Responsive hook to detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getCurrentBatchSize = useCallback(() => {
    return isMobile ? IMAGES_PER_BATCH_MOBILE : IMAGES_PER_BATCH_DESKTOP;
  }, [isMobile]);

  // Shuffle array using Fisher-Yates algorithm
  const shuffleArray = useCallback((array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Initialize with shuffled images and first batch
  useEffect(() => {
    const shuffled = shuffleArray(footballImages);
    setShuffledImages(shuffled);
    const batchSize = getCurrentBatchSize();
    const initialBatch = shuffled.slice(0, batchSize);
    setPreviousVisibleCount(0); // Reset for initial load
    setVisibleImages(initialBatch);
    startIndex.current = batchSize;
    setHasMore(shuffled.length > batchSize);
  }, [shuffleArray, getCurrentBatchSize]);

  const loadMoreImages = useCallback(() => {
    if (isLoading || !hasMore || shuffledImages.length === 0) return;
    
    setIsLoading(true);
    
    // Simulate network delay for smooth loading animation
    setTimeout(() => {
      const batchSize = getCurrentBatchSize();
      const nextBatch = shuffledImages.slice(
        startIndex.current,
        startIndex.current + batchSize
      );
      
      if (nextBatch.length > 0) {
        // Store the current count before adding new images
        setPreviousVisibleCount(visibleImages.length);
        setVisibleImages(prev => [...prev, ...nextBatch]);
        startIndex.current += batchSize;
        setHasMore(startIndex.current < shuffledImages.length);
      } else {
        setHasMore(false);
      }
      
      setIsLoading(false);
    }, 300);
  }, [isLoading, hasMore, shuffledImages, getCurrentBatchSize, visibleImages.length]);

  const handleImageLoad = useCallback((imageSrc: string) => {
    setLoadedImages(prev => new Set([...prev, imageSrc]));
  }, []);

  // Get current image index in full shuffled gallery for navigation
  const getCurrentImageIndex = useCallback(() => {
    if (!selectedImage || shuffledImages.length === 0) return -1;
    return shuffledImages.findIndex(img => img === selectedImage);
  }, [selectedImage, shuffledImages]);

  // Navigate to previous/next image (works with full gallery)
  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (shuffledImages.length === 0) return;
    
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : shuffledImages.length - 1;
    } else {
      newIndex = currentIndex < shuffledImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    // Set the new image - it will lazy load when displayed
    setSelectedImage(shuffledImages[newIndex]);
  }, [getCurrentImageIndex, shuffledImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          navigateImage('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateImage('next');
          break;
        case 'Escape':
          e.preventDefault();
          setSelectedImage(null);
          break;
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, navigateImage]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="old-sport-font text-3xl text-primary mb-2">
            FOOTBALL GALLERY
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relive the excitement and passion of Olympian football through our collection of action shots and memorable moments, displayed in random order for a fresh experience each visit. Images load in smaller batches on mobile for faster browsing.
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
                  // Only apply animation delay to newly loaded images
                  animationDelay: index >= previousVisibleCount 
                    ? `${((index - previousVisibleCount) % getCurrentBatchSize()) * 150}ms`
                    : '0ms',
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

          {/* Load More Button */}
          <div className="flex justify-center items-center py-8">
            {hasMore && !isLoading && (
              <button
                onClick={loadMoreImages}
                className="bg-primary hover:bg-primary/90 text-white font-montserrat font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Load {Math.min(getCurrentBatchSize(), shuffledImages.length - visibleImages.length)} More Images
              </button>
            )}
            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <span>Loading more images...</span>
              </div>
            )}
            {!hasMore && visibleImages.length > 0 && (
              <div className="text-center">
                <p className="text-gray-500 mb-2">
                  You've seen all {shuffledImages.length} images in our gallery!
                </p>
                <p className="text-sm text-gray-400">
                  Click any image to view it in full size
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Click on any image to browse the entire gallery in full size • Use "Load More" to see additional preview images
          </p>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0">
            {/* Accessibility elements for screen readers */}
            <DialogTitle className="sr-only">
              Football Gallery Lightbox - Image {getCurrentImageIndex() + 1} of {shuffledImages.length}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Viewing football image {getCurrentImageIndex() + 1} of {shuffledImages.length}. Use left and right arrow keys or click navigation arrows to browse through the gallery. Press Escape to close.
            </DialogDescription>
            
            <div className="relative group">
              {selectedImage && (
                <OptimizedImage
                  src={selectedImage}
                  alt={`Olympian Football - Image ${getCurrentImageIndex() + 1} of ${shuffledImages.length}`}
                  width={1200}
                  height={800}
                  quality={95}
                  format="webp"
                  fit="contain"
                  className="w-full h-auto max-h-[80vh] object-contain"
                  loading="lazy"
                />
              )}
              
              {/* Navigation Arrows */}
              {shuffledImages.length > 1 && (
                <>
                  {/* Previous Arrow */}
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Next Arrow */}
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {getCurrentImageIndex() + 1} of {shuffledImages.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FootballImageGallery;
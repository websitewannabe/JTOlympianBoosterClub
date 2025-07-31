import React, { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import OptimizedImage from "@/components/ui/optimized-image";

// Complete collection of all available sideline cheer images (64 total)
const cheerImages = [
"/assets/JT Sideline Cheer Images/DJV02571.jpg",
"/assets/JT Sideline Cheer Images/DJV02968.jpg",
"/assets/JT Sideline Cheer Images/DJV02975.jpg",
"/assets/JT Sideline Cheer Images/DJV03166.jpg",
"/assets/JT Sideline Cheer Images/DJV03205.jpg",
"/assets/JT Sideline Cheer Images/DJV03216.jpg",
"/assets/JT Sideline Cheer Images/DJV03227.jpg",
"/assets/JT Sideline Cheer Images/DJV03251.jpg",
"/assets/JT Sideline Cheer Images/DJV03259.jpg",
"/assets/JT Sideline Cheer Images/DJV03378.jpg",
"/assets/JT Sideline Cheer Images/DJV03388.jpg",
"/assets/JT Sideline Cheer Images/DJV03393.jpg",
"/assets/JT Sideline Cheer Images/DJV03404.jpg",
"/assets/JT Sideline Cheer Images/DJV03407.jpg",
"/assets/JT Sideline Cheer Images/DJV03435.jpg",
"/assets/JT Sideline Cheer Images/DJV03457.jpg",
"/assets/JT Sideline Cheer Images/DJV03477.jpg",
"/assets/JT Sideline Cheer Images/DJV03486.jpg",
"/assets/JT Sideline Cheer Images/DJV03528.jpg",
"/assets/JT Sideline Cheer Images/DJV03706.jpg",
"/assets/JT Sideline Cheer Images/dsc01827_54116362606_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01911_54116636753_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01912_54116636473_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01924_54116636063_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01931_54116695469_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01935_54116635638_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01944_54116824625_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01945_54116824395_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01958_54116823755_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01963_54116359126_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01967_54115500942_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01972_54115500777_o.jpg",
"/assets/JT Sideline Cheer Images/dsc01990_54116693069_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02013_54116693359_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02019-edit_54116842300_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02178_54116691354_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02206-edit_54115498107_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02213_54116691284_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02225_54116820470_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02243_54116630508_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02249_54116630543_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02272_54116690279_o.jpg",
"/assets/JT Sideline Cheer Images/dsc02283_54116630583_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07701_54082154775_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07707_54081940073_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07729_54081938393_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07736_54081687211_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07743_54082013794_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07756_54080817772_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07784_54081944138_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07791_54082152645_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07799_54082146665_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07824_54080809832_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07834_54080807747_o.jpg",
"/assets/JT Sideline Cheer Images/dsc07851-edit_54080809187_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08324_54082125790_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08328-edit_54082125670_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08336_54082122940_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08359-edit_54081910848_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08365-edit_54080786337_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08379_54081987549_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08405_54082120920_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08416-2-edit_54082120115_o.jpg",
"/assets/JT Sideline Cheer Images/dsc08432_54081985099_o.jpg",
];

/**
 * Sideline Cheer Image Gallery Component
 * 
 * Features:
 * - Displays images in random order (shuffled on each page load)
 * - Progressive loading with user-controlled "Load More" button
 * - Responsive batch sizes: 8 images on desktop, 3 on mobile
 * - Lazy loading and staggered animations (only new images animate)
 * - Static positioning for already loaded images (no re-shuffling)
 * - Interactive lightbox with full gallery navigation (all 64 images)
 * - Navigate through entire collection with ← → keys or click arrows
 * - Images lazy load as accessed in lightbox
 * - Image counter shows position in full gallery
 * - Responsive masonry grid layout (1-4 columns based on screen size)
 */
const CheerImageGallery = () => {
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
    const shuffled = shuffleArray(cheerImages);
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
            SIDELINE CHEER GALLERY
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrate the spirit and energy of Olympian sideline cheer through our collection of action shots and memorable moments, displayed in random order for a fresh experience each visit. Images load in smaller batches on mobile for faster browsing.
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
                  alt={`Olympian Sideline Cheer - Image ${index + 1}`}
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
              Sideline Cheer Gallery Lightbox - Image {getCurrentImageIndex() + 1} of {shuffledImages.length}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Viewing sideline cheer image {getCurrentImageIndex() + 1} of {shuffledImages.length}. Use left and right arrow keys or click navigation arrows to browse through the gallery. Press Escape to close.
            </DialogDescription>
            
            <div className="relative group">
              {selectedImage && (
                <OptimizedImage
                  src={selectedImage}
                  alt={`Olympian Sideline Cheer - Image ${getCurrentImageIndex() + 1} of ${shuffledImages.length}`}
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

export default CheerImageGallery; 
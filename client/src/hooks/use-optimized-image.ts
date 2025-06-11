
interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  position?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
}

export const useOptimizedImage = () => {
  const generateUrl = (src: string, options: ImageOptions = {}) => {
    // Check if the image is already a full URL
    const isExternalUrl = src.startsWith('http://') || src.startsWith('https://');
    
    if (isExternalUrl) {
      return src;
    }

    const {
      width,
      height,
      quality = 80,
      format = 'auto',
      fit = 'cover',
      position = 'center'
    } = options;

    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    if (format) params.append('f', format);
    if (fit) params.append('fit', fit);
    if (position) params.append('position', position);

    // Remove leading slash if present for consistent URL building
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    
    return `/.netlify/images?url=${encodeURIComponent(`/${cleanSrc}`)}&${params.toString()}`;
  };

  const generateSrcSet = (src: string, sizes: number[], options: Omit<ImageOptions, 'width'> = {}) => {
    return sizes
      .map(size => `${generateUrl(src, { ...options, width: size })} ${size}w`)
      .join(', ');
  };

  return { generateUrl, generateSrcSet };
};

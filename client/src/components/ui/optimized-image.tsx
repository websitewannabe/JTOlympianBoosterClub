
import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  position?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
  loading?: 'lazy' | 'eager';
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  format = 'auto',
  fit = 'cover',
  position = 'center',
  loading = 'lazy',
  className,
  ...props
}) => {
  // Check if the image is already a full URL or relative path
  const isExternalUrl = src.startsWith('http://') || src.startsWith('https://');
  
  // If it's an external URL, return regular img tag
  if (isExternalUrl) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        {...props}
      />
    );
  }

  // Check if we're in production (Netlify) or development (Replit)
  const isProduction = import.meta.env.PROD;
  
  // Build Netlify Image CDN URL for production
  const buildNetlifyImageUrl = () => {
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

  // Use Netlify CDN in production, original src in development
  const optimizedSrc = isProduction ? buildNetlifyImageUrl() : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      loading={loading}
      className={cn(className)}
      {...props}
    />
  );
};

export default OptimizedImage;

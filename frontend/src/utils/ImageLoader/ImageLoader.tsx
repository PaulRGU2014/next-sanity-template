import Image from "next/image";
import React from 'react';

interface ImageLoaderProps extends React.HTMLProps<HTMLDivElement> {
  className: string;
  style?: object;
  objectFit?: string;
  objectPosition?: string;
  priority?: boolean;
  src: string;
  alt: string;
}

const ImageLoader = React.forwardRef<HTMLDivElement, ImageLoaderProps>(
  ({ className, style, src, alt, objectFit="cover", objectPosition, priority, ...rest }, ref) => {

    return (
      <div className={className} 
        style={style}
        ref={ref}
        {...rest}
      >
        <Image 
          src={src}
          alt={alt ? alt : 'image'} 
          fill={true}
          sizes="100%"
          style={{
            objectFit: objectFit as React.CSSProperties['objectFit'],
            objectPosition: objectPosition as React.CSSProperties['objectPosition']
          }}
          priority={priority ? priority : false}
        />
      </div>
    );
  }
);

ImageLoader.displayName = 'ImageLoader';

export default ImageLoader;
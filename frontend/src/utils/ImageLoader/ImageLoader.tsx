import Image, { ImageProps} from "next/image";
import { urlForImage } from "@/sanity/lib/client";
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

    const imgSrc = urlForImage(src).url();

    return (
      <div className={className} 
        style={style}
        ref={ref}
        {...rest}
      >
        <Image 
          src={imgSrc}
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
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`image ${className}`}
      width={width}
      height={height}
    />
  );
};
export default Image;

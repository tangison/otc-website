import Image from "next/image";

export default function Figure({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <figure className={`img-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {caption ? <figcaption className="caption-chip">{caption}</figcaption> : null}
    </figure>
  );
}

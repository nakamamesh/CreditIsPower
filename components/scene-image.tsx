import Image from "next/image";

type SceneImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** CSS object-position, e.g. "center 20%" — keeps faces in frame when cropping */
  objectPosition?: string;
};

export function SceneImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 720px",
  objectPosition = "center center",
}: SceneImageProps) {
  return (
    <div
      className={`relative aspect-[3/2] overflow-hidden rounded-sm bg-navy/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}

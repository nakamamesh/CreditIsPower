import Image from "next/image";

type SceneImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function SceneImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 720px",
}: SceneImageProps) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-sm bg-navy/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

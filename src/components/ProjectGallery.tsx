import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  alt: string;
}

const ProjectGallery = ({ images, alt }: ProjectGalleryProps) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative border border-border/70">
        <img
          src={images[active]}
          alt={alt}
          loading="lazy"
          className="block w-full"
        />
        {/* gold corner accents */}
        <span className="pointer-events-none absolute -left-px -top-px h-5 w-[2px] bg-metallic" />
        <span className="pointer-events-none absolute -left-px -top-px h-[2px] w-5 bg-metallic" />
        <span className="pointer-events-none absolute -bottom-px -right-px h-5 w-[2px] bg-metallic" />
        <span className="pointer-events-none absolute -bottom-px -right-px h-[2px] w-5 bg-metallic" />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2.5">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${alt} — image ${i + 1}`}
              className={`overflow-hidden border transition-all duration-200 ${
                i === active
                  ? 'border-gold/70 opacity-100'
                  : 'border-border/60 opacity-50 hover:opacity-90'
              }`}
            >
              <img src={img} alt="" loading="lazy" className="h-12 w-20 object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;

import { memo, useState, useMemo } from "react";

const PHOTOS_PER_PAGE = 6;
const VIDEOS_PER_PAGE = 4;

function MediaGalleryComponent({ photos, videos }) {
  const [currentPhotoPage, setCurrentPhotoPage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [photoTransition, setPhotoTransition] = useState("idle");
  const [videoTransition, setVideoTransition] = useState("idle");

  const totalPhotoPages = useMemo(() => {
    return Math.ceil(photos.length / PHOTOS_PER_PAGE);
  }, [photos.length]);

  const totalVideoPages = useMemo(() => {
    return Math.ceil(videos.length / VIDEOS_PER_PAGE);
  }, [videos.length]);

  const paginatedPhotos = useMemo(() => {
    const startIndex = (currentPhotoPage - 1) * PHOTOS_PER_PAGE;
    const endIndex = startIndex + PHOTOS_PER_PAGE;
    return photos.slice(startIndex, endIndex);
  }, [photos, currentPhotoPage]);

  const paginatedVideos = useMemo(() => {
    const startIndex = (currentVideoPage - 1) * VIDEOS_PER_PAGE;
    const endIndex = startIndex + VIDEOS_PER_PAGE;
    return videos.slice(startIndex, endIndex);
  }, [videos, currentVideoPage]);

  const handlePreviousPhotoPage = () => {
    if (currentPhotoPage > 1) {
      setPhotoTransition("fading");
      setTimeout(() => {
        setCurrentPhotoPage((previous) => Math.max(1, previous - 1));
        setPhotoTransition("idle");
      }, 200);
    }
  };

  const handleNextPhotoPage = () => {
    if (currentPhotoPage < totalPhotoPages) {
      setPhotoTransition("fading");
      setTimeout(() => {
        setCurrentPhotoPage((previous) => Math.min(totalPhotoPages, previous + 1));
        setPhotoTransition("idle");
      }, 200);
    }
  };

  const handlePhotoPageChange = (page) => {
    if (page !== currentPhotoPage) {
      setPhotoTransition("fading");
      setTimeout(() => {
        setCurrentPhotoPage(page);
        setPhotoTransition("idle");
      }, 200);
    }
  };

  const handlePreviousVideoPage = () => {
    if (currentVideoPage > 1) {
      setVideoTransition("fading");
      setTimeout(() => {
        setCurrentVideoPage((previous) => Math.max(1, previous - 1));
        setVideoTransition("idle");
      }, 200);
    }
  };

  const handleNextVideoPage = () => {
    if (currentVideoPage < totalVideoPages) {
      setVideoTransition("fading");
      setTimeout(() => {
        setCurrentVideoPage((previous) => Math.min(totalVideoPages, previous + 1));
        setVideoTransition("idle");
      }, 200);
    }
  };

  const handleVideoPageChange = (page) => {
    if (page !== currentVideoPage) {
      setVideoTransition("fading");
      setTimeout(() => {
        setCurrentVideoPage(page);
        setVideoTransition("idle");
      }, 200);
    }
  };

  return (
    <section className="mt-24 space-y-16">
      <div
        id="fotos"
        className="relative overflow-visible rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-sm transition-colors duration-500 sm:px-10"
      >
        <header className="relative space-y-3 text-left">
          <span className="section-eyebrow inline-flex">Galería fotográfica</span>
          <h2 className="font-display text-3xl text-slate-900">
            Los momentos que definen cada carrera
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Escenarios nocturnos, obstáculos acuáticos y finales épicos que
            capturan la camaradería de nuestra comunidad OCR.
          </p>
        </header>
        <div className="relative mt-10 -mx-8 sm:-mx-10">
          {totalPhotoPages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePreviousPhotoPage}
                disabled={currentPhotoPage === 1}
                className="group absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-50 hover:shadow-xl disabled:pointer-events-none disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-slate-200 disabled:hover:bg-white/95"
                aria-label="Página anterior"
              >
                <svg className="h-6 w-6 text-slate-600 transition-colors duration-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNextPhotoPage}
                disabled={currentPhotoPage === totalPhotoPages}
                className="group absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-50 hover:shadow-xl disabled:pointer-events-none disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-slate-200 disabled:hover:bg-white/95"
                aria-label="Página siguiente"
              >
                <svg className="h-6 w-6 text-slate-600 transition-colors duration-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          <div className={`grid auto-rows-[16rem] gap-6 md:grid-cols-3 transition-opacity duration-300 px-20 ${photoTransition === "fading" ? "opacity-0" : "opacity-100"}`}>
            {paginatedPhotos.map((resource, index) => {
            const absoluteIndex = (currentPhotoPage - 1) * PHOTOS_PER_PAGE + index;
            const isHighlight = absoluteIndex === 0;
            return (
              <figure
                key={resource.id}
                className={`group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-md ${isHighlight ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <img
                  src={resource.src}
                  alt={resource.description}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-80 mix-blend-multiply transition duration-500 group-hover:opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 space-y-2 px-6 pb-6 text-white">
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <p className="text-sm text-white/80">{resource.description}</p>
                </figcaption>
                <div className="absolute left-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-sm transition duration-500 group-hover:bg-brand-500 group-hover:text-white">
                  OCR
                </div>
              </figure>
            );
          })}
          </div>
          {totalPhotoPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: totalPhotoPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePhotoPageChange(page)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPhotoPage === page
                      ? "w-8 bg-blue-500 shadow-md"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir a página ${page}`}
                  aria-current={currentPhotoPage === page ? "page" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        id="videos"
        className="relative overflow-visible rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-sm transition-colors duration-500 sm:px-10"
      >
        <header className="relative space-y-3 text-left">
          <span className="badge-soft border-brand-200 bg-brand-50 text-xs uppercase tracking-[0.35em] text-brand-600">
            Videos destacados
          </span>
          <h2 className="font-display text-3xl text-slate-900">
            Revive la adrenalina en formato inmersivo
          </h2>
          <p className="max-w-2xl text-base text-slate-600">
            Entrenamientos, testimonios y resúmenes que te preparan para tu
            próxima batalla. Ajusta tu estrategia con cada visualización.
          </p>
        </header>
        <div className="relative mt-10 -mx-8 sm:-mx-10">
          {totalVideoPages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePreviousVideoPage}
                disabled={currentVideoPage === 1}
                className="group absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-50 hover:shadow-xl disabled:pointer-events-none disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-slate-200 disabled:hover:bg-white/95"
                aria-label="Página anterior"
              >
                <svg className="h-6 w-6 text-slate-600 transition-colors duration-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNextVideoPage}
                disabled={currentVideoPage === totalVideoPages}
                className="group absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-50 hover:shadow-xl disabled:pointer-events-none disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-slate-200 disabled:hover:bg-white/95"
                aria-label="Página siguiente"
              >
                <svg className="h-6 w-6 text-slate-600 transition-colors duration-300 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          <div className={`grid gap-6 md:grid-cols-2 transition-opacity duration-300 px-20 ${videoTransition === "fading" ? "opacity-0" : "opacity-100"}`}>
            {paginatedVideos.map((video) => (
            <article
              key={video.id}
              className="group flex flex-col gap-4 rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden rounded-[20px] border border-slate-200 bg-slate-100">
                <iframe
                  title={video.title}
                  src={video.embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 shadow-sm">
                  Play
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-600">{video.description}</p>
              </div>
            </article>
          ))}
          </div>
          {totalVideoPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: totalVideoPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handleVideoPageChange(page)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentVideoPage === page
                      ? "w-8 bg-blue-500 shadow-md"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir a página ${page}`}
                  aria-current={currentVideoPage === page ? "page" : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export const MediaGallery = memo(MediaGalleryComponent);


import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  ExternalLink,
  Github,
  X,
  ArrowLeftCircle,
  ArrowRightCircle,
} from "lucide-react";

export const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-background rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-border">
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b">
            <h3 className="text-2xl font-semibold text-foreground">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-muted-foreground hover:text-foreground transition" />
            </button>
          </div>

          {/* Swiper Carousel */}
          {project.extraImages?.length > 0 && (
            <div className="relative">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                keyboard={{ enabled: true }}
                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                className="w-full h-72"
              >
                {project.extraImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Arrows */}
              {/* Custom Navigation Arrows */}
              <button
                className="swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:scale-105 transition-all shadow-md"
                aria-label="Previous Slide"
              >
                <ArrowLeftCircle className="w-5 h-5" />
              </button>

              <button
                className="swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/40 hover:scale-105 transition-all shadow-md"
                aria-label="Next Slide"
              >
                <ArrowRightCircle className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Content */}
          <div className="p-5 space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <ExternalLink size={18} />
                <span className="text-sm">Live Demo</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
              >
                <Github size={18} />
                <span className="text-sm">Source Code</span>
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

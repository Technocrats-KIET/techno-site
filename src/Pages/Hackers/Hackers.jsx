import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Hackers.css";
import { events } from "../../data/hackers";

const Hackers = () => {
  const { name } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const event = events.find((e) => e.name === name);

  if (!event) {
    return <div className="event-not-found">Event not found!</div>;
  }

  const images = event.images || [];
  const total = images.length;

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  const leftIndex = (activeIndex - 1 + total) % total;
  const rightIndex = (activeIndex + 1) % total;

  return (
    <div className="event-page">
      <h1 className="event-title">{event.name}</h1>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn carousel-btn--left"
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-track">
          {total > 1 && (
            <div
              className="carousel-slide carousel-slide--side carousel-slide--left"
              onClick={prev}
            >
              <img
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                src={images[leftIndex]}
                alt={`slide-${leftIndex}`}
              />
              <div className="slide-overlay" />
            </div>
          )}

          <div className="carousel-slide carousel-slide--center">
            <img
              width="1200"
              height="800"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              src={images[activeIndex]}
              alt={`slide-${activeIndex}`}
            />
            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeIndex ? "dot--active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {total > 2 && (
            <div
              className="carousel-slide carousel-slide--side carousel-slide--right"
              onClick={next}
            >
              <img
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                src={images[rightIndex]}
                alt={`slide-${rightIndex}`}
              />
              <div className="slide-overlay" />
            </div>
          )}
        </div>

        <button
          className="carousel-btn carousel-btn--right"
          onClick={next}
          aria-label="Next"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {event.description && (
        <div className="event-description">
          <p>{event.description}</p>
        </div>
      )}
    </div>
  );
};

export default Hackers;

import React, { useState, useRef } from 'react';
import { X, Play, MessageSquare, ChevronRight, Video } from 'lucide-react';
import './VideoBubble.css';

const VideoBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Small delay to ensure video element is rendered
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(err => console.log("Video play failed:", err));
        }
      }, 100);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  if (isMinimized) return null;

  return (
    <div className={`video-bubble-container ${isOpen ? 'is-open' : ''}`}>
      {/* Small Bubble State */}
      {!isOpen && (
        <div className="bubble-trigger pulse-glow" onClick={toggleOpen}>
          <div className="bubble-video-preview">
             <video 
              autoPlay 
              muted 
              loop 
              playsInline
              src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-a-coffee-shop-4340-large.mp4"
            />
          </div>
          <div className="bubble-overlay">
            <Video size={20} className="text-white" />
          </div>
        </div>
      )}

      {/* Expanded State */}
      {isOpen && (
        <div className="video-expanded-card glass-card landscape">
          <button className="close-btn" onClick={handleClose}>
            <X size={20} />
          </button>
          
          <div className="video-wrapper">
            <video 
              ref={videoRef}
              controls
              autoPlay
              src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-a-coffee-shop-4340-large.mp4"
            />
            
            {/* Sidebar Icons */}
            <div className="video-sidebar">
              <div className="sidebar-icon-bubble" title="My Projects">
                <Video size={18} />
              </div>
              <div className="sidebar-icon-bubble" title="Podcast/Talks">
                <Play size={18} />
              </div>
              <div className="sidebar-icon-bubble" title="Download Resume">
                <MessageSquare size={18} />
              </div>
            </div>

            {/* Bottom Pills (A, B, C) */}
            <div className="video-pill-actions">
              <button className="pill-btn">
                <span className="pill-letter">A</span>
                <span className="pill-text">Why hire me?</span>
              </button>
              <button className="pill-btn">
                <span className="pill-letter">B</span>
                <span className="pill-text">My Tech Stack</span>
              </button>
              <button className="pill-btn">
                <span className="pill-letter">C</span>
                <span className="pill-text">Let's collaborate</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBubble;

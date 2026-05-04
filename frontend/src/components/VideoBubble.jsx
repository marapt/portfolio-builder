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
        <div className="video-expanded-card glass-card">
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
          </div>

          <div className="video-content p-4">
            <h3 className="text-lg font-semibold mb-1">Hi, I'm your host! 👋</h3>
            <p className="text-sm opacity-80 mb-4">Want to see how I built this portfolio or discuss a project?</p>
            
            <div className="action-buttons space-y-2">
              <button className="action-btn primary w-full flex items-center justify-between p-3 rounded-xl transition-all">
                <span className="flex items-center gap-2">
                  <Play size={18} />
                  See my Tech Stack
                </span>
                <ChevronRight size={16} />
              </button>
              
              <button className="action-btn secondary w-full flex items-center justify-between p-3 rounded-xl transition-all">
                <span className="flex items-center gap-2">
                  <MessageSquare size={18} />
                  Let's Chat
                </span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBubble;

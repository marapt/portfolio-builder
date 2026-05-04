import React, { useState, useRef } from 'react';
import { X, Play, MessageSquare, ChevronRight, Video } from 'lucide-react';
import './VideoBubble.css';

const VideoBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoRef = useRef(null);

  const handleAction = (type) => {
    switch(type) {
      case 'hire':
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'stack':
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/maramartins', '_blank');
        break;
      case 'github':
        window.open('https://github.com/marapt', '_blank');
        break;
      case 'resume':
        window.location.href = '/resume';
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log("Video auto-play blocked, waiting for interaction");
        }
      };
      playVideo();
    }
  }, [isOpen]);

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
              src="https://assets.mixkit.co/videos/preview/mixkit-woman-talking-to-the-camera-in-a-bright-room-41221-large.mp4"
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
              src="https://assets.mixkit.co/videos/preview/mixkit-woman-talking-to-the-camera-in-a-bright-room-41221-large.mp4"
            />
            
            {/* Sidebar Icons */}
            <div className="video-sidebar">
              <div className="sidebar-icon-bubble" onClick={(e) => { e.stopPropagation(); handleAction('linkedin'); }} title="LinkedIn">
                <Globe size={18} />
              </div>
              <div className="sidebar-icon-bubble" onClick={(e) => { e.stopPropagation(); handleAction('github'); }} title="GitHub">
                <Play size={18} />
              </div>
              <div className="sidebar-icon-bubble" onClick={(e) => { e.stopPropagation(); handleAction('resume'); }} title="View Resume">
                <X size={18} />
              </div>
            </div>

            {/* Bottom Pills (A, B, C) */}
            <div className="video-pill-actions">
              <button className="pill-btn" onClick={() => handleAction('hire')}>
                <span className="pill-letter">A</span>
                <span className="pill-text">Why hire me?</span>
              </button>
              <button className="pill-btn" onClick={() => handleAction('stack')}>
                <span className="pill-letter">B</span>
                <span className="pill-text">My Tech Stack</span>
              </button>
              <button className="pill-btn" onClick={() => handleAction('contact')}>
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

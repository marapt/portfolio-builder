import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Play, MessageSquare, ChevronRight, Video, Globe, Github } from 'lucide-react';
import './VideoBubble.css';

const VideoBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleAction = (type) => {
    switch(type) {
      case 'hire':
        navigate('/resume');
        break;
      case 'stack':
        navigate('/#portfolio');
        break;
      case 'contact':
        navigate('/#contact');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/maramartinspt/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/marapt', '_blank');
        break;
      case 'resume':
        window.location.href = '/resume';
        break;
      case 'chatbot':
        if (window.chatbase) {
          window.chatbase("open");
        }
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
              crossOrigin="anonymous"
              src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_27_Super_Slow_Motion_1080p_016_preview.mp4"
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
              crossOrigin="anonymous"
              src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_27_Super_Slow_Motion_1080p_016_preview.mp4"
            />
            
            {/* Sidebar Icons */}
            <div className="video-sidebar">
              <div className="sidebar-icon-bubble" onClick={(e) => { e.stopPropagation(); handleAction('linkedin'); }} title="LinkedIn">
                <Globe size={18} />
              </div>
              <div className="sidebar-icon-bubble" onClick={(e) => { e.stopPropagation(); handleAction('github'); }} title="GitHub">
                <Github size={18} />
              </div>
              <div className="sidebar-icon-bubble avatar" onClick={(e) => { e.stopPropagation(); handleAction('chatbot'); }} title="Chat with my AI">
                <img 
                  src="/miis-headshot.jpg" 
                  alt="Mara Martins" 
                  className="sidebar-avatar-img" 
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Bottom Pills (A, B, C) */}
            <div className="video-pill-actions">
              <button className="pill-btn" onClick={() => handleAction('hire')}>
                <span className="pill-letter">A</span>
                <span className="pill-text">See my Resume</span>
              </button>
              <button className="pill-btn" onClick={() => handleAction('stack')}>
                <span className="pill-letter">B</span>
                <span className="pill-text">Check my Featured Projects</span>
              </button>
              <button className="pill-btn" onClick={() => handleAction('contact')}>
                <span className="pill-letter">C</span>
                <span className="pill-text">Let's connect</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBubble;

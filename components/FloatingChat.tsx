
import React, { useState, useEffect } from 'react';
import { X, MapPin, Navigation, Utensils } from 'lucide-react';

const FloatingChat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show the prompt after a short delay
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (showPrompt) setShowPrompt(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* Address Card Popup */}
      {isExpanded && (
        <div className="mb-4 w-72 md:w-80 bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="bg-coffee p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-amber-500" />
              <h3 className="font-serif text-lg">Our Location</h3>
            </div>
            <button onClick={() => setIsExpanded(false)} className="hover:text-amber-500 transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-coffee mb-2">Priya's Bakes</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Priya,s bakes, Ghandhi nagar, <br />
              Uthangarai, Tamil Nadu 635207,
            </p>
            <div className="space-y-3">
              <a 
                href="https://maps.app.goo.gl/55z7rpccmCHAGvf76" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-xl font-bold text-xs tracking-widest transition-all shadow-lg active:scale-95"
              >
                <Navigation size={14} />
                GET DIRECTIONS
              </a>
              <button 
                onClick={() => setIsExpanded(false)}
                className="w-full text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-coffee transition-colors py-2"
              >
                Close Information
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invitation Nudge Bubble */}
      {showPrompt && !isExpanded && (
        <div className="relative mb-2 animate-in fade-in slide-in-from-right-4 duration-500 max-w-[240px]">
          <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border border-amber-50 text-coffee text-[11px] font-bold leading-relaxed flex items-start gap-3">
            <span>Hello customers! Please visit our bakery to try our tasty food and desserts!</span>
            <button onClick={() => setShowPrompt(false)} className="mt-0.5">
              <X size={12} className="text-gray-300 hover:text-red-500 transition-colors" />
            </button>
          </div>
          {/* Tooltip arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-amber-50 rotate-45"></div>
        </div>
      )}

      {/* Main Floating Button - Spoon Icon */}
      <button
        onClick={handleToggle}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 active:scale-90 relative ${
          isExpanded 
            ? 'bg-amber-600 text-white rotate-90' 
            : 'bg-coffee text-white hover:bg-amber-900 hover:-translate-y-1'
        }`}
      >
        {isExpanded ? (
          <X size={28} />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Utensils size={30} className="text-amber-500" />
          </div>
        )}
        
        {/* Pulsing notification dot (only when prompt is visible) */}
        {showPrompt && !isExpanded && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-coffee"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingChat;

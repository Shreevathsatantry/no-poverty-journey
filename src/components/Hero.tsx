
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  className?: string;
  scrollToSection: () => void;
}

const Hero: React.FC<HeroProps> = ({ className, scrollToSection }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const image = imageRef.current;
    
    if (title) title.classList.add('animate-fade-in');
    
    // Staggered animations
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (button) button.classList.add('animate-fade-in');
    }, 600);
    
    setTimeout(() => {
      if (image) image.classList.add('animate-fade-in');
    }, 900);
  }, []);

  return (
    <div className={cn(
      "min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-0 md:px-16 hero-gradient overflow-hidden",
      className
    )}>
      <div className="flex-1 max-w-xl">
        <h1 
          ref={titleRef}
          className="opacity-0 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-fairfi-black">Fair</span>
          <span className="text-fairfi-orange">Fi</span>
          <span className="block text-fairfi-black">Eliminating Economic Inequality</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="opacity-0 text-lg md:text-xl mb-8 text-gray-700 leading-relaxed"
        >
          FairFi is a platform dedicated to reducing poverty and inequality by connecting people with opportunities across various sectors. We believe in creating a world where everyone has equal access to economic growth.
        </p>
        
        <button
          ref={buttonRef}
          onClick={scrollToSection}
          className="opacity-0 group flex items-center gap-2 bg-fairfi-orange text-white px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
        >
          Get Started
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </button>
      </div>
      
      <div 
        ref={imageRef}
        className="opacity-0 flex-1 mt-12 md:mt-0 max-w-md"
      >
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5]">
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden p-6">
            <div className="absolute top-0 left-0 right-0 h-10 bg-fairfi-gray flex items-center justify-center rounded-t-2xl">
              <div className="w-20 h-1.5 bg-fairfi-black/10 rounded-full" />
            </div>

            <div className="mt-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="text-3xl font-bold">
                  <span className="text-fairfi-black">Fair</span>
                  <span className="text-fairfi-orange">Fi</span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-8">Let's begin.</div>
              
              <div className="space-y-6">
                <div className="bg-fairfi-gray p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">Category</div>
                  <div className="h-8 bg-white rounded-md flex items-center px-3 text-sm font-medium">Choose a category</div>
                </div>
                
                <div className="bg-fairfi-gray p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">Location</div>
                  <div className="h-8 bg-white rounded-md flex items-center px-3 text-sm font-medium">Select location</div>
                </div>
              </div>
              
              <button className="w-full bg-fairfi-black text-white py-3 rounded-lg mt-8 font-medium hover:bg-opacity-90 transition-all duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

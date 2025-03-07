
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowDown, Heart, ShieldCheck, Users } from "lucide-react";

interface HeroProps {
  className?: string;
  scrollToSection: () => void;
}

const Hero: React.FC<HeroProps> = ({ className, scrollToSection }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const image = imageRef.current;
    const icons = iconsRef.current;
    
    // Add a small delay before starting animations
    setTimeout(() => {
      if (title) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }
    }, 100);
    
    // Staggered animations with improved timing
    setTimeout(() => {
      if (subtitle) {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }
    }, 300);
    
    setTimeout(() => {
      if (icons) {
        icons.style.opacity = '1';
        icons.style.transform = 'translateY(0)';
      }
    }, 500);
    
    setTimeout(() => {
      if (button) {
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }
    }, 700);
    
    setTimeout(() => {
      if (image) {
        image.style.opacity = '1';
        image.style.transform = 'translateY(0)';
      }
    }, 900);
  }, []);

  return (
    <div className={cn(
      "min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-0 md:px-16 hero-gradient overflow-hidden",
      className
    )}>
      <div className="flex-1 max-w-xl">
        <h1 
          ref={titleRef}
          className="opacity-0 transform translate-y-4 transition-all duration-500 ease-out text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-fairfi-black">Vikas</span>
          <span className="text-fairfi-orange">Yatra</span>
          <span className="block text-fairfi-black mt-2">Bridging Gaps, Building Futures</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="opacity-0 transform translate-y-4 transition-all duration-500 ease-out text-lg md:text-xl mb-8 text-gray-700 leading-relaxed"
        >
          VikasYatra is dedicated to eliminating poverty and inequality through innovative programs, connecting resources with opportunities, and creating sustainable economic growth for all communities.
        </p>
        
        <div 
          ref={iconsRef} 
          className="opacity-0 transform translate-y-4 transition-all duration-500 ease-out flex gap-6 mb-8"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-fairfi-orange/20">
              <Heart className="h-5 w-5 text-fairfi-orange" />
            </div>
            <span className="font-medium text-sm">Compassion</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-fairfi-orange/20">
              <ShieldCheck className="h-5 w-5 text-fairfi-orange" />
            </div>
            <span className="font-medium text-sm">Security</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-fairfi-orange/20">
              <Users className="h-5 w-5 text-fairfi-orange" />
            </div>
            <span className="font-medium text-sm">Community</span>
          </div>
        </div>
        
        <button
          ref={buttonRef}
          onClick={scrollToSection}
          className="opacity-0 transform translate-y-4 transition-all duration-500 ease-out group flex items-center gap-2 bg-fairfi-orange text-white px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
        >
          Learn More
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </button>
      </div>
      
      <div 
        ref={imageRef}
        className="opacity-0 transform translate-y-4 transition-all duration-500 ease-out flex-1 mt-12 md:mt-0 max-w-md lg:max-w-xl"
      >
        <div className="relative w-full aspect-square md:aspect-[4/3]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl shadow-fairfi-orange/10">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
              alt="Community development through technology and education" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-fairfi-orange/30 to-transparent mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

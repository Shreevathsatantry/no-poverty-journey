
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Home, Info, Phone, Users, Award, Heart } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Info, label: 'About Us', href: '#' },
    { icon: Users, label: 'Our Programs', href: '#programs' },
    { icon: Award, label: 'Impact', href: '#' },
    { icon: Heart, label: 'Donate', href: '#' },
    { icon: Phone, label: 'Contact', href: '#' },
  ];

  return (
    <div className={cn("fixed top-0 left-0 z-50 h-screen", className)}>
      <div
        className={cn(
          "relative h-full bg-white transition-all duration-300 ease-in-out shadow-lg",
          isOpen ? "w-64" : "w-0"
        )}
      >
        <div className="h-full overflow-hidden">
          <div className="p-6 border-b border-fairfi-orange/10">
            <h2 className={cn(
              "text-2xl font-bold text-fairfi-black transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0"
            )}>
              <span className="text-fairfi-black">Vikas</span>
              <span className="text-fairfi-orange">Yatra</span>
            </h2>
            <p className={cn(
              "text-sm text-gray-500 mt-1 transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0"
            )}>
              Bridging Gaps, Building Futures
            </p>
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-2 px-4">
              {menuItems.map((item, index) => (
                <li key={index} className={cn(
                  "transition-all duration-500 ease-in-out",
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
                  // Stagger the animations
                  isOpen ? `transition-delay-[${index * 100}ms]` : ""
                )}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-3 rounded-md hover:bg-fairfi-orange/10 transition-colors group"
                  >
                    <item.icon className="h-5 w-5 text-fairfi-orange group-hover:text-fairfi-orange group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-fairfi-black whitespace-nowrap animate-underline">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={cn(
            "absolute bottom-8 left-0 right-0 px-6 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}>
            <div className="bg-fairfi-orange/10 p-4 rounded-xl">
              <p className="text-sm font-medium text-fairfi-black mb-2">Ready to make an impact?</p>
              <button className="w-full bg-fairfi-orange text-white py-2 rounded-lg font-medium hover:bg-fairfi-orange/90 transition-colors">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className={cn(
          "absolute top-6 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-300 hover:bg-fairfi-orange hover:text-white focus:outline-none",
          isOpen ? "left-60" : "left-5"
        )}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <ChevronLeft className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;


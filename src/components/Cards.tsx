
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, Code, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  delay: number;
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="opacity-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-fairfi-orange/10 rounded-xl w-fit">
          <Icon className="w-8 h-8 text-fairfi-orange" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-fairfi-black">{title}</h3>
        
        <p className="text-gray-600 mb-5 flex-grow">{description}</p>
        
        <button className="flex items-center gap-2 text-fairfi-orange font-medium mt-auto group-hover:gap-3 transition-all">
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

interface CardsProps {
  className?: string;
  id?: string;
}

const Cards: React.FC<CardsProps> = ({ className, id }) => {
  const cardsData = [
    {
      title: "Daily Wage Sector",
      description: "Supporting daily wage workers with fair pay opportunities, skill development, and financial inclusion programs.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Tech-Skilled Professionals",
      description: "Connecting tech professionals with remote work opportunities and mentorship programs to bridge the digital divide.",
      icon: Code,
    },
    {
      title: "Small Business Professionals",
      description: "Empowering small business owners with microfinance, market access, and business development resources.",
      icon: Lightbulb,
    },
    {
      title: "Child Education",
      description: "Providing educational resources, scholarships, and learning programs to ensure every child has access to quality education.",
      icon: GraduationCap,
    },
  ];

  return (
    <section 
      id={id} 
      className={cn(
        "px-6 py-20 md:px-16 relative overflow-hidden bg-fairfi-gray/30",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our initiatives designed to create equal opportunities and reduce economic inequality across different sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
      
      {/* Background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-fairfi-orange/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-fairfi-orange/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Cards;

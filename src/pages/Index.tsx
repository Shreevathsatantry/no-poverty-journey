
import React, { useRef } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Cards from '@/components/Cards';

const Index = () => {
  const programsRef = useRef<HTMLDivElement>(null);

  const scrollToPrograms = () => {
    programsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Hero scrollToSection={scrollToPrograms} />
      
      <div ref={programsRef}>
        <Cards id="programs" />
      </div>
      
      <footer className="bg-fairfi-black text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-white">Vikas</span>
              <span className="text-fairfi-orange">Yatra</span>
            </h3>
            <p className="text-gray-400">
              Creating economic equality and opportunities for all.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">Research</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-fairfi-orange transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} VikasYatra. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;

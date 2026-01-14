import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-idle-teal font-bold tracking-wide uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl font-bold text-idle-dark">What San Angelo Says</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
                <div key={review.id} className="bg-gray-50 p-8 rounded-3xl relative">
                    <div className="flex gap-1 text-idle-orange mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                    
                    <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                        <div className="w-10 h-10 bg-idle-dark rounded-full flex items-center justify-center text-white font-bold">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-idle-dark text-sm">{review.name}</p>
                            <p className="text-xs text-gray-400">{review.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { SERVICES, BUSINESS_INFO } from '../constants';
import { Phone } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-idle-teal font-bold tracking-wide uppercase mb-3">What I Do</h2>
          <h3 className="text-4xl font-bold text-idle-dark mb-6">Complete Auto Repair Services</h3>
          <p className="text-gray-600 text-lg">
            From routine maintenance to complex diagnostics, I have the tools and experience to get you back on the road safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-gray-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-idle-teal group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7 text-idle-dark group-hover:text-white transition-colors" />
              </div>
              
              <h4 className="text-2xl font-bold text-idle-dark mb-3">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action within services */}
        <div className="mt-16 bg-idle-dark rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-idle-teal/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl font-bold text-white mb-2">Not sure what's wrong?</h4>
            <p className="text-gray-400 text-lg">Give me a call. I'm happy to listen to the symptoms you're experiencing and give my advice.</p>
          </div>
          
          <div className="relative z-10 shrink-0">
             <a 
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="inline-flex items-center gap-2 bg-idle-salmon hover:bg-idle-orange text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Me Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
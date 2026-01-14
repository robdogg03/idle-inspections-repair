import { Phone, ShieldCheck, User } from 'lucide-react';

const Features = () => {
  return (
    <section id="trust" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-idle-salmon font-bold tracking-wide uppercase mb-3">Why Choose Idle</h2>
          <h3 className="text-4xl font-bold text-idle-dark mb-6">Old School Values, Modern Repair.</h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-idle-teal/10 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-idle-teal" />
            </div>
            <h4 className="text-xl font-bold text-idle-dark mb-3">You Talk To The Mechanic</h4>
            <p className="text-gray-600 leading-relaxed">No service advisors or sales people. When you call, you speak directly to me. I explain the repair clearly so you're never in the dark.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-idle-teal/10 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-idle-teal" />
            </div>
            <h4 className="text-xl font-bold text-idle-dark mb-3">Honest Inspections</h4>
            <p className="text-gray-600 leading-relaxed">I fix what needs fixing. I don't invent problems. My goal is to keep your car safe and your wallet happy so you come back next time.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-idle-teal/10 rounded-2xl flex items-center justify-center mb-6">
              <User className="w-7 h-7 text-idle-teal" />
            </div>
            <h4 className="text-xl font-bold text-idle-dark mb-3">Community Focused</h4>
            <p className="text-gray-600 leading-relaxed">San Angelo is my home. I'm building a reputation one repair at a time. I treat every customer like a neighbor.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
import { Phone, ShieldCheck, User } from 'lucide-react';

const Features = () => {
  return (
    <section id="trust" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -left-20 top-1/4 w-96 h-96 bg-idle-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Composition */}
            <div className="relative order-2 lg:order-1">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <img
                        src="/images/mechanic-inspection.jpg"
                        alt="Miguel Cruz performing vehicle inspection at Idle Inspections & Repair shop"
                        className="w-full h-auto object-cover"
                    />
                </div>
                {/* Offset Background */}
                <div className="absolute top-10 -left-10 w-full h-full bg-idle-teal/20 rounded-3xl -z-10"></div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
                <h2 className="text-idle-salmon font-bold tracking-wide uppercase mb-3">Why Choose Idle</h2>
                <h3 className="text-4xl font-bold text-idle-dark mb-8">Old School Values, Modern Repair.</h3>
                
                <div className="space-y-8">
                    <div className="flex gap-5">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-idle-teal">
                                <Phone className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-idle-dark mb-2">You Talk To The Mechanic</h4>
                            <p className="text-gray-600">No service advisors or sales people. When you call, you speak directly to me. I explain the repair clearly so you're never in the dark.</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-idle-teal">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-idle-dark mb-2">Honest Inspections</h4>
                            <p className="text-gray-600">I fix what needs fixing. I don't invent problems. My goal is to keep your car safe and your wallet happy so you come back next time.</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-idle-teal">
                                <User className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-idle-dark mb-2">Community Focused</h4>
                            <p className="text-gray-600">San Angelo is my home. I'm building a reputation one repair at a time. I treat every customer like a neighbor.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
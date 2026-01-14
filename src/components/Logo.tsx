const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Top Graphic Part IDLE */}
      <div className="flex items-end leading-none tracking-tighter italic font-serif font-bold text-4xl md:text-5xl">
        <span className="text-idle-teal transform -skew-x-12 pr-1">I</span>
        <span className="text-idle-dark transform -skew-x-12 pr-1">D</span>
        <span className="text-idle-salmon transform -skew-x-12 pr-1">L</span>
        <span className="text-idle-orange transform -skew-x-12">E</span>
      </div>
      
      {/* Bottom Text Part */}
      <div className="flex flex-col items-start leading-none mt-1">
        <span className="font-serif font-black italic text-idle-dark text-xs md:text-sm tracking-widest uppercase">
          Inspections
        </span>
        <span className="font-serif font-black italic text-idle-dark text-xs md:text-sm tracking-widest uppercase ml-4">
          & Repair
        </span>
      </div>
    </div>
  );
};

export default Logo;
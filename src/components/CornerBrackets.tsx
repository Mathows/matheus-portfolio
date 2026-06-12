/**
 * Decorative metallic L-shaped brackets in the top-left and bottom-right
 * corners — the signature framing of the reference design.
 */
const CornerBrackets = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top-left bracket */}
      <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
        <div className="absolute left-0 top-0 h-[3px] w-24 bg-metallic opacity-90 shadow-gold" />
        <div className="absolute left-0 top-0 h-24 w-[3px] bg-metallic opacity-90 shadow-gold" />
        {/* thin inner offset line */}
        <div className="absolute left-3 top-3 h-[1px] w-14 bg-metallic opacity-40" />
        <div className="absolute left-3 top-3 h-14 w-[1px] bg-metallic opacity-40" />
      </div>

      {/* Bottom-right bracket */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8">
        <div className="absolute bottom-0 right-0 h-[3px] w-24 bg-metallic opacity-90 shadow-gold" />
        <div className="absolute bottom-0 right-0 h-24 w-[3px] bg-metallic opacity-90 shadow-gold" />
        <div className="absolute bottom-3 right-3 h-[1px] w-14 bg-metallic opacity-40" />
        <div className="absolute bottom-3 right-3 h-14 w-[1px] bg-metallic opacity-40" />
      </div>
    </div>
  );
};

export default CornerBrackets;

const gradients: Record<string, string> = {
  forest: "linear-gradient(135deg, #1D2820 0%, #384B3D 55%, #88AB8E 100%)",
  sage: "linear-gradient(135deg, #88AB8E 0%, #AFC8AD 60%, #EEE7DA 100%)",
  brass: "linear-gradient(135deg, #384B3D 0%, #88AB8E 70%, #AFC8AD 100%)",
  dusk: "linear-gradient(160deg, #1E2520 0%, #1D2820 50%, #384B3D 100%)",
};

export default function Placeholder({
  tone = "forest",
  className = "",
  label,
}: {
  tone?: keyof typeof gradients;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradients[tone] }}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 35%)",
        }}
      />
      {label && (
        <span className="absolute bottom-3 left-3 text-[10px] tracking-widest2 uppercase text-ivory/70 font-body">
          {label}
        </span>
      )}
    </div>
  );
}

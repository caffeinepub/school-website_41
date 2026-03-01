interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-yellow-100 text-yellow-700 mb-3">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold font-display leading-tight mb-3 ${light ? "text-white" : "text-school-navy"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-0.5 w-16 bg-yellow-500 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

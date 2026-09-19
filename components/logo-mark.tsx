import Image from "next/image";

type LogoMarkProps = {
  compact?: boolean;
};

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={compact ? "/images/corvo-logo-mark.png" : "/images/corvo-logo-horizontal.png"}
        alt="Corvo Technologies"
        width={compact ? 48 : 190}
        height={compact ? 48 : 40}
        className={compact ? "h-14 w-14 object-contain" : "h-12 w-auto max-w-56 object-contain"}
      />
      <div className="leading-none">
        {!compact ? <span className="sr-only">Corvo Technologies</span> : null}
      </div>
    </div>
  );
}

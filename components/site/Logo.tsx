import Image from "next/image";
import Link from "next/link";

/**
 * The OneClickHR logo mark: the official vibrant orange curved emblem.
 * Uses high-resolution asset from public/logo/oneclickhr-mark.png.
 */
export function LogoMark({
  className = "size-8",
  alt = "OneClickHR mark",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/logo/oneclickhr-mark.png"
      alt={alt}
      width={264}
      height={249}
      className={`shrink-0 object-contain ${className}`}
      priority
    />
  );
}

/**
 * The official OneClickHR brand lockup:
 * - On light backgrounds (default / tone="light"): dark slate 'Oneclick' with orange mark and 'HR'
 * - On dark backgrounds (tone="dark"): white 'Oneclick' with orange mark and 'HR'
 */
export function Logo({
  href = "/",
  size = "md",
  tone = "light",
  className = "",
}: {
  href?: string | null;
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
  className?: string;
}) {
  const lockupSrc =
    tone === "dark"
      ? "/logo/oneclickhr-lockup-white.png"
      : "/logo/oneclickhr-lockup.png";

  const sizeClass = {
    sm: "h-7 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
  }[size];

  const content = (
    <Image
      src={lockupSrc}
      alt="OneClickHR"
      width={1066}
      height={249}
      className={`${sizeClass} shrink-0 object-contain`}
      priority
    />
  );

  if (!href) {
    return <span className={`inline-flex items-center ${className}`}>{content}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="OneClickHR home"
      className={`inline-flex items-center rounded focus-visible:outline-brand-ink ${className}`}
    >
      {content}
    </Link>
  );
}


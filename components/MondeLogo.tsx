type MondeLogoProps = {
  size?: "header" | "footer";
};

export function MondeLogo({ size = "header" }: MondeLogoProps) {
  const wordmarkSize = size === "footer" ? "text-[1.45rem] sm:text-[1.6rem]" : "text-[1.28rem] sm:text-[1.42rem]";
  const crownSize = size === "footer" ? "h-7 w-12 sm:h-8 sm:w-14" : "h-6 w-11 sm:h-7 sm:w-12";

  return (
    <span className="inline-flex items-center gap-3 text-white/90">
      <svg className={`${crownSize} shrink-0 overflow-visible`} viewBox="0 0 96 48" aria-hidden="true">
        <path
          d="M7 35.5c8.2-1.4 14.9-7.1 18.8-16.1l9 13.8 13.4-25.5 13.2 25.5 9-13.8c3.9 9 10.6 14.7 18.8 16.1-4.1 4.1-12 6.4-22 6.4H29c-10 0-17.9-2.3-22-6.4Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M15.5 35.7c6.2-2.1 11.5-5.4 16-10.1m49 10.1c-6.2-2.1-11.5-5.4-16-10.1M48.2 8.5v29"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.3"
          opacity="0.9"
        />
        <circle cx="25.8" cy="19.6" r="3.2" fill="currentColor" />
        <circle cx="48.2" cy="7.8" r="3.5" fill="currentColor" />
        <circle cx="70.4" cy="19.6" r="3.2" fill="currentColor" />
        <path
          d="M22.5 31.6c4.2 3.7 8.8 5.4 13.9 5.4 4.6 0 8.5-1.5 11.8-4.7 3.4 3.2 7.3 4.7 11.9 4.7 5.1 0 9.7-1.7 13.9-5.4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          opacity="0.72"
        />
      </svg>
      <span className={`${wordmarkSize} font-light uppercase leading-none tracking-[0.24em] text-white/95`}>
        MONDE
      </span>
    </span>
  );
}

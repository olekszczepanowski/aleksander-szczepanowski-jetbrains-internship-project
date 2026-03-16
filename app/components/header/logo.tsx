import { LOGO_DATA } from "./data";

export function Logo() {
  return (
    <div className="inline-flex gap-0.5">
      <a className="inline-flex items-center gap-1.5" href="https://kotlinlang.org" aria-label="Kotlin Home Page">
        <img src="/favicon.svg" alt="Kotlin" className="h-[18.93px] w-auto" />
        <span className="text-[26px] font-medium text-white">Kotlin</span>
      </a>
      <a className="mt-1.5 h-fit text-[13px] text-white/75 no-underline hover:text-white" href={LOGO_DATA.url}>
        {LOGO_DATA.version}
      </a>
    </div>
  );
}

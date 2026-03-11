export function Header({ url, version }: { url: string; version: string }) {
  return (
    <header className="flex items-center justify-between px-8 h-16">
      <div className="inline-flex gap-0.5">
        <a
          className="inline-flex items-center no-underline gap-1.5"
          href="https://kotlinlang.org"
          aria-label="Kotlin Home Page"
        >
          <img src="/favicon.svg" alt="Kotlin" className="h-[18.93px] w-auto" />
          <span className="text-white font-medium text-[26px]">Kotlin</span>
        </a>
        <a
          className="text-[13px] mt-1.5 h-fit text-white/75 no-underline hover:text-white"
          href={url}
        >
          {version}
        </a>
      </div>
    </header>
  );
}

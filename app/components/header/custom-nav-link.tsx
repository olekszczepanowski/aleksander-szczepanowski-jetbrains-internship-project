export function CustomNavLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="flex h-full items-center border-y-2 border-transparent text-white/75 hover:border-b-white/40 hover:text-white"
    >
      <p>{label}</p>
    </a>
  );
}

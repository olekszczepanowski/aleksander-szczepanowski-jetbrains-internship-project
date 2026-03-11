export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="box-border mx-auto max-w-319 xl:max-w-249 px-5.5 w-full">
      {children}
    </div>
  );
}

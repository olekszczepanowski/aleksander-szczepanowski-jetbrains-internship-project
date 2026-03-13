export function YouTubeEmbed({ id }: { id?: string }) {
  return (
    <div className="relative h-0 w-full pb-[56.25%]">
      <iframe
        width="560"
        height="315"
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/button";
import { gym } from "@/lib/data";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={`border-2 border-line p-2 bg-muted ${className ?? ""}`}>
      <iframe
        src={gym.mapsEmbedUrl}
        title={`Map showing ${gym.name} in ${gym.area}, ${gym.city}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-[420px] w-full border-0 grayscale"
      />
      <div className="flex flex-col items-start justify-between gap-4 border-t-2 border-line p-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-tighter">
            {gym.name}
          </p>
          <p className="text-sm text-muted-foreground">{gym.fullAddress}</p>
        </div>
        <Button
          href={gym.googleMapsUrl}
          external
          variant="outline"
          size="md"
          className="text-sm"
        >
          Get Directions
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </Button>
      </div>
    </div>
  );
}
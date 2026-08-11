"use client";

export function CalendlyEmbed({ url }: { url: string }) {
  if (!url) {
    return (
      <div className="rounded-md border border-slate/30 bg-white p-8 text-center">
        <p className="font-medium text-ink">Scheduling calendar coming online.</p>
        <p className="mt-2 text-sm text-slate">
          Set NEXT_PUBLIC_CALENDLY_URL to enable booking.
        </p>
      </div>
    );
  }

  return (
    <iframe
      title="Book a free consultation"
      src={url}
      className="min-h-[700px] w-full rounded-md border border-slate/20 bg-white"
    />
  );
}

import { Lightbulb } from "lucide-react";

export default function ProTip({ text }: { text: string }) {
  return (
    <div className="mt-5 rounded-2xl border border-amber-200/70 bg-amber-50/70 p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 rounded-xl bg-amber-100 p-2 text-amber-900">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <div className="text-[12px] font-semibold uppercase tracking-wide text-amber-900/80">
            Pro-tip
          </div>
          <div className="mt-2 text-[15px] leading-[1.6] text-amber-950">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

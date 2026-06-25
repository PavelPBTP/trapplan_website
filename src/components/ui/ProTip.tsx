import { Lightbulb } from "lucide-react";

export default function ProTip({ text }: { text: string }) {
  return (
    <div className="mt-5 rounded-[14px] border border-[rgba(240,180,80,0.25)] bg-[rgba(240,180,80,0.08)] p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 rounded-[10px] bg-[rgba(240,180,80,0.15)] p-2 text-[#f0b450]">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#d9a24a]">
            Pro-tip
          </div>
          <div className="mt-2 text-[15px] leading-[1.6] text-secondary">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

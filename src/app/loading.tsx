export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[rgba(244,241,234,0.1)] border-t-[var(--accent)]" />
    </div>
  );
}

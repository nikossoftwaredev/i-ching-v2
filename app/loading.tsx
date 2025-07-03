export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-24 w-24 animate-spin rounded-full border-4 border-muted border-t-primary" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 animate-pulse rounded-full bg-primary/20" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Φόρτωση...</p>
      </div>
    </div>
  );
}
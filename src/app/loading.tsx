const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-md px-6">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-slate-200 rounded-lg w-3/4 animate-pulse mb-4" />
          <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
        </div>

        {/* Card Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="h-6 bg-slate-200 rounded w-2/3 animate-pulse mb-4" />
              <div className="space-y-2">
                <div className="h-4 bg-slate-100 rounded animate-pulse" />
                <div className="h-4 bg-slate-100 rounded w-5/6 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Skeleton */}
        <div className="mt-8 flex gap-3">
          <div className="flex-1 h-10 bg-slate-200 rounded-lg animate-pulse" />
          <div className="flex-1 h-10 bg-slate-200 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

export default function Loading() {
  return (
    <div className="space-y-4 p-4">
      {/* Title Skeleton */}
      <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse"></div>

      {/* Content Skeletons */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Button Skeleton */}
      <div className="h-10 w-32 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}

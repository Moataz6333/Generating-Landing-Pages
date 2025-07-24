"use client";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <div className="mt-4 text-center text-gray-600">
          Loading your landing page...
        </div>
      </div>
    </div>
  );
}

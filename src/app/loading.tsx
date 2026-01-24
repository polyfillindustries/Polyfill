export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 rounded-full border-4 border-bprimary/30 border-t-bprimary animate-spin" />
        <div className="text-center">
          <p className="text-bgray font-semibold text-lg font-inter">Loading Polyfill</p>
          <p className="text-sm text-gray-500">Please wait a moment...</p>
        </div>
      </div>
    </div>
  );
}

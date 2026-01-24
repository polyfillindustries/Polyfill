'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-bprimary/10 flex items-center justify-center">
          <span className="text-bprimary text-2xl font-bold">!</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-bgray font-playfair">
          Something went wrong
        </h1>
        <p className="mt-3 text-gray-600">
          We hit a snag while loading this page. Please try again.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-bprimary text-white font-semibold shadow-md hover:bg-bsecondary transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-full border border-bprimary/30 text-bgray font-semibold hover:bg-bprimary/5 transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

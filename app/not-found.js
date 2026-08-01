import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f8f9] text-[#05222b] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-4 font-serif text-[#0a546c]">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-[#4b7b8a] max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full bg-[#05222b] text-white font-medium hover:bg-[#0a546c] transition-colors shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}

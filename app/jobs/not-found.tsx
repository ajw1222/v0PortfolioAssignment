import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl font-bold mb-4">Item Not Found</h2>
      <p className="text-muted-foreground mb-6">The item you're looking for doesn't exist or has been removed.</p>
      <Link href="/" className="px-4 py-2 bg-[#3E76DE] text-white rounded-md hover:bg-[#2B57A8] transition-colors">
        Back to Home
      </Link>
    </div>
  )
}
export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2 animate-reverse-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading Cryonix</h2>
        <p className="text-gray-300">Preparing your Discord bot experience...</p>
      </div>
    </div>
  )
}

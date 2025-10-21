export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-yellow-400">Ílé</span>Otaku
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:text-yellow-400 transition">Browse</a>
            <a href="#" className="hover:text-yellow-400 transition">Creators</a>
            <a href="#" className="hover:text-yellow-400 transition">Pricing</a>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Your Home for <span className="text-yellow-400">African</span> 
          <br />& Global Manga Stories
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Read thousands of manga for free. Earn coins as you read. Support African creators. 
          All in one beautiful platform.
        </p>
        <div className="space-x-4 mb-12">
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition transform hover:scale-105">
            🎌 Start Reading Free
          </button>
          <button className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition">
            ✨ Become a Creator
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-sm opacity-80">Manga Series</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">50+</div>
            <div className="text-sm opacity-80">African Creators</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">10K+</div>
            <div className="text-sm opacity-80">Monthly Reads</div>
          </div>
        </div>
      </section>

      {/* Quick Test - Remove this section once confirmed working */}
      <section className="container mx-auto px-6 py-8 text-center">
        <div className="bg-green-500 text-white p-4 rounded-lg">
          ✅ If you can see this, React is working correctly!
        </div>
      </section>
    </main>
  )
}
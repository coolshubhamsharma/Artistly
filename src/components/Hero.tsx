// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find the Perfect Artist for Your Event</h1>
        <p className="text-lg sm:text-xl mb-6">Connect with top performers — singers, dancers, speakers, DJs and more.</p>
        <a
          href="/artists"
          className="bg-white text-indigo-600 px-6 py-3 rounded font-medium hover:bg-gray-200 transition"
        >
          Explore Artists
        </a>
      </div>
    </section>
  )
}

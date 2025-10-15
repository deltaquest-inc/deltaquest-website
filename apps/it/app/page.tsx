export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            DeltaQuest IT
          </h1>
          <p className="text-xl text-blue-200 mb-12">
            Solutions technologiques innovantes pour votre entreprise
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Développement Web</h3>
              <p className="text-blue-200">Applications web modernes et performantes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Consulting IT</h3>
              <p className="text-blue-200">Conseils stratégiques pour optimiser votre infrastructure</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Support Technique</h3>
              <p className="text-blue-200">Assistance technique 24/7 pour vos systèmes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



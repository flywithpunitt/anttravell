import React from 'react'

const JaipurTour = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Jaipur Tour By Bus</h1>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img 
            src="/tour-images/jaipur.jpg" 
            alt="Jaipur" 
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tour Overview</h2>
            <p className="text-gray-600 mb-4">
              Explore the Pink City of Jaipur with our comfortable bus tour. Visit magnificent palaces, 
              forts, and experience the rich cultural heritage of Rajasthan.
            </p>

            <div className="border-t pt-6">
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Book Now
                </button>
                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JaipurTour 
import React from 'react'

const TravellerSonipatChokhiDhaniTour = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Sonipat Chokhi Dhani Tour By Traveller</h1>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img 
            src="/tour-images/sonipat-chokhi-dhani.jpg" 
            alt="Sonipat Chokhi Dhani" 
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tour Overview</h2>
            <p className="text-gray-600 mb-4">
              Experience the vibrant Rajasthani culture at Chokhi Dhani with our spacious traveller service. 
              Perfect for small groups and families, offering comfortable travel with ample space to bring back souvenirs from the ethnic village experience.
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

export default TravellerSonipatChokhiDhaniTour 
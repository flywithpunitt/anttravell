import React from 'react'

const CarJimCorbettTour = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Jim Corbett Tour By Car</h1>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <img 
            src="/tour-images/jim-corbett.jpg" 
            alt="Jim Corbett" 
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tour Overview</h2>
            <p className="text-gray-600 mb-4">
              Experience the wilderness of Jim Corbett National Park with our private car service. 
              Enjoy comfortable transportation to and from the park, with flexibility to explore nearby attractions at your convenience.
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

export default CarJimCorbettTour 
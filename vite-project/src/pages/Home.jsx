import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/swiper-custom.css'

// Import images
import swiftDzire from '../assets/images/carsswift.jpg'
import fortuner from '../assets/images/fortuner.jpg'
import innova from '../assets/images/tt2.jpg'
import seater9 from '../assets/images/tt3.jpg'
import seater12 from '../assets/images/tt4.jpg'
import seater17 from '../assets/images/ttt5.jpg'
import miniBus from '../assets/images/tttttt6.jpg'
import seater45benz from '../assets/images/tant_bus_-2.jpg'
import volvoBus from '../assets/images/ttttttttttt4.jpg'
import volvoCoach41 from '../assets/images/ttttttttttttttt2.jpg'
import volvoCoach45 from '../assets/images/ttttttttttttttttt1.jpg'
import luxuryCoach21 from '../assets/images/tttttt5.jpg'
import luxuryCoach22 from '../assets/images/tttt7.jpg'
import bharatBenz25 from '../assets/images/IMG_2233.jpg'
import luxuryCoach27 from '../assets/images/ttttttttttttttt2.jpg'
import luxuryCoach45 from '../assets/images/tttttt6.jpg'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const ServiceCard = ({ title, imageSrc, seats, price, features }) => (
  <div className="flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
    {/* Image Container */}
    <div className="relative h-[300px] overflow-hidden group">
      <img 
        src={imageSrc} 
        alt={title} 
        className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
      />
      
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Top Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800 shadow-lg">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {seats} Seats
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800 shadow-lg">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ₹{price}/day
        </span>
        {features && features.map((feature, index) => (
          <span 
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/90 text-white shadow-lg"
          >
            {feature === 'AC' ? (
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ) : feature === 'Washroom' ? (
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : null}
            {feature}
          </span>
        ))}
      </div>
    </div>

    {/* Content Below Image */}
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="flex gap-3">
        <Link 
          to={`/booking/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-orange-500/50"
        >
          <span>Book Now</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  </div>
)

const Home = () => {
  const services = [
    { 
      title: 'Swift Dzire Car Hire',
      image: swiftDzire,
      seats: 4,
      price: '1,499'
    },
    { 
      title: 'Toyota Fortuner Car Hire',
      image: fortuner,
      seats: 7,
      price: '4,999'
    },
    { 
      title: 'Innova Crysta Car Hire',
      image: innova,
      seats: 7,
      price: '2,999'
    },
    { 
      title: '9 Seater Luxury Traveller',
      image: seater9,
      seats: 9,
      price: '3,499'
    },
    { 
      title: '12 Seater Luxury Traveller',
      image: seater12,
      seats: 12,
      price: '4,499'
    },
    { 
      title: '17 Seater Luxury Traveller',
      image: seater17,
      seats: 17,
      price: '5,999'
    },
    { 
      title: 'Mini Bus On Rent for Char Dham',
      image: miniBus,
      seats: 27,
      price: '8,999'
    },
    { 
      title: '45 Seater Bharat Benz Coach Hire',
      image: seater45benz,
      seats: 45,
      price: '15,999'
    },
    { 
      title: 'Volvo Bus with Washroom',
      image: volvoBus,
      seats: 45,
      price: '18,999',
      features: ['Washroom', 'AC']
    },
    { 
      title: '41 Seater Volvo Coach Hire',
      image: volvoCoach41,
      seats: 41,
      price: '16,999'
    },
    { 
      title: '45 Seater Volvo Coach Hire',
      image: volvoCoach45,
      seats: 45,
      price: '17,999'
    },
    { 
      title: '21 Seater Luxury Coach',
      image: luxuryCoach21,
      seats: 21,
      price: '7,999'
    },
    { 
      title: '22 Seater Luxury Coach Hire',
      image: luxuryCoach22,
      seats: 22,
      price: '8,499'
    },
    { 
      title: '25 Seater Bharat Benz',
      image: bharatBenz25,
      seats: 25,
      price: '9,999'
    },
    { 
      title: '27 Seater Luxury Coach Hire',
      image: luxuryCoach27,
      seats: 27,
      price: '10,999'
    },
    { 
      title: '45 Seater Luxury Coach Hire',
      image: luxuryCoach45,
      seats: 45,
      price: '15,999'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/hero-banner.jpg')",
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">अतिथि देवो भवः</h1>
            <p className="text-xl md:text-2xl text-center">
              Light is faster, but we are safer. Live today. Tomorrow will cost more...
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Best Tourist Transport Operator in Noida</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our wide range of vehicles for all your travel needs. We ensure comfort, safety, and reliability.
          </p>
          
          <div className="relative px-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="!pb-14"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceCard 
                    title={service.title}
                    imageSrc={service.image}
                    seats={service.seats}
                    price={service.price}
                    features={service.features}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 
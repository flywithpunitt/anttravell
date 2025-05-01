import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/anttravel-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Add state for dropdowns
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dropdownMenus = {
    'BUS HIRE': [
      { title: 'BUS HIRE FOR OUTSTATION', path: '/bus-hire/outstation' },
      { title: 'AGRA TAJ MAHAL TOUR', path: '/bus-hire/agra-taj-mahal' },
      { title: 'CHALO AYODHYA', path: '/bus-hire/chalo-ayodhya' },
      { title: 'DELHI TOUR', path: '/bus-hire/delhi-tour' },
      { title: 'HARIDWAR RISHIKESH TOUR', path: '/bus-hire/haridwar-rishikesh' },
      { title: 'JAIPUR TOUR', path: '/bus-hire/jaipur-tour' },
      { title: 'JHAJJAR PRATAPGARH FARMS TRIP', path: '/bus-hire/jhajjar-pratapgarh' },
      { title: 'JIM CORBETT TOUR', path: '/bus-hire/jim-corbett' },
      { title: 'RISHIKESH SHIVPURI RIVER RAFTING TRIP', path: '/bus-hire/rishikesh-rafting' },
      { title: 'SONIPAT CHOKHI DHANI TRIP', path: '/bus-hire/sonipat-chokhi-dhani' }
    ],
    'CAR HIRE': [
      { title: 'CAR HIRE FOR LOCAL', path: '/car-hire/local' },
      { title: 'CAR HIRE FOR OUTSTATION', path: '/car-hire/outstation' },
      { title: 'AGRA TAJ MAHAL TOUR', path: '/car-hire/agra-taj-mahal' },
      { title: 'DELHI TOUR', path: '/car-hire/delhi-tour' },
      { title: 'HARIDWAR RISHIKESH TOUR', path: '/car-hire/haridwar-rishikesh' },
      { title: 'JAIPUR TOUR', path: '/car-hire/jaipur-tour' },
      { title: 'JIM CORBETT TOUR', path: '/car-hire/jim-corbett' }
    ],
    'TRAVELLER HIRE': [
      { title: 'TRAVELLER HIRE FOR LOCAL', path: '/traveller-hire/local' },
      { title: 'TRAVELLER HIRE FOR OUTSTATION', path: '/traveller-hire/outstation' },
      { title: 'AGRA TAJ MAHAL TOUR', path: '/traveller-hire/agra-taj-mahal' },
      { title: 'DELHI TOUR', path: '/traveller-hire/delhi-tour' },
      { title: 'HARIDWAR RISHIKESH TOUR', path: '/traveller-hire/haridwar-rishikesh' },
      { title: 'JAIPUR TOUR', path: '/traveller-hire/jaipur-tour' },
      { title: 'JHAJJAR PRATAPGARH FARMS TOUR', path: '/traveller-hire/jhajjar-pratapgarh' },
      { title: 'JIM CORBETT TOUR', path: '/traveller-hire/jim-corbett' },
      { title: 'SONIPAT CHOKHI DHANI TOUR', path: '/traveller-hire/sonipat-chokhi-dhani' }
    ]
  }

  const navItems = [
    { title: 'HOME', path: '/' },
    { title: 'ABOUT US', path: '/about' },
    { title: 'BUS TICKET', path: '/bus-ticket' },
    { title: 'BUS HIRE', path: '/bus-hire', hasDropdown: true },
    { title: 'CAR HIRE', path: '/car-hire', hasDropdown: true },
    { title: 'TRAVELLER HIRE', path: '/traveller-hire', hasDropdown: true },
    { title: 'GALLERY', path: '/gallery' },
    { title: 'ONLINE PAYMENT', path: '/payment' },
    { title: 'SEND ENQUIRY', path: '/enquiry' },
    { title: 'CONTACT US', path: '/contact' },
  ]

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).toUpperCase()
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).toUpperCase()
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'GOOD MORNING'
    if (hour < 17) return 'GOOD AFTERNOON'
    return 'GOOD EVENING'
  }

  const handleMouseEnter = (title) => {
    setActiveDropdown(title)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 text-gray-800 py-1.5 text-sm fixed w-full top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(currentTime)}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {formatTime(currentTime)}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {getGreeting()}
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:18001027408" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800-102-7408
              </a>
              <a href="mailto:sales@anttravels.com" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sales@anttravels.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white fixed w-full top-8 z-40 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="ANT Travels" className="h-16 w-auto transform hover:scale-105 transition-transform duration-200" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || 
                               (item.hasDropdown && dropdownMenus[item.title]?.some(menu => location.pathname === menu.path))
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 group flex items-center
                        ${isActive 
                          ? 'text-orange-600 bg-orange-50' 
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                    >
                      <span className="relative z-10">{item.title}</span>
                      {item.hasDropdown && (
                        <svg 
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform origin-left"></span>
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full transform origin-left"></span>
                    </Link>
                    
                    {/* Enhanced Dropdown Menu */}
                    {item.hasDropdown && activeDropdown === item.title && (
                      <div 
                        className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl py-3 z-50 transform opacity-100 scale-100 transition-all duration-200 origin-top"
                        onMouseEnter={() => handleMouseEnter(item.title)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="absolute top-0 left-6 -mt-2 w-4 h-4 bg-white transform rotate-45"></div>
                        {dropdownMenus[item.title].map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={`relative block px-6 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors group
                              ${location.pathname === dropdownItem.path ? 'bg-orange-50 text-orange-600' : ''}
                              ${index === 0 ? 'rounded-t-lg' : ''}
                              ${index === dropdownMenus[item.title].length - 1 ? 'rounded-b-lg' : ''}`}
                          >
                            <span className="relative z-10 flex items-center">
                              {dropdownItem.title}
                              <svg 
                                className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                            <span className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <span className="sr-only">Open menu</span>
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-xl my-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-between
                      ${location.pathname === item.path
                        ? 'text-orange-600 bg-orange-100' 
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                    onClick={() => !item.hasDropdown && setIsOpen(false)}
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.hasDropdown && dropdownMenus[item.title] && (
                    <div className="pl-4 space-y-1 mt-1">
                      {dropdownMenus[item.title].map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 flex items-center group
                            ${location.pathname === dropdownItem.path
                              ? 'text-orange-600 bg-orange-100' 
                              : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="relative flex items-center w-full">
                            {dropdownItem.title}
                            <svg 
                              className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-28"></div>
    </>
  )
}

export default Navbar 
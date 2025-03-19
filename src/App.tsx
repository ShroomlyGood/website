import React from 'react';
import { 
  Sprout, 
  MapPin, 
  Clock, 
  ChevronDown,
  Leaf,
  Coffee,
  Recycle
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=2000")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-7xl text-center mb-6">
            Shroomly Good
            <span className="block text-2xl md:text-3xl mt-2">Edinburgh's Urban Mushroom Farm</span>
          </h1>
          <button className="bg-[#2C4A3B] hover:bg-[#1a2c23] text-white font-open-sans py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Discover Our Mushrooms
          </button>
          <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1464638681273-0962066ade7e?auto=format&fit=crop&q=80&w=1000"
              alt="Corstorphine Hill view"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-playfair text-4xl text-[#2C4A3B] mb-6">Our Story</h2>
            <p className="font-open-sans text-gray-700 mb-6">
              Nestled on the historic Corstorphine Hill, Shroomly Good brings together Edinburgh's rich heritage 
              and modern sustainable farming. Our family has been nurturing this land for generations, 
              creating a unique urban farming experience with panoramic views of the city we love.
            </p>
            <div className="flex items-center gap-4 text-[#2C4A3B]">
              <Sprout className="w-6 h-6" />
              <span className="font-open-sans">Sustainable since 2015</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cultivation Process */}
      <section className="bg-[#2C4A3B] py-20 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl text-center mb-16">Our Cultivation Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Coffee className="w-12 h-12 mb-4" />,
                title: "Coffee Ground Base",
                description: "We upcycle local coffee grounds, enriched with seaweed nutrients."
              },
              {
                icon: <Leaf className="w-12 h-12 mb-4" />,
                title: "Natural Growth",
                description: "Climate-controlled environments using renewable energy."
              },
              {
                icon: <Recycle className="w-12 h-12 mb-4" />,
                title: "Zero Waste",
                description: "All byproducts are composted and reused in our process."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all"
              >
                {item.icon}
                <h3 className="font-playfair text-xl mb-2">{item.title}</h3>
                <p className="font-open-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl text-center text-[#2C4A3B] mb-16">Our Mushrooms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1542827387-d6c1670652b0?auto=format&fit=crop&q=80&w=600",
                name: "Pink Oyster Mushrooms",
                flavor: "Sweet and woody with seafood notes"
              },
              {
                image: "https://images.unsplash.com/photo-1612535500858-06e800115812?auto=format&fit=crop&q=80&w=600",
                name: "Golden Oyster",
                flavor: "Delicate and nutty"
              },
              {
                image: "https://images.unsplash.com/photo-1611411815239-382d8686c495?auto=format&fit=crop&q=80&w=600",
                name: "King Oyster",
                flavor: "Rich umami with meaty texture"
              },
              {
                image: "https://images.unsplash.com/photo-1586686816717-b648da61a087?auto=format&fit=crop&q=80&w=600",
                name: "Lion's Mane",
                flavor: "Delicate seafood sweetness"
              },
              {
                image: "https://images.unsplash.com/photo-1606133277199-602648d49e1c?auto=format&fit=crop&q=80&w=600",
                name: "Shiitake",
                flavor: "Rich and earthy"
              },
              {
                image: "https://images.unsplash.com/photo-1611411814730-12a1baae47c8?auto=format&fit=crop&q=80&w=600",
                name: "Blue Oyster",
                flavor: "Mild and delicate"
              }
            ].map((mushroom, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img 
                  src={mushroom.image}
                  alt={mushroom.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-playfair text-2xl text-white mb-2">{mushroom.name}</h3>
                  <p className="font-open-sans text-white">{mushroom.flavor}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#8B4513] hover:bg-[#6b340f] text-white font-open-sans py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Where to Buy
            </button>
          </div>
        </div>
      </section>

      {/* Location & Visit */}
      <section className="bg-[#708090] py-20 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-4xl mb-8">Visit Us</h2>
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <p className="font-open-sans">
                Corstorphine Hill,<br />
                Edinburgh EH12 6UT
              </p>
            </div>
            <div className="flex items-start gap-4 mb-8">
              <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-open-sans font-bold mb-2">Opening Hours:</p>
                <table className="font-open-sans">
                  <tbody>
                    <tr>
                      <td className="pr-4">Mon - Fri</td>
                      <td>9:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td className="pr-4">Saturday</td>
                      <td>10:00 - 16:00</td>
                    </tr>
                    <tr>
                      <td className="pr-4">Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button className="bg-[#4A90E2] hover:bg-[#357abd] text-white font-open-sans py-3 px-8 rounded-full transition-all transform hover:scale-105 mb-8">
              Book a Tour
            </button>
          </div>
          <div>
            <form className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-playfair text-2xl mb-6">Newsletter Signup</h3>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button className="w-full bg-white text-[#708090] font-open-sans py-2 rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C4A3B] text-white py-8 px-4 text-center font-open-sans">
        <p>© 2024 Shroomly Good Urban Mushroom Farm. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
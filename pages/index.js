import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyCard from '../components/PropertyCard'

export default function Home() {
  const properties = [
    {
      title: 'Luxury Villa in Karen',
      location: 'Karen, Nairobi',
      price: 'KES 45,000,000',
      img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1170&q=80',
      desc: 'Stunning 5-bedroom villa with swimming pool, garden, and panoramic views of the Ngong Hills.'
    },
    {
      title: 'Modern Apartment in Kileleshwa',
      location: 'Kileleshwa, Nairobi',
      price: 'KES 12,500,000',
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1170&q=80',
      desc: 'Elegant 3-bedroom apartment with modern amenities, gym, and 24-hour security.'
    },
    {
      title: 'Commercial Space in Westlands',
      location: 'Westlands, Nairobi',
      price: 'KES 180,000,000',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1170&q=80',
      desc: 'Prime commercial building with 10 floors, parking for 50 cars, and modern office facilities.'
    }
  ]

  return (
    <>
      <Head>
        <title>Crestvista Properties LTD - Where Value Meets Excellence</title>
        <meta name="description" content="Premium real estate sales and advisory across Nairobi and surrounding counties." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://z-cdn-media.chatglm.cn/files/16ba30e5-eede-4417-ac4d-e1c33c30608b_Favicon.png" />
      </Head>

      <Header />

      <main>
        <section className="hero">
          <div className="container">
            <h1>Where Value Meets Excellence</h1>
            <p>Premium real estate sales and advisory across Nairobi and surrounding counties.</p>
            <div className="hero-buttons">
              <a href="#properties" className="btn">Browse Properties</a>
              <a href="#contact" className="btn btn-outline">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="why-choose container">
          <h2>Why Choose Crestvista Properties</h2>
          <div className="cards-container">
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3>Transparent & Trustworthy</h3>
              <p>We operate with complete transparency in all our dealings, building trust through honest communication and ethical practices.</p>
            </div>
            <div className="card">
              <div className="card-icon">👔</div>
              <h3>Experienced Agents</h3>
              <p>Our team consists of seasoned real estate professionals with deep knowledge of the Kenyan property market.</p>
            </div>
            <div className="card">
              <div className="card-icon">📍</div>
              <h3>Prime Locations</h3>
              <p>We specialize in properties in Nairobi's most sought-after neighborhoods and emerging investment areas.</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Client-First Service</h3>
              <p>Your satisfaction is our priority. We go above and beyond to ensure your real estate journey is smooth and successful.</p>
            </div>
          </div>
        </section>

        <section id="properties" className="featured-properties container">
          <h2>Featured Properties</h2>
          <div className="properties-grid">
            {properties.map((p, i) => <PropertyCard key={i} property={p} />)}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

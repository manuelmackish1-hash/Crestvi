import Image from 'next/image'

export default function PropertyCard({property}){
  return (
    <article className="property-card">
      <div className="image-wrap">
        <Image src={property.img} alt={property.title} width={600} height={400} style={{objectFit:'cover'}} />
      </div>
      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">{property.location}</div>
        <div className="property-price">{property.price}</div>
        <p className="property-description">{property.desc}</p>
        <a className="btn" href="#contact">View Property</a>
      </div>
    </article>
  )
}

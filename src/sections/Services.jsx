
import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container justify-center flex flex-wrap gap-9">
      {services.map((service) => (
      <ServiceCard key={service.label} {...service}></ServiceCard>
      ))}
    </section>
  )
}

export default Services
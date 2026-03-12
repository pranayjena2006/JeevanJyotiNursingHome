import { Clock, MapPin, Heart, Building2 } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Located on Malgodawn Road, easily accessible"
    },
    {
      icon: Clock,
      title: "24-Hour Operations",
      description: "Round-the-clock medical services"
    },
    {
      icon: Heart,
      title: "Patient-Focused",
      description: "Compassionate care for every patient"
    },
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description: "Updated facilities and equipment"
    }
  ]

  return (
    <section id="about" className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            About Our Hospital
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Jeevan Jyoti Nursing Home is a well-established healthcare facility in Balangir district, 
            dedicated to providing quality medical care to the community of Titlagarh and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

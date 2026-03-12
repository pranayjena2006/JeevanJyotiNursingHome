import { 
  Baby, 
  Scissors, 
  Scan, 
  TestTube, 
  Pill, 
  BedDouble, 
  Building, 
  Activity 
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Baby,
      title: "Emergency Deliveries",
      description: "24-hour deliveries & C-sections"
    },
    {
      icon: Scissors,
      title: "Open Surgeries",
      description: "General surgical procedures"
    },
    {
      icon: Activity,
      title: "Laparoscopic Surgery",
      description: "Minimally invasive procedures"
    },
    {
      icon: Scan,
      title: "Ultrasound",
      description: "Diagnostic imaging services"
    },
    {
      icon: TestTube,
      title: "Laboratory Testing",
      description: "Complete pathology services"
    },
    {
      icon: Pill,
      title: "Medical Store",
      description: "In-house pharmacy"
    },
    {
      icon: BedDouble,
      title: "AC / Non-AC Cabins",
      description: "Comfortable private rooms"
    },
    {
      icon: Building,
      title: "General Wards",
      description: "Affordable care options"
    }
  ]

  return (
    <section id="services" className="py-12 px-4 bg-muted/50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Comprehensive healthcare services under one roof
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <service.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

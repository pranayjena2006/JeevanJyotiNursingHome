import { Siren, Wind, Users, Utensils, Check } from "lucide-react"

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Siren,
      title: "24/7 Emergency Support",
      items: ["Round-the-clock emergency care", "Immediate medical attention", "Ambulance coordination"]
    },
    {
      icon: Wind,
      title: "Patient Rooms",
      items: ["Air-conditioned cabins", "Non-AC rooms available", "Clean and comfortable"]
    },
    {
      icon: Users,
      title: "General Wards",
      items: ["Affordable care", "Attentive nursing staff", "Regular monitoring"]
    },
    {
      icon: Utensils,
      title: "Support Services",
      items: ["Visitor access", "Meal support", "Patient attendant facilities"]
    }
  ]

  return (
    <section id="facilities" className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Patient Facilities
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Comfort and care for every patient
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-xl border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <facility.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{facility.title}</h3>
              </div>
              <ul className="space-y-2">
                {facility.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

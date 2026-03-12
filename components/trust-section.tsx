import { Clock, Users, Heart, Scan } from "lucide-react"

export function TrustSection() {
  const badges = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Always available when you need us"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled surgical professionals"
    },
    {
      icon: Heart,
      title: "Trusted Provider",
      description: "Serving Titlagarh for 15+ years"
    },
    {
      icon: Scan,
      title: "Modern Diagnostics",
      description: "Latest medical equipment"
    }
  ]

  return (
    <section className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Why Choose Us
          </h2>
          <p className="text-primary-foreground/80 text-sm sm:text-base">
            Your trusted healthcare partner
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-primary-foreground/20 flex items-center justify-center mb-3">
                <badge.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-primary-foreground/80">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

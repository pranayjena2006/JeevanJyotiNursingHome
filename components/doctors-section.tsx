import { User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DoctorsSection() {
  const doctors = [
    {
      name: "Senior Surgeon",
      specialty: "General & Emergency Surgery",
      experience: "15+ years experience"
    },
    {
      name: "Obstetrics Specialist",
      specialty: "Maternity & Women's Health",
      experience: "Specialized in C-sections"
    },
    {
      name: "General Physician",
      specialty: "Primary Care & Diagnostics",
      experience: "Comprehensive care"
    }
  ]

  return (
    <section id="doctors" className="py-12 px-4 bg-muted/50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Our Medical Team
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Experienced doctors dedicated to your health
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-xl border border-border shadow-sm flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                <p className="text-sm text-primary">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground">{doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-card p-4 rounded-xl border border-border text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Contact us for consultation schedule
          </p>
          <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
            <a href="tel:+916655222999">
              <Phone className="h-4 w-4" />
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

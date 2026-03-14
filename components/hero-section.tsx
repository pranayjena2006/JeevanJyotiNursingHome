"use client"

import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background">
      {/* Hospital Image */}
      <div className="relative w-full h-48 sm:h-64 md:h-80">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2010%2C%202026%2C%2004_36_26%20PM-z1mmxYscAD5dd9gFwQ3i6vovr8mk1c.png"
          alt="Jeevan Jyoti Nursing Home building - Orthopaedics, Urology, Laparoscopy, Patholab"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance max-w-xl">
            24/7 Trusted Healthcare in Titlagarh
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-md text-pretty">
            Orthopaedics, Urology, Laparoscopy, Delivery, Caesarean & Diagnostics with compassionate care.
          </p>

          {/* CTA Buttons - Stacked on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base py-6 px-8 gap-2"
              asChild
            >
              <a href="tel:06655222999">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base py-6 px-8 gap-2"
              asChild
            >
              <a 
                href="https://maps.google.com/?q=Jeevan+Jyoti+Nursing+Home+Titlagarh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-4">
            <div className="bg-card p-4 rounded-xl shadow-sm border border-border text-center">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-xs text-muted-foreground">Emergency Care</p>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-sm border border-border text-center">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-xs text-muted-foreground">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

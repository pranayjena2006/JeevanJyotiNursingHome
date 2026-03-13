"use client"

import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            We are here to help you 24/7
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Phone */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-xs text-muted-foreground">Tap to call directly</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="w-full justify-start gap-2" asChild>
                <a href="tel:06655222999">
                  <Phone className="h-4 w-4" />
                  06655 222 999
                </a>
              </Button>

            </div>
          </div>

          {/* Address */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="text-xs text-muted-foreground">Visit us anytime</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Malgodawn Road, Titilagarh,<br />
              Odisha 767033, India
            </p>
            <Button className="w-full gap-2" variant="outline" asChild>
              <a 
                href="https://maps.google.com/?q=Jeevan+Jyoti+Nursing+Home+Titlagarh+Odisha" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </Button>
          </div>

          {/* Hours */}
          <div className="bg-card p-4 rounded-xl border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Operating Hours</h3>
                <p className="text-sm text-accent font-medium">Open 24 hours, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-xl overflow-hidden border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.0476!2d83.4939!3d20.2883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bc9e35b47e7e5%3A0x5f08e7d0c0c6d3c0!2sTitilagarh%2C%20Odisha!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jeevan Jyoti Nursing Home Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

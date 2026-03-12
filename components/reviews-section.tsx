"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Vattam Rajesh",
    badge: "Local Guide",
    time: "5 years ago",
    rating: 5,
    text: "Place is neat and tidy accompanied by both AC and non AC beds in the wards. Management here is Friendly nature. Staff here has good command on all the tests done.",
  },
  {
    name: "Rakhee Singhania",
    badge: null,
    time: "7 years ago",
    rating: 5,
    text: "Very nice and good service. Doctors and staffs are very good. Prompt service and awesome management.",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Real reviews from Google Maps
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-foreground text-sm">
                        {review.name}
                      </h3>
                      {review.badge && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {review.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {review.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 relative">
                  <Quote className="absolute -top-1 -left-1 h-4 w-4 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                    {review.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href="https://maps.google.com/?q=Jeevan+Jyoti+Nursing+Home+Titlagarh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            See all reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

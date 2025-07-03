"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "@/components/ui/CircleIcon";
import { Phone, Mail, MapPin, Clock, User, Calendar, MessageSquare, Briefcase } from "lucide-react";
import { sendAppointmentRequest } from "@/app/actions/appointment";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    
    const result = await sendAppointmentRequest({
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      preferredDate: formData.get("date") as string,
      message: formData.get("message") as string,
    });

    setLoading(false);
    setMessage(result.message);
    
    if (result.success) {
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Επικοινωνία</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας για να κλείσετε το ραντεβού σας
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/main_area.webp"
                  alt="I Ching Balance Way - Χώρος"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-2xl font-bold">Επισκεφτείτε μας</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Στοιχεία Επικοινωνίας</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Νίκης+61,+Άλιμος,+Greece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <CircleIcon
                    color="#d6b9b6"
                    size={48}
                    icon={<MapPin className="w-5 h-5" />}
                  />
                  <span>Νίκης 61, Άλιμος</span>
                </a>

                <a
                  href="tel:+306983384847"
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <CircleIcon
                    color="#6ca79a"
                    size={48}
                    icon={<Phone className="w-5 h-5" />}
                  />
                  <span>6983384847</span>
                </a>

                <a
                  href="mailto:iching.balanceway@gmail.com"
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <CircleIcon
                    color="#d6b9b6"
                    size={48}
                    icon={<Mail className="w-5 h-5" />}
                  />
                  <span>iching.balanceway@gmail.com</span>
                </a>

                <div className="flex items-center gap-4">
                  <CircleIcon
                    color="#6ca79a"
                    size={48}
                    icon={<Clock className="w-5 h-5" />}
                  />
                  <div>
                    <p className="font-medium">Ωράριο Λειτουργίας</p>
                    <p className="text-sm text-muted-foreground">
                      Δευτέρα - Παρασκευή
                    </p>
                    <p className="text-sm text-muted-foreground">
                      10:00 - 14:00 & 17:00 - 20:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.4721!2d23.7267!3d37.9195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f5e4e5c6d%3A0x0!2sΝίκης+61%2C+Άλιμος!5e0!3m2!1sel!2sgr!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </Card>
          </div>

          {/* Appointment Form */}
          <div>
            <Card id="appointment">
              <CardHeader>
                <CardTitle>Κλείστε Ραντεβού</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ονοματεπώνυμο *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Τηλέφωνο *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="69XXXXXXXX"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Υπηρεσία *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                      >
                        <option value="">Επιλέξτε υπηρεσία</option>
                        <option value="acupuncture">Βελονισμός</option>
                        <option value="massage">Μασάζ</option>
                        <option value="weight">Ρύθμιση Βάρους</option>
                        <option value="consultation">Συμβουλευτική</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Προτιμώμενη Ημερομηνία
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Μήνυμα
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {loading ? "Αποστολή..." : "Αποστολή Αιτήματος"}
                  </Button>

                  {message && (
                    <p className={`text-center text-sm ${message.includes("ελήφθη") ? "text-green-600" : "text-red-600"}`}>
                      {message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
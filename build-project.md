# I-Ching Balance Way - Build Instructions

## Project Overview

Build a blazing fast, single-page application (SPA) for I-Ching Balance Way (Balance Way). The app should be mobile-first, visually stunning, SEO-optimized for Greek content, and provide an exceptional user experience while preserving all content from the original site.

## Core Requirements

### Performance

- **Single Page Application** - No routing needed initially
- **Blazing Fast** - Optimize for speed with:
  - React Server Components where possible
  - Minimal client-side JavaScript
  - Optimized images and assets
  - Fast initial page load with loading.tsx
- **Loading State** - Create loading.tsx at app level for smooth transitions

### Design & UX

- **Mobile First** - Design for mobile screens, scale up for desktop
- **Beautiful UI** - Modern, clean, and visually appealing
- **Semantic Colors** - Configure a cohesive color system in globals.css
- **Smooth Interactions** - Subtle animations and transitions
- **Greek Typography** - Optimize for Greek text readability
- **Header Design** - Sticky header with elegant hover effects, mobile Sheet component

### SEO & Content

- **Language**: Greek (el-GR) with proper meta tags
- **Content Preservation**: All content from ichingbalance.gr must be included
- **Structured Data**: Add schema.org markup for local business
- **Meta Tags**: Complete Open Graph and Twitter cards
- **Sitemap**: Generate sitemap.xml for search engines

### Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **State Management**: React hooks (useState, useReducer)
- **Package Manager**: pnpm
- **Fonts**: Greek-optimized web fonts

## Color System Setup

Configure semantic colors in `app/globals.css`:

```css
@layer base {
  :root {
    /* Light mode colors - Natural, calming palette */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --primary: 25 95% 53%; /* Warm orange for energy/balance */
    --primary-foreground: 0 0% 100%;

    --secondary: 173 80% 40%; /* Teal for healing/harmony */
    --secondary-foreground: 0 0% 100%;

    --accent: 47 96% 53%; /* Golden yellow for wisdom */
    --accent-foreground: 222.2 84% 4.9%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 25 95% 53%;
  }

  .dark {
    /* Dark mode colors - maintain harmony */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... customize dark mode */
  }
}
```

## Component Architecture

### App Structure

```
app/
├── layout.tsx      # Root layout with fonts and metadata
├── page.tsx        # Main I-Ching SPA
├── loading.tsx     # Loading state component
└── globals.css     # Global styles and color system

components/
├── ui/            # shadcn/ui components (Button, Sheet, etc.)
│   └── CircleIcon.tsx  # Reusable icon component with colored backgrounds
├── i-ching/       # I-Ching specific components
│   ├── HexagramDisplay.tsx
│   ├── CoinToss.tsx
│   ├── Interpretation.tsx
│   └── History.tsx
├── layout/        # Layout components
│   ├── Header.tsx      # Sticky header with nav & hover effects
│   ├── Footer.tsx      # Contact info & social links
│   └── MobileNav.tsx   # Mobile navigation with Sheet
└── sections/      # Page sections
    ├── Hero.tsx        # Landing section with CTA
    ├── About.tsx       # Γνωρίστε μας section
    ├── Services.tsx    # Υπηρεσίες section
    └── Contact.tsx     # Επικοινωνία section
```

## Content Requirements (From ichingbalance.gr)

### Essential Greek Content

1. **Hero Section**

   - "I Ching: Balance Way"
   - Introduction to I Ching philosophy
   - Call-to-action for services

2. **About Section (Γνωρίστε μας)**

   - Katerina Dimitrakopoulou's story
   - Journey into alternative therapy (started 2020)
   - Chinese medicine philosophy
   - I Ching: balance way mission

3. **Services Section (Υπηρεσίες)**

   - Βελονισμός (Acupuncture): Balance method, electro acupuncture
   - Μασάζ (Massage): Cupping, moxibustion
   - Ρύθμιση βάρους (Weight Regulation): Diet, cellulite massage

4. **Contact Section (Επικοινωνία)**
   - Address: Νίκης 61, Άλιμος
   - Phone: 6983384847
   - Email: iching.balanceway@gmail.com
   - Hours: Δευτέρα-Παρασκευή, 10:00-14:00 και 17:00-20:00
   - Google Maps integration

### I Ching Philosophy Content

- Ancient text explanation ("Book of Changes")
- Balance and "elliptical movement of life"
- Interconnectedness concept
- 2,500-year Chinese medicine history

## Features to Implement

### Phase 1 - Core Functionality

1. **Navigation & Header**

   - Sticky header with blur backdrop
   - Smooth scroll to sections
   - Hover effects with underline animations
   - Mobile: Sheet component with hamburger menu
   - Navigation items: Αρχική, Γνωρίστε μας, Υπηρεσίες, Επικοινωνία

2. **Interactive I Ching Tool**

   - Hexagram generation with animations
   - Greek interpretations
   - Visual hexagram display
   - Session history tracking

3. **Contact Integration**
   - Click-to-call functionality (tel: links)
   - Email links (mailto: links)
   - Google Maps integration (opens in Google Maps app on mobile)
   - Social media links
   - Appointment request form with server action

### Phase 2 - Enhancements

1. **Animations**

   - Smooth coin flip animations
   - Hexagram line transitions
   - Section reveal animations on scroll
   - Header hover effects

2. **Advanced Features**
   - Appointment booking system
   - Blog/Articles section
   - Newsletter signup

## Server Actions & Contact Features

### Appointment Request Server Action

```typescript
// app/actions/appointment.ts
"use server";

interface AppointmentRequest {
  name: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate?: string;
  message?: string;
}

export async function sendAppointmentRequest(data: AppointmentRequest) {
  // TODO: Implement Viber API integration
  // For now, log the request and prepare for future Viber integration
  console.log("Appointment request received:", data);

  // Future implementation:
  // - Send Viber message to business number
  // - Store in database
  // - Send confirmation email

  return {
    success: true,
    message: "Το αίτημά σας ελήφθη. Θα επικοινωνήσουμε μαζί σας σύντομα!",
  };
}
```

### Contact Links Implementation

#### Phone Link

```tsx
// Click-to-call functionality
<a
  href="tel:+306983384847"
  className="flex items-center gap-2 hover:text-primary transition-colors"
>
  <CircleIcon color="#20A39E" size={40} icon={<Phone className="w-5 h-5" />} />
  <span>6983384847</span>
</a>
```

#### Google Maps Link

```tsx
// Opens Google Maps app on mobile, Google Maps website on desktop
<a
  href="https://maps.google.com/?q=Νίκης+61,+Άλιμος,+Greece"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-primary transition-colors"
>
  <CircleIcon
    color="#FF6B35"
    size={40}
    icon={<MapPin className="w-5 h-5" />}
  />
  <span>Νίκης 61, Άλιμος</span>
</a>

// Alternative: Embedded Google Maps iframe for desktop
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.123456789!2d23.123456!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sΝίκης+61,+Άλιμος!5e0!3m2!1sel!2sgr!4v1234567890"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### Appointment Form Component

```tsx
// components/sections/AppointmentForm.tsx
"use client";

import { sendAppointmentRequest } from "@/app/actions/appointment";
import { useState } from "react";

export function AppointmentForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await sendAppointmentRequest({
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      preferredDate: formData.get("date") as string,
      message: formData.get("message") as string,
    });
    setLoading(false);
    // Handle success/error
  }

  return <form action={handleSubmit}>{/* Form fields */}</form>;
}
```

## Header Implementation Details

### Desktop Header

```tsx
// Header.tsx
- Fixed/sticky positioning with backdrop blur
- Logo on left
- Navigation center/right with hover effects:
  - Underline animation on hover
  - Smooth color transitions
  - Active section highlighting
- CTA button with hover state
```

### Mobile Header

```tsx
// MobileNav.tsx using Sheet component
- Hamburger menu icon
- Sheet slides from right
- Full-height navigation
- Touch-friendly links
- Smooth open/close animations
```

## Footer Implementation Details

### Footer Design

```tsx
// Footer.tsx
- Mobile-first responsive design
- Three main sections:
  1. Brand & About section
  2. Quick links & Services
  3. Contact information with CircleIcon components
- Social media links with hover effects
- Copyright and legal links
- Dark background with light text for contrast
```

### Mobile Footer Features

- Stacked layout on mobile (single column)
- Touch-friendly tap targets (min 44px)
- Collapsible sections for better mobile UX
- Sticky contact CTA button
- Icon-based navigation for quick access

### Footer Content Structure

```tsx
<Footer>
  {/* Brand Section */}
  <div>
    <h3>I Ching: Balance Way</h3>
    <p>Ολιστική προσέγγιση στην υγεία</p>
  </div>

  {/* Quick Links */}
  <div>
    <h4>Γρήγοροι Σύνδεσμοι</h4>- Αρχική - Γνωρίστε μας - Υπηρεσίες - Επικοινωνία
  </div>

  {/* Contact with Icons */}
  <div>
    <h4>Επικοινωνία</h4>
    <CircleIcon icon={<MapPin />} /> Νίκης 61, Άλιμος
    <CircleIcon icon={<Phone />} /> 6983384847
    <CircleIcon icon={<Mail />} /> iching.balanceway@gmail.com
    <CircleIcon icon={<Clock />} /> Δευ-Παρ: 10:00-14:00, 17:00-20:00
  </div>

  {/* Social Media */}
  <div>
    <CircleIcon icon={<Facebook />} />
    <CircleIcon icon={<Instagram />} />
    <CircleIcon icon={<Linkedin />} />
  </div>
</Footer>
```

## SEO Implementation

### Meta Tags

```tsx
// In layout.tsx
export const metadata: Metadata = {
  title: "I Ching: Balance Way | Κατερίνα Δημητρακοπούλου",
  description:
    "Ανακαλύψτε την αρχαία κινεζική σοφία του I Ching και την ολιστική προσέγγιση στην υγεία. Βελονισμός, μασάζ και εναλλακτικές θεραπείες στον Άλιμο.",
  keywords:
    "I Ching, Ισορροπία, Βελονισμός, Κινέζικη Ιατρική, Άλιμος, Κατερίνα Δημητρακοπούλου",
  openGraph: {
    title: "I Ching: Balance Way",
    description:
      "Ολιστική προσέγγιση στην υγεία με βάση την αρχαία κινεζική σοφία",
    locale: "el_GR",
    type: "website",
    siteName: "I Ching Balance Way",
  },
  alternates: {
    canonical: "https://ichingbalance.gr",
  },
};
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "I Ching: Balance Way",
  "description": "Κέντρο εναλλακτικών θεραπειών και κινέζικης ιατρικής",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Νίκης 61",
    "addressLocality": "Άλιμος",
    "addressCountry": "GR"
  },
  "telephone": "+306983384847",
  "email": "iching.balanceway@gmail.com",
  "openingHours": "Mo-Fr 10:00-14:00,17:00-20:00"
}
```

## Development Guidelines

### Custom Components

#### CircleIcon Component

A reusable component for displaying icons with colored circular backgrounds:

```tsx
// components/ui/CircleIcon.tsx
import React from "react";

interface CircleIconProps {
  color: string;
  icon: React.ReactNode;
  size?: number;
}

export const CircleIcon = ({ color, size = 16, icon }: CircleIconProps) => {
  return (
    <div
      className="p-3 rounded-full"
      style={{
        backgroundColor: `${color}20`, // 20 is hex for 12% opacity
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ color: color }}>{icon}</div>
    </div>
  );
};
```

**Usage Examples:**

```tsx
// In Services.tsx for service icons
<CircleIcon
  color="#FF6B35"
  size={48}
  icon={<Activity className="w-6 h-6" />}
/>

// In Contact.tsx for contact method icons
<CircleIcon
  color="#20A39E"
  size={40}
  icon={<Phone className="w-5 h-5" />}
/>
```

### Adding Components

Always use shadcn/ui CLI:

```bash
# Essential components to add first
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add sheet
pnpm dlx shadcn@latest add navigation-menu
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add separator
```

### Performance Optimization

- Use `loading.tsx` for instant loading feedback
- Implement lazy loading for heavy components
- Optimize images with Next.js Image component
- Minimize client-side JavaScript
- Preload Greek fonts

### Mobile-First Design

- Start with 320px viewport
- Use Tailwind's responsive prefixes (sm:, md:, lg:)
- Touch-friendly UI elements (min 44x44px)
- Sheet component for mobile navigation
- Avoid hover-only interactions

### Greek Content Best Practices

- Use proper Greek typography (line-height, letter-spacing)
- Ensure proper encoding (UTF-8)
- Test with various Greek fonts
- Maintain readability on all devices

## Testing & Quality

- Test on real mobile devices
- Ensure < 3s initial load time
- Lighthouse score > 90 for all metrics
- Cross-browser compatibility
- Greek language text rendering
- Accessibility compliance (WCAG 2.1)

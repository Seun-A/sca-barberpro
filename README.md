# BarberPro – SheCodeAfrica Mentee Challenge
Online appointment scheduling and stylist portfolios


## Repository structure (Atomic Design)

### Overview
- **Customer**: Landing, Services & Pricing, Stylist Portfolios, Booking (3-step wizard), Reviews  
- **Auth**: Login, Register  
- **Admin**: Dashboard, Appointments, Services, Stylists, Reviews, Settings  

## Directory layout

```
sca-barberpro/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── services/
│   ├── stylists/
│   ├── booking/
│   ├── reviews/
│   ├── login/
│   ├── register/
│   └── admin/
│       ├── layout.tsx
│       ├── appointments/
│       ├── dashboard/
│       ├── reviews/
│       ├── services/
│       ├── settings/
│       └── stylists/
│
├── components/
│   ├── atoms/                    # Basic UI (Button, Input, Heading)
│   ├── molecules/                # Composed atoms (Card, NavLink)
│   ├── organisms/                # Sections (Header, Footer)
│   ├── templates/                # Layouts (PageLayout, AdminLayout)
│   └── index.ts
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Atomic levels

| Level      | Role              | Examples                    |
|-----------|-------------------|-----------------------------|
| **Atoms** | Smallest building blocks | Button, Input, Heading |
| **Molecules** | Atoms combined   | Card, NavLink               |
| **Organisms** | Complex sections | Header, Footer             |
| **Templates** | Page structure   | PageLayout, AdminLayout     |
| **Pages** | App Router routes | `app/**/page.tsx`           |

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use **Login** or **Go to admin dashboard** for `/admin/dashboard`.

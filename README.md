4Bytes-Tech — Company Website

Website - https://4bytes-tech.vercel.app/

A modern, responsive company website built with Next.js (App Router) and Tailwind CSS.
This project is designed to showcase services, projects, and contact information for 4Bytes-Tech with a clean, scalable architecture.

📌 Overview

This repository contains the source code for the official 4Bytes-Tech website.

Key goals of the project:

Clean and modern UI

Fully responsive (mobile, tablet, desktop)

SEO-friendly

Easy to maintain and scale

Production-ready deployment using Vercel

🚀 Tech Stack

Next.js (App Router)

React

TypeScript

Tailwind CSS

Node.js

Vercel (Deployment)

📁 Final Folder Structure
4bytes-tech/
├── public/
│   ├── hero.jpg
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   │
│   └── data/
│       └── services.ts
│
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── .gitignore
└── README.md

⚠️ Mandatory Rules (Very Important)

✅ Use App Router only

❌ DO NOT create a pages/ folder

Homepage file must be:

src/app/page.tsx


Layout file must be:

src/app/layout.tsx


Global styles must be in:

src/app/globals.css


Breaking these rules can cause:

Default Next.js page showing after deployment

Routing conflicts

Build failures

🛠️ Local Development Setup
1️⃣ Prerequisites

Make sure you have:

Node.js v18+

npm v9+

Check versions:

node -v
npm -v

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


Open your browser:

http://localhost:3000

🧪 Production Build Test (Required)

Before deploying, always test the production build locally:

npm run build
npm run start


If this works locally, deployment will work.

🎨 Styling & Theming

Tailwind CSS is preconfigured

Dark theme is applied globally

Global styles live in:

src/app/globals.css


Example:

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #0b1220;
  color: white;
}

🧩 Components Architecture
Layout Components

Navbar.tsx – Top navigation

Footer.tsx – Footer content

Section Components

Hero.tsx – Landing section

Services.tsx – Services cards

Projects.tsx – Portfolio/projects

Contact.tsx – Contact form & details

📦 Available NPM Scripts
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint

🌍 Deployment (Vercel – Recommended)
Steps:

Push code to GitHub

Go to https://vercel.com

Click New Project

Import your GitHub repository

Framework → Next.js (auto-detected)

Root directory → leave default

Click Deploy

🧯 Common Problems & Solutions
❌ Default Next.js page appears after deployment

✔ Ensure src/app/page.tsx exists
✔ Ensure there is no pages/ folder
✔ Clear Vercel build cache
✔ Redeploy

❌ Module not found / is not a module

✔ Ensure every component has:

export default function ComponentName() {}


✔ Restart dev server after creating new files

🔒 Best Practices Used

App Router only

Clean folder separation

Data-driven components

Production build testing

Early deployment verification

🔮 Future Enhancements

Framer Motion animations

SEO metadata optimization

Contact form backend (Formspree / EmailJS)

Image optimization with next/image

CMS integration (optional)

👨‍💻 Author

4Bytes-Tech
Professional Software, Web & App Development Services

✅ Project Status

🟢 Project initialized

🟢 Tailwind configured

🟢 App Router working

🟢 Deployment ready

🟡 UI sections in progress
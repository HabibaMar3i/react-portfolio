# Habiba Hassan Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.  
It highlights featured projects, experience, skills, education, and contact details in a clean one-page layout.

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Features

- Hero section with direct actions (email, LinkedIn, GitHub, CV download)
- Featured projects with tools, GitHub links, and live demos
- Experience timeline
- Grouped skills section for better readability
- Contact section with quick outreach actions
- Minimal interactive button hover effects

## Project Structure

```text
src/
  components/
    HeroSection.jsx
    ProjectsSection.jsx
    ProjectCard.jsx
    ExperienceSection.jsx
    SkillsSection.jsx
    ContactSection.jsx
  data/
    portfolioData.js
  App.jsx
  index.css
public/
  project-images/
  HabibaHassanCV.pdf
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Customize Content

Edit `src/data/portfolioData.js` to update:

- Profile information
- Project list
- Experience entries
- Skill groups
- Education text
- CV link (`profile.cvUrl`)

## CV Download Setup

To make the CV button work correctly:

1. Put your PDF in `public/`
2. Use the same filename referenced in data:

```js
cvUrl: '/HabibaHassanCV.pdf'
```

If you rename the file, update `cvUrl` to match exactly.

## Deployment

You can deploy this app on:

- Vercel
- Netlify
- GitHub Pages (with routing setup if needed)

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

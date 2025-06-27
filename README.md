<h1 align="center"><b> Artistly — Talent Booking Platform </b></h1>

Link - <a href="https://artistly-jydj.vercel.app/"> Link To Artistly </a>
<br>
<p align="center">
<img src="/public/image5.png" width="700" title="Artistly Demo">
</p>
<div align="center">

</div>

## About Us

<img src="/public/image4.png" width="700" title="Artistly Demo">

**Artistly** is a curated booking platform built to connect Event Planners and Artist Managers through vibrant, location-based talent profiles. Designed with storytelling and discovery in mind, the platform allows users to explore and engage with local performers effortlessly.

## Problem Statement

<img src="/public/image3.png" width="700" title="Artistly Demo">

Event organizers often struggle to discover verified artists in specific locations. Artistly streamlines this process through search filters, onboarding flows, and map-based discovery—making it easy to filter by categories like DJs, Dancers, Singers, and more.

## Features

<img src="/public/image.png" width="700" title="Artistly Demo">

General Features:
- Artist onboarding form with image upload and validation
- Category, location & fee range filtering
- Responsive grid of artist cards
- Dynamic routing with pre-applied filters from homepage
- Image previews, state persistence & modal detail views

#### Admin Tools
- Artist Manager Dashboard
- Add/view detailed artist profiles
- Fully responsive and mobile-optimized layout

## Tech Stack

- **Frontend**: React + Next.js App Router, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Form Validation**: react-hook-form + Zod
- **Image Upload**: FileReader (object URLs)
- **Deployment**: Vercel

## What Makes It Different

While other platforms may list artists statically, Artistly:
- Offers dynamic search and filtering
- Supports onboarding with live previews
- Persists onboarded artists in local context
- Uses semantic components, modular design, and type safety throughout

## Future Enhancements

- Connect to Cloudinary or Firebase for real image storage
- Artist availability and scheduling
- User authentication for artist logins
- Ratings and reviews system
- Interactive map with geospatial filters

## Installation

```bash
git clone https://github.com/coolshubhamsharma/artistly.git
cd artistly

## Install Dependencies

npm install

## Start The Development Server

npm run dev

## Build

npm run build

## Test

npm test


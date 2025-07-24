# Landing Page Creator

A full-stack web application that allows users to create professional landing pages for their organizations. Built with Next.js (frontend), NestJS (backend), and MongoDB (database).

## Features

- Create a landing page with organization name, about, history, phone, and email
- Preview the landing page instantly after submission
- Responsive, modern UI with loading and error states
- Data stored securely in MongoDB Atlas

## Feature Works

- Users will be able to add more information to their landing page in the future
- Option to choose color themes for their landing page
- Ability to upload images and select icons for a more personalized design

## Installation & Running

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- MongoDB Atlas account (free tier is fine)

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextjs-project
   ```
2. **Install frontend dependencies**
   ```bash
   npm install
   ```
3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```
4. **Configure MongoDB Atlas**
   - In `backend/.env`, set your connection string:
     ```env
     MONGODB_URI=your_mongodb_atlas_connection_string
     PORT=3001
     ```
5. **Run the backend**
   ```bash
   cd backend
   npm run start:dev
   ```
6. **Run the frontend** (in a new terminal)
   ```bash
   cd ..
   npm run dev
   ```
7. **Open your browser**
   - Go to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nextjs-project/
├── src/           # Frontend source code
├── backend/       # NestJS backend
├── public/
│   └── videos/
│       └── steps.mp4
└── README.md
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

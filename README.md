# Pizza Dashboard

A modern, server-rendered web application built with Next.js for managing pizza orders. Features include Google OAuth authentication, protected routes, and a responsive dashboard interface.

## Features

- 🔐 Secure authentication with Google OAuth
- 🛡️ Protected dashboard routes
- 📱 Responsive design for all devices
- 📊 Interactive pizza orders table
- 🔍 Order filtering and sorting
- 💅 Modern UI with Tailwind CSS

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- NextAuth.js
- date-fns
- Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Google Cloud Project with OAuth 2.0 credentials

### Environment Setup

1. Create a `.env.local` file in the root directory with the following variables:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret # Generate with: openssl rand -base64 32
```

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google OAuth2 API
4. Create OAuth 2.0 credentials
   - Application type: Web application
   - Authorized redirect URIs: 
     - http://localhost:3000/api/auth/callback/google (for development)
     - https://your-production-domain.com/api/auth/callback/google (for production)
5. Copy the Client ID and Client Secret to your `.env.local` file

## Project Structure

```
src/
├── app/                # App router pages and layouts
│   ├── api/           # API routes including auth
│   ├── auth/          # Authentication pages
│   └── dashboard/     # Protected dashboard pages
├── components/        # React components
│   ├── auth/         # Authentication components
│   ├── layout/       # Layout components
│   └── orders/       # Order-related components
├── data/             # Mock data and types
└── types/            # TypeScript type definitions
```

## Deployment

This application can be easily deployed to Vercel:

1. Push your code to a Git repository
2. Import the project to Vercel
3. Add the environment variables in the Vercel project settings
4. Deploy!

## License

MIT

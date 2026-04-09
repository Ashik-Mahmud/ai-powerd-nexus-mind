# Nexus Mind

An AI-powered intelligent assistant that answers your questions with precision and insight. Connect with an advanced AI system to get answers on general topics or leverage your own uploaded content for personalized responses.

## 🚀 Features

### 📚 General Questions
- Ask the AI anything on general topics
- Get intelligent, context-aware responses
- Powered by advanced language models
- Real-time conversation support

### 📤 Uploaded Questions & Answers
- Upload your own documents and content
- Ask questions specific to your uploaded materials
- Get personalized answers based on your data
- Seamless document management and processing

## 🛠️ Tech Stack

- **Frontend**: React with TypeScript
- **Framework**: Next.js 15+
- **Styling**: CSS
- **State Management**: Redux
- **API Integration**: CopilotKit

## 📋 Project Structure

```
nexus-mind/
├── app/                    # Application root
│   ├── api/               # API routes
│   │   └── copilotkit/   # CopilotKit integration
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # Reusable React components
│   ├── context/           # React Context definitions
│   ├── hooks/             # Custom React hooks
│   ├── redux/             # Redux store configuration
│   ├── services/          # API services
│   ├── utils/             # Utility functions
│   └── data/              # Static data
├── public/                # Static assets
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd nexus-mind
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file with required configuration

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 How to Use

### Authentication
- Visit `/login` to sign in to your account
- New users can register at `/register`
- After authentication, you'll be redirected to the dashboard

### Dashboard Features
All main features are accessible through the dashboard at `/dashboard`:

- **Chat** (`/dashboard`) - Ask general questions to the AI
- **Upload** (`/dashboard/upload`) - Upload documents for personalized answers
- **History** (`/dashboard/history`) - View conversation history
- **Help** (`/dashboard/help`) - Get help and documentation
- **Settings** (`/dashboard/settings`) - Customize your experience

### General Questions Mode
1. Navigate to the Chat section in the dashboard
2. Type your question about any general topic
3. Receive AI-powered responses in real-time

### Uploaded Content Mode
1. Go to the Upload section
2. Upload your documents or content
3. Ask specific questions about your uploaded materials
4. Get personalized answers based on your data

## 🔧 Configuration

- **ESLint**: Configured for code quality
- **TypeScript**: Type-safe development
- **PostCSS**: CSS processing

## 📝 License

[Add your license information here]

## 👨‍💻 Contributing

[Add contribution guidelines here] 
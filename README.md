# MindBloom

MindBloom is an interactive educational platform designed to help children with dyslexia through engaging games and screening tools. The application provides a comprehensive suite of games, progress tracking, and parental oversight to support early intervention and skill development.

## Features

### For Children
- **Dyslexia Screening**: Comprehensive assessment tools to identify potential dyslexia indicators
- **Educational Games**:
  - MemoryQuest: Memory enhancement exercises
  - MirrorMatch: Visual matching challenges
  - SoundSafari: Phonetic awareness activities
  - StoryWar: Narrative comprehension games
- **Progress Tracking**: Visual progress bars and skill charts
- **Reward System**: Achievement popups and motivation

### For Parents
- **Parent Dashboard**: Monitor child's progress and performance
- **Child Management**: Add and manage multiple children
- **Detailed Reports**: Comprehensive progress reports and analytics
- **Chatbot Support**: AI-powered assistance for parents

### Technical Features
- **Real-time Gameplay**: Interactive games with immediate feedback
- **Cross-platform**: Web-based application accessible on multiple devices
- **Secure Authentication**: Firebase-based user management
- **Data Persistence**: Supabase integration for data storage

## Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Styling with custom CSS and component-specific stylesheets
- **Firebase** - Authentication and real-time database

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Web application framework
- **Supabase** - Open-source Firebase alternative for database and API

### Machine Learning Services
- **Python** - Programming language for ML implementations
- **Custom ML Models** - Specialized algorithms for dyslexia assessment

## Installation

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn package manager
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MindBloom
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

3. **Server Setup**
   ```bash
   cd ../server
   npm install
   ```

4. **ML Services Setup**
   ```bash
   cd ../ml_services
   pip install -r requirements.txt
   ```

## Usage

### Development

1. **Start the ML Services**
   ```bash
   cd ml_services
   python main.py
   ```

2. **Start the Backend Server**
   ```bash
   cd server
   npm start
   ```

3. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Production Build

1. **Build the Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start Production Server**
   ```bash
   cd server
   npm start
   ```

## Project Structure

```
MindBloom/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages/screens
│   │   ├── context/       # React context providers
│   │   ├── firebase/      # Firebase configuration
│   │   ├── services/      # API services and utilities
│   │   └── styles/        # CSS stylesheets
│   ├── public/            # Static assets
│   └── package.json
├── server/            # Node.js backend server
│   ├── server.js          # Main server file
│   ├── package.json       # Server dependencies
│   └── word_bank.json     # Word database
└── ml_services/       # Python ML services
    └── main.py            # ML processing scripts
```

## API Documentation

The backend server provides RESTful APIs for:
- User authentication and management
- Game data and progress tracking
- Report generation
- ML service integration

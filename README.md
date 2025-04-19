# Wrapped Whenever

![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

**Access your Spotify listening statistics anytime – not just at the end of the year!**

Wrapped Whenever gives you insights into your music listening habits on demand, similar to Spotify Wrapped but available whenever you want.

## 📊 Features

- View your top tracks, artists, and genres
- Analyze your listening history
- Discover your music preferences

## 🔍 Project Structure

This project uses a client-server architecture:

```
Wrapped-Whenever/
├── front-end/           # React TypeScript frontend
└── back-end/            # Flask Python backend
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.6+)
- Spotify Developer Account

### Setting Up the Backend

1. Navigate to the backend directory:
   ```bash
   cd back-end
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file with your Spotify credentials:
   ```
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:5000/callback
   ```

5. Run the Flask server:
   ```bash
   flask run
   ```

### Setting Up the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd front-end
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router Dom
- Query String

### Backend
- Flask
- Spotipy (Spotify API wrapper)
- Flask-CORS
- Flask-Session

## 📦 API Integration

This application interacts with the Spotify Web API to:
- Authenticate users via OAuth
- Retrieve user listening history
- Analyze music preferences
- Generate personalized statistics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Abdulrahem Mahgoub**

- GitHub: [@abdopeek](https://github.com/abdopeek)

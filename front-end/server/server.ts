import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your OAuth-related routes
app.get('http://127.0.0.1:5000/callback', (req, res) => {
    const code = req.query.code as string;
    // You would handle the OAuth token exchange here
    // For now, let's just return the code for demonstration purposes
    res.json({ message: "Received code", code: code });
});

app.get("http://127.0.0.1:5000/songs")

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

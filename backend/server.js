import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();

// More comprehensive CORS configuration
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Handle preflight requests
app.options("*", cors());

app.use(cookieParser()); // to read cookies from requests
app.use(express.json()); // to read JSON body from requests

// Hardcoded "user database"
const users = [
  { id: 1, username: "test", password: "password", name: "Riya Negi" },
];

// Secret key for signing JWT
const SECRET_KEY = "supersecretkey";

// POST /login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create a JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  // Set httpOnly cookie with JWT
  res.cookie('authToken', token, {
    httpOnly: true,      // Cannot be accessed via JavaScript
    secure: false,       // Set to true in production with HTTPS
    sameSite: 'lax',     // CSRF protection
    maxAge: 3600000      // 1 hour (same as JWT expiration)
  });

  // Send only user info back (no token in response body)
  res.json({
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
    },
  });
});

// POST /logout route
app.post("/logout", (req, res) => {
  // Clear the auth cookie
  res.clearCookie('authToken', {
    httpOnly: true,
    secure: false,       // Set to true in production with HTTPS
    sameSite: 'lax'
  });
  
  res.json({ message: "Logged out successfully" });
});

// Start server
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

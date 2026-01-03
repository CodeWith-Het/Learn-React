const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Tera Frontend URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  // --- FAKE AI LOGIC (No API Key Needed) ---
  socket.on("request-analysis", (data) => {
    console.log("Fake AI is thinking... 🧠");

    // Thoda delay add karte hain taaki asli lage (2 seconds)
    setTimeout(() => {
      
      // Ye result hamesha same aayega (Presentation ke liye perfect)
      const fakeResult = {
        winner: "Senior Dev",
        score: 95,
        complexity: "O(n) vs O(1)", // Senior ka code fast hai
        security_risk: false,
        suggestion: "Senior code uses modern ES6 syntax and is more readable."
      };

      console.log("AI Analysis Complete (Fake):", fakeResult);
      socket.emit("analysis-result", fakeResult);

    }, 2000); // 2000ms = 2 seconds delay
  });

  // --- SYNC CODE LOGIC ---
  socket.on("sync-code", (data) => {
    socket.broadcast.emit("code-update", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING (Fake AI Mode) on port 3001 🚀");
});
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1, #8fd3f4, #84fab0, #ff6ec7);
  background-size: 600% 600%;
  animation: gradientMove 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 30px;
  color: #fff;
}

.container {
  max-width: 850px;
  width: 100%;
  background: rgba(255,255,255,0.15);
  padding: 25px;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  animation: fadeIn 1s ease;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #ff6ec7, #ffcc70, #00f2fe, #7efff5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: colorWave 5s linear infinite;
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 15px;
  border-radius: 15px;
  border: none;
  resize: none;
  outline: none;
  font-size: 14px;
  background: rgba(255,255,255,0.25);
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(255,255,255,0.2);
}

textarea:focus {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(255,255,255,0.7), 0 0 25px #ff6ec7;
}

textarea::placeholder {
  color: #eee;
}

button {
  padding: 14px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(45deg, #ff6ec7, #ffa260, #00f2fe, #7efff5);
  background-size: 300% 300%;
  color: white;
  transition: transform 0.3s, box-shadow 0.3s, background-position 2s;
  animation: buttonPulse 3s infinite;
}

button:hover {
  transform: translateY(-4px) scale(1.05);
  background-position: 100% 0;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3), 0 0 20px #ff6ec7;
}

.result-section {
  margin-top: 25px;
  text-align: center;
  animation: slideUp 1s ease;
}

.result-section p {
  font-size: 1.2rem;
  margin: 8px 0;
  background: linear-gradient(90deg, #f6d365, #fda085, #a1c4fd, #c2e9fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hidden {
  display: none;
}

canvas {
  margin-top: 20px;
  background: rgba(255,255,255,0.2);
  padding: 20px;
  border-radius: 15px;
  animation: fadeIn 1.5s ease;
  box-shadow: 0 0 20px rgba(255,255,255,0.3), 0 0 30px #00f2fe;
}

/* Background Animation */
@keyframes gradientMove {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

/* Text Gradient Wave */
@keyframes colorWave {
  0% {background-position: 0%;}
  100% {background-position: 200%;}
}

/* Fade Animations */
@keyframes fadeIn {
  from {opacity: 0; transform: scale(0.9);}
  to {opacity: 1; transform: scale(1);}
}

@keyframes slideUp {
  from {opacity: 0; transform: translateY(30px);}
  to {opacity: 1; transform: translateY(0);}
}

/* Button Pulse */
@keyframes buttonPulse {
  0% {box-shadow: 0 0 5px #ff6ec7, 0 0 10px #ffa260;}
  50% {box-shadow: 0 0 20px #00f2fe, 0 0 30px #7efff5;}
  100% {box-shadow: 0 0 5px #ff6ec7, 0 0 10px #ffa260;}
}

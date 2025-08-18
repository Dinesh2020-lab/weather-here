function analyzeResume() {
  const resumeText = document.getElementById("resumeText").value.toLowerCase();
  const jobText = document.getElementById("jobText").value.toLowerCase();

  if (!resumeText || !jobText) {
    alert("⚠ Please paste both Resume and Job Description!");
    return;
  }

  // Extract keywords (words with 4+ letters)
  const jobWords = jobText.match(/\b[a-z]{4,}\b/g) || [];
  const resumeWords = resumeText.match(/\b[a-z]{4,}\b/g) || [];

  const jobSet = new Set(jobWords);
  const resumeSet = new Set(resumeWords);

  let matched = [];
  let missing = [];

  jobSet.forEach(word => {
    if (resumeSet.has(word)) {
      matched.push(word);
    } else {
      missing.push(word);
    }
  });

  const score = Math.round((matched.length / jobSet.size) * 100);

  // Update UI
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = score;
  document.getElementById("missing").textContent = missing.slice(0,10).join(", ") || "None";

  // Chart.js with colorful doughnut
  const ctx = document.getElementById("resumeChart").getContext("2d");
  if (window.resumeChart) window.resumeChart.destroy();
  window.resumeChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Matched Keywords", "Missing Keywords"],
      datasets: [{
        data: [matched.length, missing.length],
        backgroundColor: [
          "rgba(72,239,128,0.9)",   // green
          "rgba(255,99,132,0.9)"    // red
        ],
        borderColor: [
          "rgba(72,239,128,1)",
          "rgba(255,99,132,1)"
        ],
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: { color: "#fff", font: { size: 14 } }
        }
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}

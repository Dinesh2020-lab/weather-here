function analyzeResume() {
  const resume = document.getElementById("resume").value.toLowerCase();
  const job = document.getElementById("jobDescription").value.toLowerCase();
  const result = document.getElementById("result");
  const matchScore = document.getElementById("matchScore");
  const strengths = document.getElementById("strengths");
  const weaknesses = document.getElementById("weaknesses");
  const ctx = document.getElementById("chart").getContext("2d");

  if (!resume || !job) {
    alert("Please paste both Resume and Job Description!");
    return;
  }

  const jobKeywords = job.split(/\W+/).filter(w => w.length > 3);
  let matched = jobKeywords.filter(word => resume.includes(word));
  let score = Math.round((matched.length / jobKeywords.length) * 100);

  result.classList.remove("hidden");
  matchScore.innerText = "Match Score: " + score + "%";
  strengths.innerText = "✅ Strengths: " + (matched.join(", ") || "None");
  weaknesses.innerText = "❌ Weaknesses: " + (jobKeywords.filter(w => !matched.includes(w)).join(", ") || "None");

  // 🌈 Colorful chart
  if (window.resumeChart) {
    window.resumeChart.destroy();
  }

  window.resumeChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Matched", "Not Matched"],
      datasets: [{
        data: [score, 100 - score],
        backgroundColor: [
          "rgba(255,99,132,0.9)",   // red-pink
          "rgba(54,162,235,0.9)",   // blue
          "rgba(255,206,86,0.9)",   // yellow
          "rgba(75,192,192,0.9)",   // teal
          "rgba(153,102,255,0.9)",  // violet
          "rgba(255,159,64,0.9)"    // orange
        ],
        borderWidth: 3,
        borderColor: "#fff",
        hoverOffset: 15
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#fff",
            font: {
              size: 16,
              weight: "bold"
            }
          }
        }
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}

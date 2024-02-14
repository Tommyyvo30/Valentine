function generateSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  const size = Math.random() * 5 + 5; // Random size between 5px and 10px
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  // Random position within the container
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.left = `${Math.random() * 100}%`;

  // Randomly assign color matching the roses
  const colors = ["#d52d58"]; // Red, Blue, White
  const colorIndex = Math.floor(Math.random() * colors.length);
  sparkle.style.backgroundColor = colors[colorIndex];

  // Append to the container
  document.getElementById("sparkleContainer").appendChild(sparkle);

  // Remove sparkle after animation ends (1.5 seconds)
  setTimeout(() => sparkle.remove(), 1500);
}

// Generate sparkles at intervals
setInterval(generateSparkle, 200); // Adjust timing as neede

document.getElementById("yesButton").addEventListener("click", function () {
  // Slowly display the giant image
  var giantImageContainer = document.getElementById("giantImageContainer");
  giantImageContainer.style.display = "flex";
  giantImageContainer.style.opacity = "0";
  var opacity = 0;
  var fadeInInterval = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
      alert("5th times the charm heh");
    } else {
      opacity += 0.005;
      giantImageContainer.style.opacity = opacity;
    }
  }, 10);
});

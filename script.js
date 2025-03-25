console.log("📡 Script is running!");

document.getElementById('meal-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  console.log("📤 Form submitted!");

  const photo = document.getElementById('meal-photo').files[0];
  const description = document.getElementById('description').value;

  if (!photo || !description) {
    alert('Please upload a photo and enter a description.');
    return;
  }

  const formData = new FormData();
  formData.append('photo', photo);
  formData.append('description', description);

  try {
    const res = await fetch('https://calorie-estimator-backend-zjtk.onrender.com', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();

    if (data.result) {
      alert("🥗 Estimated Calories:\n\n" + data.result);
    } else {
      alert("⚠️ No result returned.");
    }
  }

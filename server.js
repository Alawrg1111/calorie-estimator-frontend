document.getElementById('meal-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const photoInput = document.getElementById('meal-photo');
  const descriptionInput = document.getElementById('description');

  const file = photoInput.files[0];
  const description = descriptionInput.value;

  if (!file || !description) {
    alert('Please upload a photo and enter a description.');
    return;
  }

  // Simulate storing the image and text
  const formData = new FormData();
  formData.append('photo', file);
  formData.append('description', description);

  console.log('Submitting...');
  console.log('Photo:', file);
  console.log('Description:', description);

  alert('Submission successful! (Check console for simulated upload)');

  // You can replace this with a real fetch call to your backend/server
  // fetch('/upload-endpoint', {
  //   method: 'POST',
  //   body: formData,
  // }).then(response => {
  //   if (response.ok) alert('Uploaded!');
  // });
});

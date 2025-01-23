// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm");

  form?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Capture form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generate resume HTML content
    const resumeContent = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    // Display the generated resume in the "generatedResume" div
    const resumeContainer = document.getElementById("generatedResume");
    if (resumeContainer) {
      resumeContainer.innerHTML = resumeContent;
    }
  });
});

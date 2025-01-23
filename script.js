// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        // Capture form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Generate resume HTML content
        var resumeContent = "\n      <h2>".concat(name, "</h2>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
        // Display the generated resume in the "generatedResume" div
        var resumeContainer = document.getElementById("generatedResume");
        if (resumeContainer) {
            resumeContainer.innerHTML = resumeContent;
        }
    });
});

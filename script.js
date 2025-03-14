// Sample database with 4 students' results
const resultsDatabase = {
  123456: {
    name: "John Doe",
    semester: "1st",
    subjects: [
      { code: "CS101", name: "Mathematics", marks: 85, grade: "A" },
      { code: "CS102", name: "Physics", marks: 78, grade: "B+" },
      { code: "CS103", name: "Chemistry", marks: 80, grade: "A-" },
      { code: "CS104", name: "Programming", marks: 90, grade: "A+" },
    ],
    sgpa: "8.5",
    status: "Pass",
    date: "14/03/2025",
  },
  654321: {
    name: "Jane Smith",
    semester: "2nd",
    subjects: [
      { code: "CS201", name: "Data Structures", marks: 70, grade: "B" },
      { code: "CS202", name: "OOP", marks: 75, grade: "B+" },
      { code: "CS203", name: "DBMS", marks: 80, grade: "A" },
      { code: "CS204", name: "Networks", marks: 85, grade: "A-" },
    ],
    sgpa: "7.8",
    status: "Pass",
    date: "14/03/2025",
  },
  789012: {
    name: "Alice Brown",
    semester: "3rd",
    subjects: [
      { code: "CS301", name: "Algorithms", marks: 88, grade: "A" },
      { code: "CS302", name: "Operating Systems", marks: 72, grade: "B" },
      { code: "CS303", name: "Software Eng.", marks: 79, grade: "B+" },
      { code: "CS304", name: "AI", marks: 92, grade: "A+" },
    ],
    sgpa: "8.2",
    status: "Pass",
    date: "14/03/2025",
  },
  345678: {
    name: "Bob Johnson",
    semester: "4th",
    subjects: [
      { code: "CS401", name: "Cybersecurity", marks: 80, grade: "A-" },
      { code: "CS402", name: "ML", marks: 78, grade: "B+" },
      { code: "CS403", name: "Big Data", marks: 76, grade: "B" },
      { code: "CS404", name: "Cloud Computing", marks: 85, grade: "A" },
    ],
    sgpa: "8.0",
    status: "Pass",
    date: "14/03/2025",
  },
};

// Function to display result
document.getElementById("view-result").addEventListener("click", function () {
  let enrollment = document.getElementById("enrollment").value.trim();
  let captchaInput = document.getElementById("captcha-input").value.trim();
  let captchaText = document.getElementById("captcha-text").textContent;
  let resultDiv = document.getElementById("result-display");

  if (enrollment === "") {
    alert("Please enter Enrollment No.");
    return;
  }

  if (captchaInput !== captchaText) {
    alert("Invalid CAPTCHA!");
    return;
  }

  if (resultsDatabase[enrollment]) {
    let result = resultsDatabase[enrollment];

    let resultHTML = `
            <h3>Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</h3>
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Semester:</strong> ${result.semester}</p>
            <table>
                <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Marks</th>
                    <th>Grade</th>
                </tr>`;

    result.subjects.forEach((sub) => {
      resultHTML += `
                <tr>
                    <td>${sub.code}</td>
                    <td>${sub.name}</td>
                    <td>${sub.marks}</td>
                    <td>${sub.grade}</td>
                </tr>`;
    });

    resultHTML += `</table>
            <p><strong>SGPA:</strong> ${result.sgpa}</p>
            <p><strong>Status:</strong> ${result.status}</p>
            <p><strong>Date:</strong> ${result.date}</p>
            <p class="disclaimer">Disclaimer: The data belongs to RGPV.</p>
        `;

    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML = "<p>No result found for this Enrollment No.</p>";
    resultDiv.style.display = "block";
  }
});

// Generate CAPTCHA
function generateCaptcha() {
  let captchaText = Math.random().toString(36).substring(2, 7).toUpperCase();
  document.getElementById("captcha-text").textContent = captchaText;
}

window.onload = generateCaptcha;

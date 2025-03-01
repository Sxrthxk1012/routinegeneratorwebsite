document.getElementById("workoutForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form refresh

    let goal = document.getElementById("goal").value;
    let experience = document.getElementById("experience").value;
    let workoutType = document.getElementById("workoutType").value;

    let pdfFiles = {
        "weight_loss": {
            "Beginner": {
                "Bodyweight": "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
            }
        }
    };

    let selectedPDF = pdfFiles[goal]?.[experience]?.[workoutType];

    if (!selectedPDF) {
        document.getElementById("status").innerText = "No routine available.";
        return;
    }

    let pdfLink = document.getElementById("pdfLink");
    pdfLink.href = selectedPDF;
    pdfLink.setAttribute("download", "Workout_Routine.pdf"); // Force download
    pdfLink.style.display = "block"; 

    document.getElementById("result").style.display = "block";
});

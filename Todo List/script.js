
document.querySelector("#add").onclick = function() {
    if (document.querySelector('.addtask input').value.length == 0) {
        alert("Please enter a task");
    } else {
        // Create the new task HTML
        const taskHTML = `
            <div class="single-task">
                <div class="task">
                    <h2>
                        ${document.querySelector(".addtask input").value}
                    </h2>
                </div>
                <div class="delete">
                    <h2>
                        Delete
                    </h2>
                </div>
            </div>
        `;

        // Append the task to the task list
        document.querySelector(".tasks").innerHTML += taskHTML;

        // Clear the input field after adding the task
        document.querySelector('.addtask input').value = '';
    }
}

// Use event delegation to listen for clicks on the delete buttons
document.querySelector(".tasks").addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("delete")) {
        // Find the parent task and remove it
        event.target.closest('.single-task').remove();
    }
});

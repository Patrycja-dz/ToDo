{
    const tasks = [
    ];
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    }
    const removeTask = taskIndex => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const doneTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render()
    }
    const addEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });
        const doneButtons = document.querySelectorAll(".js-done");
        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                doneTask(index);
            });
        });
    }
    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
           <li
           class="list__item${task.done ? " list__item--done" : ""}"
           >
           <button class = "list__button js-done">✅</button>
           ${task.content}
           <button class = "list__button list__button--remove js-remove">🗑️</button>
           </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
        addEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;

        };
        addNewTask(newTaskContent);
    };
    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
       
    };
    init();
};
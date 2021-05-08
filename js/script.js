{
    const tasks = [{
            content: "omomom",
            done: true,
        },
        {
            content: "buebeu",
            done: false,
        },
    ];


    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
           <li
           ${task.done ? "list__item--done" : "list__item"}
           >
           <button class = "list__button js-done">✅</button>
           <button class = "list__button list__button--remove js-remove">🗑️</button>
           ${task.content}
           </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    }
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;

        };
        addNewTask(newTaskContent);
    };
    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit)
        render()
    };
    init();
};
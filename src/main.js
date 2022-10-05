import "./css/style.css";
// import refs from "./refs";
// import { addTaskToLocalStorage, createTask } from "./services";
// import { renderTask } from "./markup";

// _____________________________REFS__________________________________________
const refs = {
    form: document.querySelector(".js-form"),
    list: document.querySelector(".js-body"),
};
// console.log(refs.form);
export default refs;

// __________________________________MAIN_______________________________

refs.form.addEventListener("submit", onAddTask);

function onAddTask(e) {
    e.preventDefault();
    const inputVal = e.currentTarget.elements.message.value.trim();
    if (!inputVal) {
        console.log("PUSTO");
        return;
    }
    const data = createTask(inputVal);
    console.log(data);
    addTaskToLocalStorage(data);
    refs.list.insertAdjacentHTML("beforeend", renderTask([data]));
}

// ___________________________________________SERVIS______________________________________

const TASKS = "list_of_tasks";

// console.log(getTaskFromLocalStorage());

export function addTaskToLocalStorage(task) {
    const parsedLocalStorage = getTaskFromLocalStorage(TASKS);
    const tasks = parsedLocalStorage ? JSON.parse(parsedLocalStorage) : [];
    tasks.push(task);
    localStorage.setItem(TASKS, JSON.stringify(tasks));
}

function getTaskFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export function createTask(inputVal) {
    return { inputVal, isChecked: false, id: Date.now() };
}

// ___________________________________MARKUP__________________________________________
export function renderTask(tasks) {
    return tasks
        .map(({ inputVal, isChecked, id }) => {
            return `<li class=${isChecked ? "item checked" : ""} data-id=${id}>
                <p class="text">${inputVal}</p>
                <button class="button" type="button"></button>
            </li>`;
        })
        .join("");
}

import "./css/style.css";
import refs from "./refs";
import { addTaskToLocalStorage, createTask } from "./services";
import { renderTask } from "./markup";

refs.form.addEventListener("submit", onAddTask);

function onAddTask(e) {
    e.preventDefault();
    const inputVal = e.currentTarget.elements.message.value.trim();
    if (!inputVal) {
        console.log("PUSTO");
        return;
    }
    const data = createTask(inputVal);
    addTaskToLocalStorage(data);
    refs.list.insertAdjacentHTML("beforeend", renderTask([data]));
}

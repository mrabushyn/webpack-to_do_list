export function renderTask (tasks) {
  return tasks.map(({inputVal, isChecked, id}) => {
    return `<li class=${isChecked ? 'item checked' : ''} data-id=${id}>
                <p class="text">${inputVal}</p>
                <button class="button" type="button"></button>
            </li>`
  }).join('') 
}


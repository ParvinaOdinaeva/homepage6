{ // blok

  // - tablica (stworzenie przykładowej tablicy ([] = array) obiektów z zadaniami (wyrażeniami = content) task1 i task2)
  const tasks = [ 
    {  //objekt
      content: "task1",
      done: false
    },
    {  //objekt
      content: "task2",
      done: true
    },
  ];


  // - zaprzeczamy dodaniu nowego zadania (do właściwości done dodajemy przciwieństwo właściwości done z !)
  const doneTask = (index) => {
    tasks[index].done = !tasks[index].done; 
    render();
  };

  // - usuwamy (splice) 1 zadanie z listy
  const deleteTask = (index) => {
    tasks.splice(index, 1); 
    render();
  };


  // - budujemu jakiś tekst w HTML ("" - pusty łańcuch znaków)
  // - iterujemy po każdym zadaniu, aby przy każdym kolejnym zadaniu dodać do HTML kolejny punkt listy <li>
  // - sprawdzamy czy zadanie jest wykonane czy nie za pomocą przekreślenia (text-decoration: line-through)
  // - dodane przyciski Done i Delete z klasami js-done i js-delete pobierają funkcje doneButtons i deleteButtons
  // - na koniec powyższy htmlString wpisujemy do listy (js-list)
  const render = () => {
    let htmlString = "";
    for (const list of tasks) {
      htmlString += ` 
      <li${list.done ? " style=\"text-decoration: line-through\"" : ""}> 
      <button class="js-done">Done?</button>
      ${list.content} 
      <button class="js-delete">Delete</button>
        </li>
    `;
    }
    document.querySelector(".js-list").innerHTML = htmlString;

    const doneButtons = document.querySelectorAll(".js-done");
    doneButtons.forEach((doneButtons, index) => {
      doneButtons.addEventListener("click", () => {
        doneTask(index);
      });
    })

    const deleteButtons = document.querySelectorAll(".js-delete");
    deleteButtons.forEach((deleteButtons, index) => {
      deleteButtons.addEventListener("click", () => {
        deleteTask(index);
      });
    })

  };

  // - fukcja dodawania nowych zadań do listy poprzez push
  const addNewTask = (newInputContent) => {
    tasks.push({ 
      content: newInputContent,
    });
    render();
  };

  // 3 krok - deklaracja (stworzenie) funckji onFromSubmit poprzez:
  // - blokadę wysyłkę formularza
  // - pobranie wartości pola formularza (input) poprzez złapanie js-input za pomocą stałej newInputContent 
  // (value - wartość, trim() - usunięcie białych znaków z obu stron)
  // - wychodzimy z pola jeśli tekst jest pusty (return;) lub dodajemy do listy nowe zadanie za pomocą addNewTask
  const onFromSubmit = (event) => {
    event.preventDefault();
    const newInputContent = document.querySelector(".js-input").value.trim();
    if (newInputContent === "") {
      return; 
    }
    addNewTask(newInputContent);
  }

  // 1 krok - deklaracja (stworzenie) głównej funckji init poprzez:
  // - wypisanie na listę zadania ze statusem true/false
  // - dalej dodajemy do listy nowe zadanie, łapiąc formularz za pomocą js-form
  // - nasłuchujemy kliknięcie formularza za pomocą funckji onFromSubmit
  const init = () => {
    render();
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFromSubmit);

  };
  // 2 krok - wywołanie funkcji init
  init();
}
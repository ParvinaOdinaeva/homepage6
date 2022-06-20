{ // blok

  const tasks = [ //tablica (stworzenie przykładowej tablicy (array) obiektów z zadaniami (wyrażeniami = content) task1 i task2)
    {  //objekt
      content: "task1",
      done: false
    },
    {  //objekt
      content: "task2",
      done: true
    },
  ];

  const addNewTask = (newInputContent) => {
    tasks.push({ //pole jest wypełnione, wpisujemy/dodajemy nowe zadanie do listy
      content: newInputContent,
    });
    render();
  };

  const doneTask = (index) => {
    tasks[index].done = !tasks[index].done; //zaprzeczamy dodaniu nowego zadania (do właściwości done dodajemy przciwieństwo właściwości done)
    render();
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1); //usuwamy (splice) 1 zadanie z listy
    render();
  };

  const render = () => {
    let htmlString = ""; //budujemu jakiś tekst w HTML ("" - pusty łańcuch znaków)
    // iterowanie po każdym zadaniu, aby przy każdym kolejnym zadaniu dodać do HTML kolejne <li>, 
    // oraz sprawdzamy czy zadanie jest wykonane czy nie za pomocą przekreślenia (text-decoration: line-through)
    for (const list of tasks) {
      htmlString += ` 
      <li${list.done ? " style=\"text-decoration: line-through\"" : ""}> 
      <button class="js-done">Done?</button>
      <button class="js-delete">Delete</button>
    ${list.content} 
    </li>
    `;
    }
    document.querySelector(".js-list").innerHTML = htmlString; //na koniec powyższy htmlString wpisujemy do listy

    const doneButtons = document.querySelectorAll(".js-done");
    console.log(doneButtons);
    doneButtons.forEach((doneButtons, index) => {
      doneButtons.addEventListener("click", () => {
        doneTask(index);
      });
    })

    const deleteButtons = document.querySelectorAll(".js-delete");
    console.log(deleteButtons);
    deleteButtons.forEach((deleteButtons, index) => {
      deleteButtons.addEventListener("click", () => {
        deleteTask(index);
      });
    })

  };

  const onFromSubmit = (event) => { // blokujemy wysyłkę formularza
    event.preventDefault();

    const newInputContent = document.querySelector(".js-input").value.trim();
    // kolejny krok - pobieramy wartość pola formularza (value - wartość, trim() - usunięcie białych znaków z obu stron)

    console.log(newInputContent);

    if (newInputContent === "") {
      return; // wychodzimy z pola, jesli tekst jest pusty
    }
    addNewTask(newInputContent);
  }


  const init = () => {
    render();  // wypisujemy na listę zadania ze statusem true/false

    const form = document.querySelector(".js-form"); // dalej dodajemy do listy nowe zadanie, łapiąc formularz
    form.addEventListener("submit", onFromSubmit);

  };

  init();
}
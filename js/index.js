let books = document.querySelectorAll(`.book`);

books[1].classList.add(`done`);
books[7].classList.add(`done`);

for (let i = 0; i < books.length; i++) {
	let book = books[i];

	book.innerHTML = i + 1 + `.` + book.innerHTML;

}

let input = document.querySelector(`.form-control`);

input.addEventListener(`input`, function (evt) {
    // строка поиска 
    let search = input.value.toLowerCase();

    for (let i = 0; i < books.length; i++) {
        let book = books[i];

        let title = book.toLowerCase();

        // если название подходит под поиск

        if (title.includes(search)) {

            // показать книгу

        } else {

           // скрыть книгу

        }

    }

});
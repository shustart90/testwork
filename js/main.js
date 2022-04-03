const app = new Vue({
    el: '#main',
    data: {
        cardsList: [], //массив с разработчиками из json-a
        quotesList: [], //массив с цитатами из json-a
        cardsCount: 0, // колличество разработчиков в массиве
        trueCounter: 1, // переменная-счетчик для контроля сдвига слайдера если она больше или меньше определенного значения слайдер перестает двигаться
        offset: 0, // отступ для блока со слайдером
        currentUser: "",
        currentTextBlock: "",
        firstUser: "" //первый активный разработчик
    },
    methods: {
        nextCard () { // следующая карточка с разработчиком
            if (this.trueCounter < this.cardsCount - 3) {
                this.offset -= 324
                this.trueCounter += 1
            }
        },
        prevCard () { // предидущая карточка с разработчиком
            if (this.trueCounter > 1) {
                this.offset += 324
                this.trueCounter -= 1
            }
        },
        clickEffect (event) { // выделение карточки с разработчиком
            let el = event.target;
            let parentEl = el.parentNode; // функция обработчик нажатия присвоена дочерним элементам карточки поэтому нужно найти родителя
            let parentElId = parentEl.id.split("-")[1];
            let childrenElems = parentEl.childNodes
            let usersPhoto = document.getElementsByClassName("slider__photo") //удаления уже имеющегося выделения прошлой карточки для выделения новый при нажатии
            for (let i = 0; i < usersPhoto.length; i++) {
                if(usersPhoto[i].classList.contains("card_focused")){
                    usersPhoto[i].classList.remove("card_focused");
                }
                let usersName = document.getElementsByClassName("slider__name")
                if(usersName[i].classList.contains("focused-text")){
                    usersName[i].classList.remove("focused-text");
                }
                let usersCompany = document.getElementsByClassName("slider__company")
                if(usersCompany[i].classList.contains("focused-text")){
                    usersCompany[i].classList.remove("focused-text");
                }
            }
            parentEl.firstChild.classList.add("card_focused");
            childrenElems[2].classList.add("focused-text"); //заголовок цитаты
            childrenElems[4].classList.add("focused-text"); //текст цитаты
            for (let i = 0; i < this.cardsList.length; i++) {
                if(this.cardsList[i]["id"] == parentElId) {
                    this.currentUser = this.cardsList[i]; //находим разработчика для оранжевого имени в заголовке цитат
                }
            }

            for (let i =0; i < this.quotesList.length; i++) {
                if (this.quotesList[i]["userId"] == parentElId) {
                    this.currentTextBlock = this.quotesList[i];
                }
            }
        }
    },
    mounted: function newFetch() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(data => data.json())
            .then(el => {
                this.cardsList = [...el];
                this.cardsCount = this.cardsList.length;
                this.currentUser = this.cardsList[0]; //первый разработчик выделенный на странице при ее загрузке
            });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => data.json())
            .then(el => {
                this.quotesList = [...el];
                for (let i =0; i < this.quotesList.length; i++) {
                    if (this.quotesList[i]["userId"] == 1) {
                        this.currentTextBlock = this.quotesList[i]; //первый текстовый блок на странице при ее загрузке
                    }
                }
            });
    }
})


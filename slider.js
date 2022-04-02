const app = new Vue({
    el: '#main',
    data: {
        cardsList: [],
        quotesList: [],
        cardsCount: 0,
        trueCounter: 1,
        offset: 0,
        imageAdress: "https://i.pravatar.cc/290?img=3",
        currentUser: "",
        currentTextBlock: [],
        firstUser: ""
    },
    methods: {
        nextCard () {
            if (this.trueCounter < this.cardsCount - 3) {
                this.offset -= 324
                this.trueCounter += 1
            }
        },
        prevCard () {
            if (this.trueCounter > 1) {
                this.offset += 324
                this.trueCounter -= 1
            }
        },
        clickEffect (event) {
            let el = event.target;
            let parentEl = el.parentNode;
            let parentElId = parentEl.id.split("-")[1];
            let childrenElems = parentEl.childNodes
            let usersPhoto = document.getElementsByClassName("slider__photo")
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
            childrenElems[2].classList.add("focused-text");
            childrenElems[4].classList.add("focused-text");
            for (let i = 0; i < this.cardsList.length; i++) {
                if(this.cardsList[i]["id"] == parentElId) {
                    this.currentUser = this.cardsList[i];
                }
            }
            this.currentTextBlock = [];
            for (let i =0; i < this.quotesList.length; i++) {
                if (this.quotesList[i]["userId"] == parentElId) {
                    this.currentTextBlock.push(this.quotesList[i]);
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
                this.currentUser = this.cardsList[0];
            });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => data.json())
            .then(el => {
                this.quotesList = [...el];
                for (let i =0; i < this.quotesList.length; i++) {
                    if (this.quotesList[i]["userId"] == 1) {
                        this.currentTextBlock.push(this.quotesList[i]);
                    }
                }
            });
    }
})


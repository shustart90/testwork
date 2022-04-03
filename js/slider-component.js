Vue.component("slider",{
    props: [],
    data() {
        return {
            imageAdress: "https://i.pravatar.cc/290?img=3"
        }
    },
    template: `<section class="slider-block">
    <div class="buttons-block slider-block__buttons-block">
      <div class="buttons-block__button buttons-block__button_l" @click="$root.prevCard"></div>
      <div class="buttons-block__button buttons-block__button_r" @click="$root.nextCard"></div>
    </div>
    <div class="slider slider-block__slider" :style="{left: $root.offset + 'px'}">
      <div :id="'user-'+ card.id" v-for='(card, index) in $root.cardsList' class="card slider__card" >
        <img class="slider__photo" :src="imageAdress + (card.id - 1)" alt="" @click="$root.clickEffect" :class="{ 'card_focused': index === 0 }">
        <p class="slider__name" @click="$root.clickEffect" :class="{ 'focused-text': index === 0 }">{{card.name}}</p>
        <p class="slider__company" @click="$root.clickEffect" :class="{ 'focused-text': index === 0 }">{{card.company.name}}</p>
      </div>
    </div>
    </section>`
})

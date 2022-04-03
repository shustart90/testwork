Vue.component("posts",{
    props: [],
    template: `<section class="posts">
    <h2 class="head posts__head">3 актуальных поста <span class="focused-text">{{$root.currentUser.name}}</span></h2>
    <div class="post-item posts__post-item">
      <h3 class="post-item__head">{{$root.currentTextBlock.title}}</h3>
      <p class="post-item__par">{{$root.currentTextBlock.body}}</p>
    </div>
    <div class="post posts__post posts__post-item">
      <h3 class="post-item__head">{{$root.currentTextBlock.title}}</h3>
      <p class="post-item__par">{{$root.currentTextBlock.body}}</p>
    </div>
    <div class="post posts__post posts__post-item">
      <h3 class="post-item__head">{{$root.currentTextBlock.title}}</h3>
      <p class="post-item__par">{{$root.currentTextBlock.body}}</p>
    </div>
    </section>`
})
<template>
  <div>
    <h1>{{ title }} </h1>
    <p>{{ count }} </p>
    <button @click="count ++">추가</button>
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
import HomeComponent from './Home.vue'
// import HomeComponent from './Home' 이렇게 생략 해도 된다.

export default {
  components: {
    HomeComponent
  },

  data () {
    return {
      title : "안녕하세요" ,
      count : 1
    }
  }
}
</script>

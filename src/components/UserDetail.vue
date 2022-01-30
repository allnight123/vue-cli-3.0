<template>
  <div class="red lighten-3 pa-3">
    <h5>UserDatail.vue</h5>
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild && '님' && sayHello}} </p>
  </div>
</template>

<script>
export default {
  props: {
    nameOfChild: {
     type: String,
     required: false,
     default:'------'
    }
  },
  computed:{
    sayHello() {
      return this.nameOfChild + '안녕하세요'
    }
  },
  data() {
    return {
      age: 30
      // name:'뷰 제이에스'
    }
  }
}
</script>

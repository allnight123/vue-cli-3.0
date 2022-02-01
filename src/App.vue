<template>
  <div>
    <h1>{{ title }} </h1>
    <p>{{ count }} </p>
    <button @click="count ++">추가</button>
    <AppStatus></AppStatus>App.vue<hr>
    <!-- <script>에 컴포넌트 선언하고 import 하고나서는
        아래의 태그처럼 등록해주면 파일의 내용이 삽입된다.
        <HomeComponent></HomeComponent>
        넣고 싶은 위치에 넣기만 하면된다.
       -->
    <HomeComponent></HomeComponent>   
    <AppStatus></AppStatus> 
    <hr>
  </div>
</template>

<script>
import HomeComponent from './Home.vue'
// import HomeComponent from './Home' 이렇게 생략 해도 된다.
// 이렇게 컴포넌트 등록시에는 이 파일에서만 사용가능하다.

export default {
  components: {         //기본적인 컴포넌트 등록방법
    HomeComponent       //기본적인 컴포넌트 등록방법
  },

  data () {
    return {
      title : "안녕하세요" ,
      count : 1
    }
  }
}
</script>

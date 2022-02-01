<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <p>{{ nameOfchild }}</p>
    
  </div>
</template>

<script>
export default {
  props: [ 'nameOfchild' ],           // 값을 받는쪽 에다가 선언해줘야 한다.
  data() {
    return {
      // nameOfchild 
    }
  },
}
</script>
<template>
  <div class="red lighten-3 pa-3">
    <h5>UserDatail.vue</h5>
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>이름:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ name }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>주소:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ address }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>전화번호:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ phone }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>반려견유뮤:</v-list-tile-content>
        <v-list-tile-content class="align-end">{{ hasDogKr }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
    <!-- <v-btn @click="switchName()">이름변경</v-btn>     -->
  </div>
</template>

<script>
export default {
  props: [ 'name','address', 'phone', 'hasDog'],
  computed:{
    hasDogKr() {
      return this.hasDog === true ? '있음' : '없음'
    }
  }
}
</script>

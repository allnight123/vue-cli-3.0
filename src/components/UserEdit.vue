<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field label="이름" placeholder="Placeholder" v-model="user.name">    </v-text-field>
    <v-text-field label="주소" placeholder="Placeholder" v-model="user.address">    </v-text-field>
    <v-text-field label="전화번호" placeholder="Placeholder" v-model="user.phone">    </v-text-field>
    <v-radio-group column v-model="user.hasDog">
      <v-radio label="반려견 있음" value=true></v-radio>
      <v-radio label="반려견 없음" value=false></v-radio>
    </v-radio-group>
    <v-btn @click="changeUser()">수정완료</v-btn>
  </div>
</template>

<script>

import { eventBus } from '../main'

export default {
  props: ["name", "address", "phone", "hasDog"], // 값을 받는쪽 에다가 선언해줘야 한다.
  data() {
    return {
      user: {},
    };
  },

  created() {
    this.user.name = this.name
    this.user.address = this.address
    this.user.phone = this.phone
    this.user.hasDog = this.hasDog
  },

  methods: {
    changeUser() {
      console.log('userEdited' ,this.user)
      this.$emit( "child" , this.user)
      // eventBus.$emit( 'userWasEdited' , new Date() )
      eventBus.userWasEdited( new Date() )
    }
  }

}
</script>

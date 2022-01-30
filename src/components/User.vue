<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }} </p>
    <v-btn color="info" @click="changeName()">이름변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          >
        
        </UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @inputchild="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>  
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return{
      name:"hoza",
      address:"Seoul",
      phone:"010-1234-5678",
      hasDog:true
    }
  },
  methods: {
    parents(){
      console.log("부모가받았어(inputChild)")
    }
  } 
}
</script>
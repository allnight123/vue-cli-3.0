<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: 뷰 제이에스</p>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
          :name = name
          :address = address
          :phone = phone
          :hasDog = hasDog
          ></UserDetail>
          <!-- 
            자식부품          -> :nameOfchild
            푸품에 들어갈 값  ->  name  
          -->
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name = name
          :address = address
          :phone = phone
          :hasDog = hasDog
          @child = parents
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
    return {
      name: 'hoza',
      address: 'Seoul',
      phone: '1234-4567',
      hasDog: true,
    }
  },

  methods: {
    parents(user) {
      console.log('부모가 받았어')
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
    }
  },
}
</script>
<template>
  <v-app>
    <v-content>
      <User />
    </v-content>
  </v-app>
</template>

<script>
import User from "./components/User";
import { dateFormat } from "./mixins/dateFormats";

export default {
  name: "App",
  components: {
    User,
  },
}
</script>

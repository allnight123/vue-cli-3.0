<template>
    <div>
        <AppStatus></AppStatus> home.vue
        <h1>{{ homeTitle }} </h1>
        <AppStatus></AppStatus> home.vue
        <viewsHome></viewsHome>
    </div>
</template>

<script>
import viewsHome from './views/Home.vue'

export default {
    components: {
        viewsHome
    },
    data() {
        return {
            homeTitle: "홈 입니다."
        }
    }
}
</script>
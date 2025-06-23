<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "cate",
    props: {
        dialogFormVisible: Boolean,
        title: String,
        form: Object,
    },
    data(){
        return {
            // dialogFormVisible: false,
        };
    },
})
</script>

<template src="./cate.pug" lang="pug">

</template>

<style scoped>

</style>
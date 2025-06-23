<script>

// import pug from 'pug'

import cateTemplate from './cate/cate.vue'
import contentTemplate from './content/content.vue'

// console.log(templateA)

// console.log(templateA);


export default {
    data() {
        return {
            greeting: 'Hello World!',
        }
    },
    components: {
        cateTemplate,
        contentTemplate,
    },
    setup(props, { emit }){

    }
}
</script>

<template src="./main.pug" lang="pug">

</template>

<style>

</style>
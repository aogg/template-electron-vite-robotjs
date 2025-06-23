
<template >
    <router-view :style="settings.styles"></router-view>
<!--    <main-template :style="settings.styles"></main-template>-->


<!--    <div class="reflative">-->
<!--    </div>-->


</template>


<script >

import {ref} from 'vue'

// import mainTemplate from './main/main.vue'

// console.log(templateA)

// console.log(templateA);



export default {
    methods:{
        openSaveText(){
            return window.open(
                '/#/saveText',
                '保存文本')
        }
    },
    data() {
        return {
            settings: {
                styles:{
                    // '--fast-input--background-color': '#eaf3f3',
                    // '--fast-input--color-content-button': '#8abceed1',
                    // '--fast-input--color-2': '#3f6981',
                    // '--fast-input--color-3': '#537e69',
                    // '--fast-input--color-3-color': '#eaf3f3',

                    '--fast-input--background-color': '#eaf3f3',
                    '--fast-input--color-content-button': '#537e69',
                    '--fast-input--color-2': '#3f6981',
                    '--fast-input--color-3': '#3e79b6ed',
                    '--fast-input--color-content-force-cate': '#6bb2da',
                    '--fast-input--color-3-1': '#a8aeb4ed',
                    '--fast-input--color-3-color': '#eaf3f3',

                    // 字体
                    '--fast-input--color-cate-font': '#0a161c',
                    '--fast-input--color-content-force-cate-font': '#0a161c',
                    '--fast-input--color-content-send-font': '#0a161c',

                    backgroundColor:'var(--fast-input--background-color)'
                }
            },
            // greeting: 'Hello World!',
            saveData: {
                topCateArr: [
                    {
                        title: 'Tab 1',
                        children: [
                            {
                                title: 'Tab 21',
                                hash: '1',
                            },
                            {
                                title: 'Tab 22',
                                hash: '2',
                            },
                            {
                                title: 'Tab 23',
                                hash: '3',
                            },
                            {
                                title: 'Tab 24',
                                hash: '4',
                            },
                            {
                                title: 'Tab 25',
                                hash: '5',
                            },
                            {
                                title: 'Tab 26',
                                hash: '6',
                            },
                            {
                                title: 'Tab 27',
                                hash: '7',
                            },
                            {
                                title: 'Tab 28',
                                hash: '8',
                            },
                            {
                                title: 'Tab 29',
                                hash: '9',
                            },
                            {
                                title: 'Tab 210',
                                hash: '10',
                            },
                            {
                                title: 'Tab 211',
                                hash: '11',
                            },
                            {
                                title: 'Tab 212',
                                hash: '12',
                            },
                            {
                                title: 'Tab 213',
                                hash: '13',
                            },
                            {
                                title: 'Tab 214',
                                hash: '14',
                            },
                            {
                                title: 'Tab 215',
                                hash: '15',
                            },
                            {
                                title: 'Tab 216',
                                hash: '16',
                            },
                            {
                                title: 'Tab 217',
                                hash: '17',
                            },
                            {
                                title: 'Tab 218',
                                hash: '18',
                            },
                            {
                                title: 'Tab 219',
                                hash: '19',
                            },
                            {
                                title: 'Tab 220',
                                hash: '20',
                            },
                            {
                                title: 'Tab 221',
                                hash: '21',
                            },
                            {
                                title: 'Tab 222',
                                hash: '22',
                            },
                        ],
                    },
                    {
                        title: 'Tab 2',
                        children: [],
                    },
                ]
            }
        }
    },
    components: {
        // mainTemplate
    },

    provide() {
        // 使用函数的形式，可以访问到 `this`
        return {
            saveData: this.saveData
        }
    },

    setup(){
        const theme = ref('#42b883');
        const position = ref('top');
        const column = ref(2);
        const events = ref([
            { icon: 'H', text: 'home', handle: (e) => console.log(e) },
            {
                icon: 'O',
                text: 'home2',
                handle: (e) => console.log(e),
            },
            {
                icon: 'M',
                text: 'home3',
                handle: (e) => console.log(e),
            }
        ])

        return {
            theme,
            position,
            column,
            events,
        }
    }

}

</script>


<style>


</style>
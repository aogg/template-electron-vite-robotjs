<script>
import {defineComponent} from 'vue'
import {ElMessage} from "element-plus";

export default defineComponent({
    name: "saveText",
    data(){
        console.log(window['localRuleForm']);
        return {
            ruleForm: window['localRuleForm']?window['localRuleForm']:{
                label: '',
                content: [
                    {
                        type: 'textarea',
                        text: '',
                    }
                ],
            },
        };
    },
    mounted() {
        console.log(window['localCloseWindowFunc']);
    },
    methods:{
        submitForm(){
            if (window['localCloseWindowFunc']) {
                window['localCloseWindowFunc'](
                    this.ruleForm.label,
                    this.ruleForm.content,
                );
            }else{
                ElMessage.warning('保存不存在，需要从首页打开此窗口')
            }
            window.close();
        },
        canalForm(){
            window.close();
        },
    }
})
</script>

<template src="./saveText.pug" lang="pug">
</template>

<style scoped>

</style>
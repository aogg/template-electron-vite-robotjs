<script>
import {defineComponent, h} from 'vue'

import ContextMenu from '@imengyu/vue3-context-menu'

import { Delete, Edit, Search, Switch, Plus, Promotion, Top } from '@element-plus/icons-vue'
import {ElMessage} from "element-plus";

export default defineComponent({
    name: "tree_item",
    props: {
        data: Object,
        node: Object,
        isDarkSwitch: Boolean,
        // cateSaveBool: {
        //     type: Boolean,
        //     default: false,
        // },
    },
    data(){
        return {
            dataContentKeys: this.data.hasOwnProperty('content')?Object.keys(this.data.content):[],
            cateSaveBool: this.data.label.length < 1,
            firstCateSaveBool: this.data.label.length < 1,
            // popover_contextmenu_visible: false,
        };
    },
    // inject: {
    //     rootTreeRef: {
    //         from: 'rootTreeRef',
    //     },
    // },

    mounted() {
        console.log(this.dataContentKeys);
        // console.log(this.rootTreeRef);
        // console.log(this.treeRef);
        if (this.cateSaveBool) {

                this.$refs.cateInput.focus();
        }
    },
    computed: {
        // getDataContentKeys(){
        //     return Object.keys(this.data.content)
        // },
        // cateSaveBool(){
        //     return this.node.cateSaveBool?this.node.cateSaveBool:false;
        // }
    },
    watch:{
        // cateSaveBool(newVaL){
        //     if (!newVaL) {
        //         return;
        //     }
        //
        //     this.$refs.cateInput.focus();
        // },
    },
    methods:{
        ifText(){
            return this.data.hasOwnProperty('content');
        },
        getContentCollapseItem(item){
            let typeArr = {
                text: '文本',
            };

            let str = typeArr[item.type]?typeArr[item.type]:'';

            str += ': ';

            str += item.text;

            return str;
        },

        clickSend(data, node, event){
            if (this.cateSaveBool) {
                return;
            }

            if (event) {
                event.stopPropagation();
            }
            // console.log(event);

            this.$emit('parentClickSend', data, node);
        },

        deleteCurrentNode(){
            // this.rootTreeRef.remove(this.node);
            this.$emit('parentDeleteNode', this.node);
        },
        parentAppendCateNode(){
            // this.rootTreeRef.remove(this.node);
            this.$emit('parentAppendCateNode', this.node);
        },
        parentAppendTextNode(){
            // this.rootTreeRef.remove(this.node);
            this.$emit('parentAppendTextNode', this.node);
        },

        cateSave(){
            if (this.data.label.length < 1) { // 空
                this.deleteCurrentNode();
                return;
            }

            this.cateSaveBool=false;
        },

        handlePopoverContextMenu(data, node, e){
            this.$refs.popover.hide();
            // debugger
            // this.$refs.popover_contextmenu.show();

            ContextMenu.showContextMenu({
                x: e.x,
                y: e.y,
                items: [
                    {
                        label: "发送",
                        icon: h(Promotion),
                        onClick: (e,a,b) => {
                            this.clickSend(data, node);
                        }
                    },
                    {
                        label: "编辑",
                        icon: h(Edit),
                        onClick: () => {
                            if (this.ifText()) { // 文本
                                let data = this.data;
                                let w = this.$root.openSaveText();

                                w['localRuleForm'] = JSON.parse(JSON.stringify(data));
                                w['localCloseWindowFunc'] = function (label, content){
                                    try {
                                        data.label = label;
                                        data.content = content;

                                    }catch (e) {
                                        ElMessage.error('保存失败: ' + e.toString())
                                    }
                                };
                                return;
                            }

                            this.cateSaveBool = true;

                            if (this.$refs.cateInput) {
                                this.$refs.cateInput.focus();
                            }
                        },
                    },
                    ...(this.ifText()?[]:[
                        {
                            label: "添加子分类",
                            icon: h(Promotion),
                            onClick: () => {
                                this.parentAppendCateNode(node);
                            },
                        },
                        {
                            label: "添加文本",
                            icon: h(Promotion),
                            onClick: () => {
                                this.parentAppendTextNode(node);
                            },
                            divided: true,
                        }
                    ]),

                    {
                        label: "删除",
                        icon: h(Delete),
                        onClick: () => {
                            this.deleteCurrentNode();
                        }
                    },
                    // {
                    //     label: "A submenu",
                    //     children: [
                    //         { label: "Item1" },
                    //         { label: "Item2" },
                    //         { label: "Item3" },
                    //     ]
                    // },
                ]
            });


        },

    },

})
</script>

<template src="./tree_item.pug" lang="pug">

</template>

<style scoped>

</style>
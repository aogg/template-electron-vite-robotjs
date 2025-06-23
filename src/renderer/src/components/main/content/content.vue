<script>

import { ref, watch, defineComponent, provide } from 'vue'
import { ElTree, ElMessageBox, ElMessage } from 'element-plus'


import TreeItemComponent from './tree_item.vue'
// import CateComponent from './children/cate/cate.vue'

import { Delete, Edit, Search, Switch, Plus, Promotion, Top } from '@element-plus/icons-vue'





export default defineComponent({
    name: 'FilterTree',
    components: {
        TreeItemComponent,
        // CateComponent,

        ElTree,
        Delete, Edit, Search, Switch, Plus,
        Promotion, Top
    },
    // mounted() {
    //     const treeRef = this.$refs.treeRef;
    //     console.log(treeRef);
    //     provide('rootTreeRef', treeRef);
    // },
    // provide(){
    //     return {
    //         rootTreeRef:this.rootTreeRefComputed,
    //     };
    // },
    computed:{
        // defaultCate(){
        //     return {
        //         label: '', children: []
        //     };
        // },
    },

    data() {
        return {

            filterText: '',
            filterTextBool: false,
            // treeRef: null,
            isDarkSwitch: false,
            defaultProps: {
                children: 'children',
                label: 'label',
            },
            data: [
                {
                    // id: 1,
                    label: 'Level one 1',
                    children: [
                        {
                            // id: 4,
                            label: 'Level two 1-1',
                            children: [
                                {
                                    // id: 9,
                                    label: 'Level three 1-1-1',
                                    content: [
                                        {
                                            type: 'text',
                                            text: 'Level three 1-1-1'
                                        }
                                    ],
                                },
                                {
                                    // id: 10,
                                    label: 'Level three 1-1-2',
                                    content: [
                                        {
                                            type: 'text',
                                            text: 'Level three 1-1-1'
                                        }
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    // id: 2,
                    label: 'Level one 2',
                    children: [
                        {
                            // id: 5,
                            label: 'Level two 2-1',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                        {
                            // id: 6,
                            label: 'Level two 2-2',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                    ],
                },
                {
                    // id: 3,
                    label: 'Level one 3',
                    children: [
                        {
                            // id: 7,
                            label: 'Level two 3-1',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                        {
                            // id: 8,
                            label: 'Level two 3-2',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                    ],
                },
                {
                    // id: 3,
                    label: 'Level one 3',
                    children: [
                        {
                            // id: 7,
                            label: 'Level two 3-1',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                        {
                            // id: 8,
                            label: 'Level two 3-2',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                    ],
                },
                {
                    // id: 3,
                    label: 'Level one 3',
                    children: [
                        {
                            // id: 7,
                            label: 'Level two 3-1',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                        {
                            // id: 8,
                            label: 'Level two 3-2',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                    ],
                },
                {
                    // id: 3,
                    label: 'Level one 3',
                    children: [
                        {
                            // id: 7,
                            label: 'Level two 3-1',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                        {
                            // id: 8,
                            label: 'Level two 3-2',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                    ],
                },
                {
                    // id: 3,
                    label: 'Level one 3',
                    children: [
                        {
                            // id: 7,
                            label: 'Level two 3-1',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                        {
                            // id: 8,
                            label: 'Level two 3-2',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                    ],
                },
                {
                    // id: 3,
                    label: 'Level one 3',
                    children: [
                        {
                            // id: 7,
                            label: 'Level two 3-1',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                        {
                            // id: 8,
                            label: 'Level two 3-2',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Level three 1-1-1'
                                }
                            ],
                        },
                    ],
                },
            ],
        }
    },

    watch: {
        /**
         * 搜索
         */
        filterText(val, oldVal){

            console.log('搜索1', val);
            this.$refs.treeRef.filter(val)
        }
    },


    methods: {
        defaultCate(){
            return {
                label: '', children: []
            };
        },
        filterNode(value, data) {
            if (!value) return true
            return data.label.includes(value)
        },

        clickAddTopCate(){
            this.data.unshift(this.defaultCate())
            // this.$refs.treeRef.append({label: 'qwe', children: []});
            // this.cate.dialogFormVisible = true;
            // this.cate.title = editBool?'编辑分类':'添加分类';
        },
        clickSend(data, node){
            console.log('clickSend');

            if (this.isDarkSwitch) { // 多选时
                return;
                // this.$refs.treeRef.setChecked()
            }

            window.electronAPI.clickSend(JSON.parse(JSON.stringify(data)));

        },
        clickTop(){

        },
        clickMultiDelete(){
            for (const argument of this.$refs.treeRef.getCheckedNodes()) {
                if (!argument.hasOwnProperty('content')) {
                    continue;
                }
                this.$refs.treeRef.remove(argument)
            }
        },
        /**
         * 删除单个
         *
         * @param node
         */
        parentDeleteNode(node){
            this.$refs.treeRef.remove(node)
        },
        parentAppendCateNode(parentNode){
            this.$refs.treeRef.append(this.defaultCate(), parentNode)
        },
        /**
         * 添加内容
         * 子组件调用
         *
         * @param parentNode
         */
        parentAppendTextNode(parentNode){
            console.log('添加内容')

            let w = this.$root.openSaveText();

            let treeRef = this.$refs.treeRef;

            w['localCloseWindowFunc'] = function (label, content){
                try {

                    treeRef.append({
                        label: label,
                        content: content,
                    }, parentNode)
                }catch (e) {
                    ElMessage.error('保存失败: ' + e.toString())
                }
            };
            // console.log(w);

        },

        handleDragStart(node, ev) {
            console.log('drag start', node)
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter:', dropNode.label)
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave:', dropNode.label)
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over:', dropNode.label)
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end:', dropNode && dropNode.label, dropType)
        },
        /**
         *
         * @param draggingNode 当前拖拽的节点
         * @param dropNode 被拖拽至此的节点
         * @param dropType
         * @param ev
         */
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop:', dropNode.label, dropType)
        },
        /**
         * 判断节点能否被拖拽 如果返回 false ，节点不能被拖动
         *
         * @param draggingNode
         * @returns {boolean}
         */
        allowDrag(draggingNode) {
            console.log('allowDrag + 判断节点能否被拖拽');
            return true
        },
        allowDrop(draggingNode, dropNode, type) {
            console.log('allowDrop');
            if (dropNode.data.hasOwnProperty('content')) {
                return type !== 'inner'
            } else {
                return true
            }
        },
    },
})
</script>

<template src="./content.pug" lang="pug">

</template>

<style >

.class-send{
    color: var(--fast-input--color-2);
}
.el-tree-node{
    background-color: var(--fast-input--background-color);
}
.el-tree-node>.el-tree-node__content:not( .class-content-bool){
    background-color: var(--fast-input--color-3);
    color: var(--fast-input--color-3-color);
    border-bottom: 1px solid;
}
#fast-input-content .el-tree-node>.el-tree-node__content:has(.class-content-bool){
    background-color: var(--fast-input--background-color);
    color: var(--fast-input--color-content-send-font);
}

#fast-input-content .el-tree-node:focus>.el-tree-node__content{
    background-color: var(--fast-input--color-content-force-cate);
    color: var(--fast-input--color-content-force-cate-font);

}

.el-tree-node__children > .el-tree-node >.el-tree-node__content:hover:has(.class-content-bool){
    color: var(--fast-input--color-2);
    background-color: var(--fast-input--color-2-color);
}

</style>
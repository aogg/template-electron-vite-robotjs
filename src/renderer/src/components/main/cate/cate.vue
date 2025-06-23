<script>

// import pug from 'pug'
import { ref, inject } from 'vue'
import md5 from 'crypto-js/md5'


let funcO = {
    handle_map_index (arr) {
        return arr.map((x, index) => ({
            // title: x.title,
            all_index: x.all_index !== undefined?x.all_index:index,
        }))
    },
    watch: {
        /**
         *
         * @param {Proxy} newVal
         */
        topCateArr(newVal){
            console.log(newVal);

            localStorage.setItem(
                'topCateArr',
                JSON.stringify(funcO.handle_map_index(newVal))
            )

        },
        'secondData.children_show': function (newVal, oldVal) {
            // if (!oldVal.length) {
            //     return;
            // }

            console.log(newVal);

            localStorage.setItem(
                'secondData.children_show.' + this.secondData.top_index,
                JSON.stringify(funcO.handle_map_index(newVal))
            )

        }
    },
}

// console.log(templateA)

// console.log(templateA);


export default {
    data() {
        return {
            greeting: 'Hello World!',
        }
    },
    watch: funcO.watch,
    setup(props, {emit}){

        let saveData = inject('saveData');
        let topCateAllArr = ref(saveData.topCateArr)
        // 当前显示出来的
        let topCateArr = ref(getShowArr('topCateArr'))
        let topCateArrModelValue = ref('0')
        let secondData = ref({
            show: false,
            top_index: 0,
            CateArrModelValue: 0,
            children: [],
            children_show: [],
        });

        function handleShowDefaultArr(allArr, showArr){
            for (const topCateAllArrKey in allArr.value) {
                let temp = allArr.value[topCateAllArrKey];
                temp['all_index'] = topCateAllArrKey;
                showArr.value.push(temp);

                if (showArr.value.length > 3) {
                    break;
                }
            }
        }

        function getShowArr(key) {


            let data = JSON.parse(localStorage.getItem(key));

            if (!data) {
                return [];
            }

            if (key === 'topCateArr') {
                let tempArr = [];
                for (const datum of data) {
                    let temp = topCateAllArr.value[datum.all_index];
                    temp['all_index'] = datum.all_index;
                    tempArr.push(temp)
                }

                data = tempArr;
            }else if (key.indexOf('secondData.') >= 0){

                let tempArr = [];
                for (const datum of data) {
                    let temp = secondData.value.children[datum.all_index];
                    temp['all_index'] = datum.all_index;
                    tempArr.push(temp)
                }

                data = tempArr;
            }

            return data;
        }

        if (!topCateArr.value.length) {
            handleShowDefaultArr(topCateAllArr, topCateArr);
        }
        // for (const topCateAllArrKey in topCateAllArr) {
        //     let temp = topCateAllArr[topCateAllArrKey];
        //     temp['index'] = topCateAllArrKey;
        //     topCateArr.value.push(temp);
        //
        //     if (topCateArr.value.length > 3) {
        //         break;
        //     }
        // }


        /**
         * 打开二级分类
         *
         * @param targetName
         */
        const clickTopCate = (targetName) => {

            if (targetName.index == topCateArrModelValue.value && secondData.value.show) { // 不变
                return;
            }

            // 处理二级默认类
            let topCurrentData = topCateArr.value[targetName.index]
            if (!topCurrentData.children) {
                topCurrentData.children = [];
            }

            secondData.value.show = true;
            secondData.value.top_index = targetName.index;
            secondData.value.children = topCurrentData.children
            secondData.value.children_show = getShowArr('secondData.children_show.' + targetName.index)
            secondData.value.children_show
                = secondData.value.children_show.length
                ?secondData.value.children_show
                :secondData.value.children.slice(0, 4)

        }

        const clickCateShow = (topAllIndex, type) => {
            let temp = [];

            if (type === 'top') {

                if (topCateArr.value.find(x => x['all_index'] == topAllIndex)) {
                    return;
                }

                temp = topCateAllArr.value[topAllIndex];
            }else if (type === 'second'){

                if (secondData.value.children.find(x => x['all_index'] == topAllIndex)) {
                    return;
                }

                temp = secondData.value.children[topAllIndex];
            }

            temp['all_index'] = topAllIndex;


            if (type === 'top') {

                topCateArr.value.unshift(temp);
                funcO.watch.topCateArr(topCateArr.value)
            }else if (type === 'second'){

                secondData.value.children_show.unshift(temp)
                funcO.watch["secondData.children_show"].call(
                    {
                        'secondData': secondData.value,
                    },
                    secondData.value.children_show
                )
            }

        }

        const clickCateClear = (type) => {
            if (type === 'top') {
                topCateArr.value = [];
            }else if (type === 'second'){
                secondData.value.children_show = [];
            }
        }

        const addTab = (targetName) => {
            let incV = topCateArr.value.length + 1
            topCateArr.value.push({
                title: 'New Tab',
                all_index: incV,
                children: [],
            })
            topCateArrModelValue.value = incV
        }
        const removeTopTab = (targetName) => {
            const tabs = topCateArr.value
            let activeName = topCateArrModelValue.value
            if (activeName === targetName.index) {
                tabs.forEach((tab, index) => {
                    if (index === targetName.index) {
                        const nextTab = tabs[index + 1] || tabs[index - 1]
                        if (nextTab) {
                            activeName = index
                        }
                    }
                })
            }

            topCateArrModelValue.value = activeName
            topCateArr.value = tabs.filter((tab, index) => index !== targetName)
        }
        const removeSecondTab = (targetName) => {
            const tabs = secondData.value.children_show
            let activeName = secondData.value.CateArrModelValue
            if (activeName === targetName.index) {
                tabs.forEach((tab, index) => {
                    if (index === targetName.index) {
                        const nextTab = tabs[index + 1] || tabs[index - 1]
                        if (nextTab) {
                            activeName = index
                        }
                    }
                })
            }

            secondData.value.CateArrModelValue = activeName
            secondData.value.children_show = tabs.filter((tab, index) => index !== targetName)
        }

        return {
            addTab,
            removeTopTab,
            removeSecondTab,
            clickTopCate,
            clickCateShow,
            clickCateClear,

            topCateArr,
            topCateAllArr,
            topCateArrModelValue,

            secondData,
        };
    }
}
</script>

<template src="./cate.pug" lang="pug">

</template>

<style>
#cate-div .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  //color: var(--fast-input--color-content-button);
    background-color: var(--fast-input--color-3);
    color: var(--fast-input--color-3-color);
}
#cate-div .el-tabs--card>.el-tabs__header .el-tabs__item:hover {
    //color: var(--fast-input--color-content-button);
    background-color: var(--fast-input--color-3);
    color: var(--fast-input--color-3-color);
}
/*#top-cate-tabs-second .el-tabs__item.is-active{
    color: var(--el-color-primary-dark-2);
}*/

#cate-div .el-tabs--card>.el-tabs__header{
    border-bottom-color: var(--fast-input--color-3-1);
}
.local-border-bottom {
    border-bottom: 1px solid var(--fast-input--color-3-1);
    border-right: 1px solid var(--fast-input--color-3-1);
}
#top-cate-tabs-second .el-tabs__item.is-active{
    border-bottom: 1px solid var(--fast-input--color-3-1);
}
#cate-div .el-tabs--card>.el-tabs__header .el-tabs__item{
    border-left-color: var(--fast-input--color-3-1);
    color: var(--fast-input--color-cate-font)
}
#cate-div .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border-right-color: var(--fast-input--color-3-1);
    border-left: 0;

}


#top-cate-tabs .el-tabs__item,#top-cate-tabs-second .el-tabs__item {
    padding: 0;
}

#top-cate-tabs .el-tabs__header,#top-cate-tabs-second .el-tabs__header{
    margin: 0;
}

#top-cate-tabs .el-tabs__nav-wrap>:first-child>.el-tabs__nav>.el-tabs__item:first-child,
#top-cate-tabs-second .el-tabs__nav-wrap>:first-child>.el-tabs__nav>.el-tabs__item:first-child{
    padding-left: 3%;
}

#top-cate-tabs-second .el-tabs__nav{
    border-top: unset;
}

</style>
<template>
    <grid-layout :layout.sync="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="draggable"
        :is-resizable="resizable"
        :vertical-compact="true"
        :use-css-transforms="true"
    >
        <grid-item v-for="item in layout"
            :key="item.i"
            :static="item.static"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
        >
            <div class="item-title">
                <q-toolbar >
                    <q-toolbar-title>
                        Toolbar
                    </q-toolbar-title>
                    <q-btn flat round dense icon="close" />
                </q-toolbar>
            </div>
            <div class="item-content" :id="'chart_'+item.i">
            </div>
        </grid-item>
        <chart-modal />
    </grid-layout>    
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import ChartModal from "components/modal/ChartModal.vue";

export default {
    components: {
        GridLayout,
        GridItem,
        ChartModal
    },
    data() {
        return {
            layout: [
                {"x":0,"y":0,"w":2,"h":10,"i":"0", static: false},
                {"x":2,"y":0,"w":2,"h":10,"i":"1", static: false},
                {"x":4,"y":0,"w":2,"h":10,"i":"2", static: false},
                {"x":6,"y":0,"w":2,"h":10,"i":"3", static: false},
                {"x":8,"y":0,"w":2,"h":10,"i":"4", static: false},
                {"x":10,"y":0,"w":2,"h":10,"i":"5", static: false},
            ],
            draggable: true,
            resizable: true,
            index: 0
        }
    },
    mounted (){
        var options = {
            chart: {
                height: 350,
                type: "line",
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#FF1654", "#247BA0"],
            series: [
                {
                name: "Series A",
                data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                },
                {
                name: "Series B",
                data: [20, 29, 37, 36, 44, 45, 50, 58]
                }
            ],
            stroke: {
                width: [4, 4]
            },
            plotOptions: {
                bar: {
                columnWidth: "20%"
                }
            },
            xaxis: {
                categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
            },
            yaxis: [
                {
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#FF1654"
                },
                labels: {
                    style: {
                    colors: "#FF1654"
                    }
                },
                title: {
                    text: "Series A",
                    style: {
                    color: "#FF1654"
                    }
                }
                },
                {
                opposite: true,
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#247BA0"
                },
                labels: {
                    style: {
                    colors: "#247BA0"
                    }
                },
                title: {
                    text: "Series B",
                    style: {
                    color: "#247BA0"
                    }
                }
                }
            ],
            tooltip: {
                shared: false,
                intersect: true,
                x: {
                show: false
                }
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 40
            }
        };
        setTimeout(() => {
            this.layout.forEach(el=>{
                this.$createChart(document.querySelector("#chart_"+el.i), options);
            })
        }, 2000);

    },
    methods: {
        itemTitle(item) {
            let result = item.i;
            if (item.static) {
                result += " - Static";
            }
            return result;
        },
        del(idx) {
            this.layout.splice(idx,1);
            console.log(this.layout);
        }
    }
}
</script>

<style lang="scss" scoped>
.item-title {
    border-radius: 8px 8px 0 0;
    height: 40px;
    .q-toolbar {
        position: relative;
        padding: 0 6px !important;
        min-height: 40px  !important;
        width: 100%;
    }
}
.item-content{
    border-radius: 0 0 8px 8px;
    flex: 1;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
} 
</style>
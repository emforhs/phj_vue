<template>
  <div class="q-pa-md q-gutter-sm right">
    <q-btn label="추가" color="primary" @click="layout = true"/>
    <q-btn label="저장" color="primary" @click="layout = true"/>

    <q-dialog v-model="layout" persistent>
      <q-layout container class="bg-white" style="max-height: 70vh">
        <q-header class="bg-primary" elevated>
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            <q-toolbar-title align="center">차트 설정</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-footer class="bg-primary">
          <q-toolbar>
            <q-btn outline color="white" label="설정" />
            <q-btn outline color="white" label="취소" />
          </q-toolbar>
        </q-footer>

        <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          bordered
          content-class="bg-grey-3"
        >
          <q-item
            clickable
            tag="a"
            target="_blank"
            v-for="n in 50" :key="n"
          >
            <q-item-section>
              <q-item-label>Drawer {{ n }} / 50</q-item-label>
              <q-item-label caption>
                {{ n }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-drawer>

        <q-page-container class="content">
          <q-page padding>

          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layout: false,

      moreContent: true,
      drawer: false,

      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!'
    }
  },
  computed: {
  },
  methods: {
    add () {
      
    },
    save () {

    }
  }
}
</script>
<style scoped>
.right {
  float: right;
}
</style>
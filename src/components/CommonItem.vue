<template>
<div>
  <div class="item-title">
              <q-toolbar >
                  <q-toolbar-title>
                      {{title}}
                  </q-toolbar-title>
                  <q-btn flat round dense icon="close" />
              </q-toolbar>
          </div>
  <div class="item-content"></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isComponent:null,//Component id
      setArea:false,//add 패널 상태
      title:null,
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
</style>

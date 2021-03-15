<template>
  <div class="list-item-container">
    <div class="list-item-head p-4" @click="pertanyaan.visible = !pertanyaan.visible" >
      {{pertanyaan.title}}
      <span class="toggle float-right" v-text="toggletText[pertanyaan.visible * 1]">
      </span>
    </div>
    <div class="list-item-body p-4" v-show="pertanyaan.visible"> 
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props:["pertanyaan"],
  data(){
    return { toggletText: ['Lihat', 'Simpan'] }
  }
}
</script>

<style scoped>
.list-item-container{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
    color: #343434;
    background-color: #ffffff;
    border: 0.4px solid #000000;
    border-radius: 0.2rem;
    box-shadow: 0px 1px 5px rgba(10, 67, 29, 0.5);
}

.list-item-head{
    background-color: #e7f6df;
    border: 0.4px solid #000000;
    border-radius: 0.2rem;
    cursor: pointer;
}

.float-right{
    float: right;
    color: #0A431D;
}
</style>
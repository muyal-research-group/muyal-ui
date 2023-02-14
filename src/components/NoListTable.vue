<template>
    <div class="table">
      <header class="bg--nez-primary-color pa--xs table-header flex justify-content--space-between align-items--center">
        <img :src="image" alt="" width="50">
        <p class="text-color--white font-weight--bold  w-90">{{ title }} </p>
      </header>
      <div class="pa--md table-body">
        <ul>
          <li v-for="item in items">{{ item }}</li>
          <!-- <li>Medición de signos vitales. </li> -->
          <!-- <li>Datos de múltiples fuentes (sensores, y bases de datos).</li> -->
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{type:String,default:"TALBE_TITLE"},
        image:{type:String,default:"/images/nez/multi-user.png"},
        items:{type:[String],default:[]}
    }
}
</script>
<style scoped>
.table{
  width: 500px;
}
.table-header{
  /* background: red; */
}
.table-body{
  /* background: red; */
  border: thin solid var(--nez-primary-color);
  
}
</style>
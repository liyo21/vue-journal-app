<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({  name: 'entry', params: { id: 10 }})"
  >
      <div class="entry-tite d-flex">
          <span class="text-success fs-5 fw-bold">01</span>
          <span class="mx-1 fs-5">Marzo</span>
          <span class="mx-2 fw-light">2022, miercoles</span>
      </div>
      <div class="entry-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolores maxime illo eius repudiandae sit doloribus magni beatae laboriosam non? 
        Vero illo omnis consectetur aliquid incidunt quisquam obcaecati corrupti magnam a.
      </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s aññ ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s aññ ease-in;
  }
  .entry-description {
    font-size: 12px ;
  }
}
</style>
<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">12</span>
      <span class="mx-1 fs-3">julio</span>
      <span class="mx-2 fs-4 fw-light">2022, jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2 text-white">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary text-white">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-colum px-3 h-75">
    <textarea  placeholder="¿Qué sucedió hoy?"></textarea>
  </div>
  <Fab icon="fa-save" />
  <img
    src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-1280x720.jpg"
    alt="entry-picture"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "entry-view",
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
    width: 100%;
    border: none;
    font-size: 20px;
    height: 80px;
    &:focus {
        outline: none;
    }
}
img{
    width: 200px;
    position: fixed;
    right: 20px;
    bottom: 150px;
    box-shadow: 0 5px 10px rgba($color: #000,$alpha: .2);
}
</style>
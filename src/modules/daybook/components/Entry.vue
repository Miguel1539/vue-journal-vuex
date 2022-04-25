<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })">
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="m-1 fs-5 ">julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <div class="entry-desciption">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, aliquam, atque, autem blanditiis consequatur
                cumque debitis doloremque dolorum eaque eius enim error
                exercitationem fugiat harum hic id illo impedit in ipsam
                ipsum itaque iure laboriosam libero magni maxime minima
        </div>
    </div>
</template>

<script>
    export default {
        name: 'entry-component'
    }
</script>

<style lang="scss" scoped>
.pointer{
    cursor: pointer;
}
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: all .2s ease-in;
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
    }
    .entry-title{
       font-size: 12px;
    }
}
</style>
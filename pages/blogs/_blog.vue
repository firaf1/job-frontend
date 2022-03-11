<template>
<div class="">

  <h1>This is Specific Blog Page</h1>
{{ slug.blog }}
</div>
</template>

<script>
export default {
layout:'app_layout',
data(){
    return{
        slug: this.$route.params,
    }
}
}
</script>

<style>

</style>
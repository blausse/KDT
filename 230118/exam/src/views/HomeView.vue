<template>
<div>
  <hello-world></hello-world>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/ReadComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

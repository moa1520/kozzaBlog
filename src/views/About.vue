<template>
  <div class="about">
    <v-alert type="primary" :value="true" v-for="i in array">
      반복중 {{ i }}
    </v-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      array: [1, 2, 3, 4, 'www', 'xxx']
    }
  }
}
</script>

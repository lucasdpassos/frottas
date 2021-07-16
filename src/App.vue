<template>
  <v-app style="background-color:#333333">
   <First />
   <Second />
   <Third />
  </v-app>
</template>

<script>

import First from '../src/components/First.vue'
import Second from '../src/components/Second.vue'
import Third from '../src/components/Third.vue'

export default {
  name: 'App',

  components: {
   First,
   Second,
   Third
  },

  data: () => ({
    //
  }),
};
</script>

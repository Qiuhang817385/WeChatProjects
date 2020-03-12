<template>
  <div class="">
    <label for="666">你喜欢我哪一点? </label>
    <input name="666"
           @input="changed"
           type="text"></input>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    changed (event) {
      this.$store.commit('chage', event.target.value);
    }
  }
};

</script>
<style>
</style>

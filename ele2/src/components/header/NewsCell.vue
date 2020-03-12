<template>
  <section>
    <section @click="jumpPage">
      <aside>
        <h2>{{newsDate.goods}}</h2>
        <section>
          <span>{{newsDate.seller}}</span>
        </section>
        <section>
          <span>{{newsDate.ratings}}</span>
        </section>
      </aside>

    </section>
  </section>
</template>

<script>
export default {
  name: 'NewsCell',
  props: {
    newsDate: Object
  },
  data () {
    return {
    };
  },
  computed: {
  },
  methods: {
    jumpPage: function () {
      window.location.href = this.newsDate.url;
    }
  }
};
</script>

<style scoped>
</style>

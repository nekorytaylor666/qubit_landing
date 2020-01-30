<template>
  <section>
    <OldSection></OldSection>
    <NewSection></NewSection>
  </section>
</template>

<script>
import NewSection from '@/components/NewSection.vue';
import OldSection from '@/components/OldSection.vue';
export default {
  components: {
    NewSection,
    OldSection,
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
}

.old {
  background-color: #dedede;
  color: #535151;
}
</style>

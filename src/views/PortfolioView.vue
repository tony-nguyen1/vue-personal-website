<template>
  <div id="content" class="row">
    <h1>Portefolio</h1>
    <div
      class="flex flex-col mx-auto space-y-4 leading-6 max-w-2xl space-y-16 mb-16"
    >
      <div
        class="mx-9 bg-orange-200 drop-shadow-2xl carte"
        v-for="projet in projets"
        :key="projet.id"
      >
        <UnProjet
          :titre="projet.nom"
          :description="projet.description"
          :lienCode="projet.code"
          :lienVideo="projet.video"
          :langagesUtiliseTab="projet.langages"
          :techUtiliseTab="projet.tech"
        ></UnProjet>
      </div>
    </div>
  </div>
</template>

<script>
import UnProjet from "@/components/UnProjet.vue";
import sourceData from "@/data.json";

export default {
  data() {
    return {
      projets: sourceData.portfolio,
    };
  },
  components: {
    UnProjet,
  },
};
</script>

<style scoped>
#content {
  overflow: auto;
}
</style>

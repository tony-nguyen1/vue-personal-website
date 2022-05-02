<template>
  <h1>Portefolio</h1>
  <div class="justify-center content-center w-1/3">
    <div
      class="mx-9 bg-orange-200 drop-shadow-2xl mb-16"
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

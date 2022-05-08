// création d'un composant/balise
<template>
  <div class="item py-4">
    <h3>{{ titre }}</h3>
    <div id="langUtilises">
      <h4>Langages utilisés</h4>
      <projetLangages :noms="langagesUtiliseTab" />
      <!-- <ul class="flex flex-row justify-center">
        <li v-for="unLangage in langagesUtiliseTab" :key="unLangage">
          {{ getNom(unLangage) }}
          <img
            class="h-24"
            :src="require('../assets/logo/' + unLangage)"
            :alt="unLangage + ' logo'"
          />
        </li>
      </ul> -->
    </div>
    <div id="techUtilises">
      <h4>Framework/bibliothèques utilisées</h4>
      <projetLangages :noms="techUtiliseTab" />
      <!-- <ul class="flex flex-row justify-center">
        <li v-for="uneTech in techUtiliseTab" :key="uneTech">
          {{ getNom(uneTech) }}
          <img
            class="h-24"
            :src="require('../assets/logo/' + uneTech)"
            :alt="uneTech + ' logo'"
          />
        </li>
      </ul> -->
    </div>
    <p>{{ description }}</p>
    <div class="flex flex-row justify-center space-x-4">
      <button
        class="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none hover:scale-[1.1]"
      >
        <a :href="lienCode" target="_blank">Lien vers code source </a>
      </button>
      <!-- <a class="shadow-xl shadow-blue-500/50" :href="lienCode" target="_blank"
        >Lien vers code source
      </a> -->
      <button
        class="py-2 px-3 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 focus:outline-none hover:scale-[1.1]"
      >
        <a :href="lienVideo" target="_blank"> Lien vers demonstration vidéo </a>
      </button>
    </div>
  </div>
</template>

<script>
import projetLangages from "@/components/ProjetLangages.vue";

export default {
  name: "UnProjet",
  components: {
    projetLangages,
  },
  props: {
    titre: String,
    description: String,
    lienCode: String,
    lienVideo: String,
    langagesUtiliseTab: Array,
    techUtiliseTab: Array,
  },
  methods: {
    getNom(param) {
      let nom = param.split(".")[0];
      let nomClean = nom.charAt(0).toUpperCase() + nom.slice(1);
      // console.log(nomClean);
      return nomClean;
    },
  },
};
</script>

<style scoped>
button {
  transition: transform 0.2s;
  transition-timing-function: ease-in-out;
}
</style>

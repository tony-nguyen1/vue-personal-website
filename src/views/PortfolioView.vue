<template>
  <div id="content" class="row">
    <div id="filtre">
      <p v-if="filterTurnedOn()">Filtre activé</p>
      <p v-else>Filtre désactivé</p>
      <button
        v-for="unLangage in this.getAllLangages()"
        @click="toggleLangage(unLangage)"
        :key="unLangage"
      >
        {{ unLangage }}
      </button>
      <button @click="filterTurnedOn">test</button>
    </div>
    <h1>Portefolio</h1>
    <div
      class="flex flex-col mx-auto space-y-4 leading-6 max-w-2xl space-y-16 mb-16"
    >
      <div
        class="mx-9 bg-orange-200 drop-shadow-2xl carte"
        v-for="projet in getRelevantProjects"
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
        <!-- v-if="!filterTurnedOn() || matchFilter(projet.langages)" -->
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
      langagesInteresse: {},
    };
  },
  components: {
    UnProjet,
  },
  computed: {
    getRelevantProjects() {
      let rep = [];
      if (!this.filterTurnedOn()) {
        rep = this.projets;
      } else {
        for (let i = 0; i < this.projets.length; i++) {
          for (let j = 0; j < this.projets[i].langages.length; j++) {
            for (let lang in this.langagesInteresse) {
              if (this.langagesInteresse[lang]) {
                if (this.getNom(this.projets[i].langages[j]) == lang) {
                  if (!rep.includes(this.projets[i])) {
                    rep.push(this.projets[i]);
                  }
                }
              }
            }
          }
        }
      }
      // console.log(rep);
      return rep;
    },
  },
  methods: {
    getNom(param) {
      let nom = param.split(".")[0];
      let nomClean = nom.charAt(0).toUpperCase() + nom.slice(1);
      return nomClean;
    },
    toggleLangage(l) {
      this.langagesInteresse[l] = !this.langagesInteresse[l];
      console.log(this.langagesInteresse);
      return;
    },
    getAllLangages() {
      let rep = [];

      for (let i in this.projets) {
        for (let j in this.projets[i].langages) {
          let nom = this.getNom(this.projets[i].langages[j]);
          if (!rep.includes(nom)) {
            rep.push(nom);
          }
        }
      }

      return rep;
    },
    matchFilter(arrayLangages) {
      let stop = false;
      for (let i of arrayLangages) {
        let nom = this.getNom(i);
        if (!stop && this.langagesInteresse[nom]) {
          stop = true;
        }
      }
      return stop;
    },
    filterTurnedOn() {
      let bool = false;
      for (let attr in this.langagesInteresse) {
        if (this.langagesInteresse[attr]) bool = true;
      }
      return bool;
    },
  },
  created() {
    for (let i in this.projets) {
      for (let j in this.projets[i].langages) {
        let nom = this.getNom(this.projets[i].langages[j]);
        this.langagesInteresse[nom] = false;
      }
    }

    return;
  },
};
</script>

<style scoped>
#content {
  overflow: auto;
}
</style>

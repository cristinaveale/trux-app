<template>
  <div>
    <SearchBar defaultQuery="okta" v-on:search-submitted="githubQuery"/>
    <!--change githubQuery-->
    <v-container grid-list-md fluid class="grey lighten-4">
      <v-tabs
        slot="extension"
        v-model="tabs"
        centered
        color="teal"
        text-color="white"
        slider-color="white"
      >
        <v-tab class="white--text" :key="2">KUDOS</v-tab>
        <v-tab class="white--text" :key="1">SEARCH</v-tab>
      </v-tabs>
      <v-tabs-items style="width:100%" v-model="tabs">
        <v-tab-item :key="2">
          <v-layout row wrap>
            <v-flex v-for="kudo in allKudos" :key="kudo.id" md4>
              <TruxRepo :repo="kudo"/>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item :key="1">
          <v-layout row wrap>
            <v-flex v-for="repo in repos" :key="repo.id" md4>
              <TruxRepo :repo="repo"/>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import TruxRepo from "./TruxRepo.vue";
import truxClient from "../truxClient";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: { SearchBar, TruxRepo },
  data() {
    return {
      tabs: 0
    };
  },
  computed: mapGetters(["allKudos", "repos"]),
  created() {
    this.getKudos();
  },
  //<!--change githubQuery-->
  methods: {
    githubQuery(query) {
      this.tabs = 1;
      truxClient
        .getJSONRepos(query)
        .then(response => this.resetRepos(response.items));
    },
    ...mapMutations(["resetRepos"]),
    ...mapActions(["getKudos"])
  }
};
</script>

<style>
.v-tabs__content {
  padding-bottom: 2px;
}
</style>
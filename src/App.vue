<template>
  <div id="app">
    <StarWars msg="StarWars search" @starwars-characters="sendCharacters" @search-text="checkInput" />
    <CharacterList :characters="characters" :check="check"></CharacterList>
  </div>
</template>

<script>
// @ is an alias to /src
import StarWars from "@/views/StarWars.vue";
import CharacterList from '@/views/CharacterList.vue';

export default {
  name: "Home",
  components: {
    StarWars,
    CharacterList
  },
  data() {
    return {
      characters: [],
      check: false,
    }
  },

  methods: {
    
    // Sending prop characters to CharacterList after api calls returned back from child element StarWars
    sendCharacters(names) {
      this.characters = names
    },

    // checks if trere is any string presented in input field
    checkInput(check) {
    if(check) {
      this.check = true
    } else {this.check = false}
  }

  },

};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

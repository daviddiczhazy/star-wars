<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <input class="input" :class="{'active-input': activeInput}" type="text" v-model="searchText" @input="searchCharacter()"  ref="input">

  </div>
</template>

<script>
import axios from 'axios'
import {debounce} from 'lodash-es'
export default {
  name: "StarWars",
  props: {
    msg: String,
  },
  
  data() {
    return {
      searchText: "",
    }
  },

  mounted() {
		this.$refs.input.focus()
	},

  methods: {

    /*
    * Function for API call to get name of star wars character according text in input which is fired after each input change    *
    * 
    */
    getCharacters(){

      let names = []

      if (this.searchText === "") {
        this.$emit("search-text", this.searchText)
        return this.$emit("starwars-characters", names )
        
      }
     
        axios.get(`https://swapi.py4e.com/api/people/?search=${this.searchText}`)
        .then(response => {
          names = response.data.results
          .map(name => name.name)
          this.$emit("starwars-characters", names )
        })

        this.$emit("search-text", this.searchText)
    },

    // Debounce function for limiting API calls
    searchCharacter: debounce(function() {
      this.getCharacters()
    }, 400),

},

  computed: {
    activeInput() {
      if (this.searchText) {
        return true
      } else {
        return false
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-size: 45px;
  font-weight: 400;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  padding: 1em;
  border: 2px solid #ccc;
  border-radius: 2px;
  width: 22em;
}


.active-input {
  border: 4px solid #2FD17D;
}

</style>

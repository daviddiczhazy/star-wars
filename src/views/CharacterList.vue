<template>
    <div class="character-list">
        <p v-show="messageCheck()" class="empty-input">{{message}}</p>
        <CharacterListItem v-for="character in characters" :key="character.id" :character="character" ></CharacterListItem>
        
    </div>
</template>

<script>
import CharacterListItem from '@/components/CharacterListItem.vue';
    export default {
        name: "CharacterList",
        props: {
            characters: Array,
            check: Boolean,
        },
        components: {
            CharacterListItem
        },
        data() {
            return {

                message: ""
            }
        },


        methods: {

            /*
            * Function for checking which message should be displayed and if shold not be According check prop which sends boolean value based on if any string is passed. 
            * and if no character was send from api call.
            */
            messageCheck() {

                if (this.check === true) {
                    if (this.characters.length != 0) {
                        return false
                    } else {
                        this.message = "Nothing found"
                        return true
                    }
                } else {
                    this.message = "Enter search phrase"
                    return true
                }
            }
        }

        
    }
</script>

<style scoped>

.character-list {
    padding-top: 2em;
    width: 20.5em;
    margin: 0 auto;
}

.empty-input {
    font-weight: 700;
}

</style>
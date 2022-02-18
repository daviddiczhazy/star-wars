<template>
    <div class="list-item">
        {{ character}}
        
    </div>
</template>

<script>
    export default {
        props: {
            character: String,
        }

    }
</script>

<style scoped>

.list-item {
    background: #2C3843;
    color: aliceblue;
    margin: .5em 0;
    padding: 1em;
    border-radius: 4px;
    text-align: left;
}

</style>
<!--
Author: Szigeti
Add date: 2022-06-23 11:45:36
-->

<script setup lang="ts">

/*interface getInterface {
    text: string
}*/

const { data: apiGet } = await useAsyncData(
    'api_get',
    () => $fetch('/api/test', {
        method: 'GET'
    })
)

const getText = apiGet.value.text;
console.log(getText)

</script>

<template>
    <div>
        Index oldal<br />
        {{ apiGet.text }}<br />
    </div>
</template>

<style scoped lang="scss">
</style>
<!--
Author: Szigeti
Add date: 2022-06-23 11:45:36
-->

<script setup lang="ts">

interface getInterface {
    id: number,
    text: string
}

const config = useRuntimeConfig()

const { data: apiGet } = await useAsyncData(
    'api_get',
    () => $fetch('/api/test', {
        method: 'GET',
        headers: {
            token: useRuntimeConfig().apiSecret
        }
    })
)

console.log(apiGet.value);

const getText = (apiGet.value as getInterface).text
console.log(getText)

</script>

<template>
    <div>
        Index oldal<br />
        {{ getText }}<br />
    </div>
</template>

<style scoped lang="scss">
</style>
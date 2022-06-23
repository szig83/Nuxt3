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

const { data: apiGet, error: apiGetError } = await useAsyncData(
    'api_get',
    () => $fetch('/api/test', {
        method: 'GET',
        headers: {
            token: useRuntimeConfig().apiSecret
        }
    })
)

let datas = reactive({
    text: ""
});

if (!apiGetError.value) {
    datas.text = (apiGet.value as getInterface).text
    console.log(datas.text)
}
</script>

<template>
    <div>
        Index oldal<br />
        {{ datas.text }}<br />
    </div>
</template>

<style scoped lang="scss">
</style>
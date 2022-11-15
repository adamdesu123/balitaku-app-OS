<template>
    <div class="sub-npa">
        <ul>
            <li 
            v-for="title in tabTitles" 
            :key="title"
            :class="{ selected: title == selectedTitle }"
            @click="selectedTitle = title"
            >
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<script>
import { provide, ref } from 'vue'

export default {
    setup (props, { slots }){
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide("selectedTitle", selectedTitle)
        return {
            selectedTitle,
            tabTitles
        }
    }
}

</script>

<style>
.sub-npa ul{
    display: flex;
    justify-content: flex-start;
    background-color: #fff;
    margin-top: -16px;
}

</style>
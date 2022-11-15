<template>
    <div class="npw">
        <ul class="ul">
            <li 
            v-for="title in tabTitles" 
            :key="title"
            :class="{ selected: title == selectedTitle }"
            @click="selectedTitle = title"
            class="li"
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
.npw .ul{
    display: flex;
    list-style: none;
    padding: 0;
}

.npw .ul .li{
    flex: 1;
    padding: 15px 20px;
    /* color: #6B6B6B;  */
    cursor: pointer;
    border-bottom: 1px solid rgba(190, 190, 190, 0.3);
}

.selected {
  color: #111;
  font-weight: 600;
  border-top: 3px solid #00205C;
  border-bottom: inherit;
  border-right: 1px solid rgba(190, 190, 190, 0.3);
  border-bottom: none;
}

</style>
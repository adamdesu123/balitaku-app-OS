<template>
    <div class="ntw">
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
.ntw .ul{
    display: flex;
    list-style: none;
    padding: 0;
    text-align: center;
    border-bottom: 1px solid rgba(190, 190, 190, 0.3);  
}

.ntw .ul .li{
    flex: 1;
    padding: 10px 0;
    /* color: #6B6B6B;  */
    cursor: pointer;  
    font-size: .9em;
}

.selected {
  color: #111;
  font-weight: 600;
  border-bottom: 1px solid #111;
}

</style>
<template>
    <div class="gender-npa">
        <ul class="wrapp-ul">
            <li 
            class="wrapp-li"
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
.gender-npa{
}

.gender-npa .wrapp-ul{
    display: flex;
    list-style: none;
    padding: 0;
    background-color: #eee;
    justify-content: flex-end;
    gap:0;
    
}

.gender-npa .wrapp-ul .wrapp-li{
    padding: 10px 40px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid rgba(190, 190, 190, 0.3);
    color: #00205C;
}

.selected {
  font-weight: 600;
  border-top: 3px solid #00205C;
  border-bottom: 1px solid #fff;
  border-right: 1px solid rgba(190, 190, 190, 0.3);
}

</style>
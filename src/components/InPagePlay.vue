<template>
	<button @click="$emit('click')" :class="[custom_class, 'material-symbols-outlined', 'interaction_button']">play_arrow</button>
</template>

<script setup>
const props = defineProps({
	custom_class: { type: String, default: '' }
})
defineEmits(['click']);
</script>
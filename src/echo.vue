<template>
	<h1 class='echo'>{{ message }}</h1>
</template>
<script>
export default {
	name: 'echo',
	props: {
		message: {
			type: String,
			required: true
		}
	}
}
</script>
<style scoped>
.echo {
	color: red;
}
</style>

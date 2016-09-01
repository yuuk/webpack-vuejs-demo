<style>
	body{
		color:#ddd;
		h2{color:#ff0;}
	}
</style>

<template>
	<div class="my-component">
		<h2 v-on:click="test">{{msg}}</h2>
		<input v-model="msg">
	</div>
</template>

<script>

require('../less/main.less');

import cartList from '../data/product.json';

console.log(cartList);

export default {
	data () {
		return {
			msg: 'Hellow Vue Component'
		}
	},
    methods: {
        test (){
        	alert(this.msg);
        }
    }
} 
</script>
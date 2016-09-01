import {yuuk}  from './js/sub';
import Vue from './js/vue';
import App from './components/test';

var vm = new Vue({
	el: 'body',
 	components:{
    	'app': App
  	}
});

//require('./less/main.less');
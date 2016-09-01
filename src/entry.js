import Vue from './js/vue';
import App from './components/test';

var vm = new Vue({
	el: 'body',
 	components:{
    	'app': App
  	}
});
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import { createStore } from 'lib/store/index';
import app from './app';

import 'jquery';
import 'bootstrap';

import clipboardJS from 'clipboard';

import swal from 'sweetalert';


const store = createStore([
    'common',
]);


const Page = new Vue({
    el: '#appBox',
    components: {
        ppSignature: () => import('components/ppSignature/main.vue'),
    },
    data(){
        return {
        };
    },
    computed: {
        ...mapGetters([
        ]),
    },
    watch: {

    },
    mounted(){
        const that = this;
    },
    methods: {
    },
    store,
});
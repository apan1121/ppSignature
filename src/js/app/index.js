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

console.log(111);
const Page = new Vue({
    el: '#appBox',
    components: {
    },
    data(){
        return {
            clipboardJSFlag: '',
            groupSelector: {
                academy: {
                    name: '知識內容 Academy',
                    img: 'data:image/png;base64,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',
                },
                connect: {
                    name: '內容行銷 Connect',
                    img: 'data:image/png;base64,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',
                },
                next: {
                    name: '品牌影響力 Next',
                    img: 'data:image/png;base64,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',
                },
            },
            group: 'connect',
            name: 'GG Lee',
            jobTitle: 'Art Director',
            extension: '',
            cellphone: '',
            email: '@pressplay.cc',
            lineId: '',
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
        this.initClipboard();
    },
    methods: {
        initClipboard(){
            console.log('initClipboard');
            const that = this;
            // eslint-disable-next-line new-cap
            const clipboard = new clipboardJS('.share-url-clipboard-btn', {
                // text(trigger){
                //     return that.$refs.signatureHTML.outerHTML;
                // },
                target: function(trigger) {
                    return that.$refs.signatureHTML;
                }
                // container: that.$refs.signatureHTML,
            });

            clipboard.on('success', (e) => {
                that.clipboardJSFlag = 'success';
                e.clearSelection();
                swal({
                    title: "成功",
                    text: "簽名檔已在您的剪貼簿中",
                    icon: "success",
                });
            });

            clipboard.on('error', (e) => {
                that.clipboardJSFlag = 'error';
                swal({
                    title: "失敗",
                    text: "請重新嘗試複製，或洽詢工作人員",
                    icon: "error",
                });
            });
        },
        copy(){

        },
    },
    store,
});
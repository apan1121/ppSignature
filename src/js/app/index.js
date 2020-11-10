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
                    img: 'https://static.pressplay.cc/static/uploads/ics/20201109/5fa91980d435b20201109182712.png',
                },
                connect: {
                    name: '內容行銷 Connect',
                    img: 'https://static.pressplay.cc/static/uploads/ics/20201109/5fa9198b3de9b20201109182723.png',
                },
                next: {
                    name: '品牌影響力 Next',
                    img: 'https://static.pressplay.cc/static/uploads/ics/20201109/5fa919920caec20201109182730.png',
                },
                pressplay: {
                    name: 'PressPlay',
                    img: 'https://static.pressplay.cc/static/uploads/ics/20201110/5faa0c0c00a0a20201110114204.png',
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
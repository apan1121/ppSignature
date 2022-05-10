<template>
    <div class="container pb-5 pt-5">
        <h2 class="mb-5">
            五步驟建立您的 PressPlay 簽名檔
        </h2>

        <h3 class="mt-3 mb-3">
            1. 填寫您的基本資料
        </h3>
        <div class="row">
            <div class="col-12 col-md-4">
                <form>
                    <div class="form-group">
                        <label for="name">事業體 <small>(必填)</small></label>
                        <select v-model="cardInfo.group" class="form-control">
                            <option v-for="(groupInfo, key) in groupSelector" :key="key" :value="key"
                                v-text="groupInfo.name"
                            ></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="department">部門 <small>(必填)</small></label>
                        <select v-model="cardInfo.department" class="form-control">
                            <option value="" disabled>
                                請選擇
                            </option>
                            <option v-for="(department_name, key) in groupSelector[cardInfo.group].department" :key="key" :value="department_name"
                                v-text="department_name"
                            ></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">姓名 <small>(必填)</small></label>
                        <input v-model="cardInfo.name" type="text" class="form-control"
                            name="name" placeholder="請輸入您的中文或英文姓名"
                        >
                    </div>
                    <div class="form-group">
                        <label for="jobTitle">職稱 <small>(必填)</small></label>
                        <input v-model="cardInfo.jobTitle" type="text" class="form-control"
                            name="jobTitle" placeholder="請輸入您的完整職稱"
                        >
                    </div>
                    <div v-if="cardInfo.group !== 'hk'" class="form-group">
                        <label for="extension">分機號碼 <small>(選填)</small></label>
                        <input v-model="cardInfo.extension" type="text" class="form-control"
                            name="extension" placeholder="請輸入您的分機號碼"
                        >
                    </div>
                    <div class="form-group">
                        <label for="cellphone">手機 <small>(選填)</small></label>
                        <input v-model="cardInfo.cellphone" type="text" class="form-control"
                            name="cellphone" placeholder="請輸入您的手機"
                        >
                    </div>
                    <div class="form-group">
                        <label for="email">Email <small>(必填)</small></label>
                        <input v-model="cardInfo.email" type="text" class="form-control"
                            name="jobTitle" placeholder="請輸入您的手機"
                        >
                    </div>
                    <div class="form-group">
                        <label for="lineId">Line ID <small>(選填)</small></label>
                        <input v-model="cardInfo.lineId" type="text" class="form-control"
                            name="lineId" placeholder="Line ID"
                        >
                    </div>
                </form>
            </div>
            <div class="col-12 col-md-8">
                <table ref="signatureHTML" cellpadding="0" cellspacing="0"
                    style="border-spacing:0px;border-collapse:collapse;background-color:transparent;color:rgb(68,68,68);width:480px;font-size:10pt;font-family:Arial,sans-serif;line-height:normal"
                >
                    <tbody>
                        <tr>
                            <td valign="top" style="padding:10px 10px 12px 5px;width:200px;vertical-align:top; text-align: right;">
                                <a href="https://www.pressplay.cc/"
                                    style="display: inline-block; background-color:transparent;color:rgb(51,122,183);text-decoration:none; margin-bottom: 2px;" target="_blank">
                                    <img border="0"
                                        alt="Logo"
                                        style="width: initial; height: 32px"
                                        :src="groupSelector[cardInfo.group].img"
                                        :style="{
                                            border: '0px',
                                            'vertical-align': 'middle',
                                            width: 'auto',
                                            height: '33px'
                                        }" class="CToWUd"
                                    >
                                </a>
                                <!-- <div style="font-family:Verdana,sans-serif;color:#061733">
                                    {{ cardInfo.department }}
                                </div> -->
                            </td>
                            <td style="padding:12px 0px 6px 0px;width:320px">
                                <table cellpadding="0" cellspacing="0" style="border-spacing:0px;border-collapse:collapse;background-color:transparent">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0px;font-size:12pt;font-family:Arial,sans-serif;font-weight:bold;color:rgb(61,60,63)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">{{ cardInfo.name }}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0px 0px 11px;font-size:10pt;font-family:Arial,sans-serif;color:rgb(61,60,63)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">{{ cardInfo.jobTitle }}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0px;font-size:10pt;font-family:Arial,sans-serif;color:rgb(155,155,155)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">{{ cardInfo.department }}</span>
                                            </td>
                                        </tr>
                                        <tr v-if="cardInfo.group !== 'hk'">
                                            <td style="padding:0px;font-size:10pt;font-family:Arial,sans-serif;color:rgb(155,155,155)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">phone: <a :href="`tel:${phone}`" style="font-family:Verdana,sans-serif;color:#061733">{{ phone }}</a></span></span>
                                            </td>
                                        </tr>
                                        <tr v-if="cardInfo.cellphone">
                                            <td style="padding:0px;font-size:10pt;font-family:Arial,sans-serif;color:rgb(155,155,155)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">
                                                    cellphone:
                                                    <a :href="`tel:${cardInfo.cellphone}`" style="font-family:Verdana,sans-serif;color:#061733">{{ cardInfo.cellphone }}</a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0px;font-size:10pt;font-family:Arial,sans-serif;color:rgb(155,155,155)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">email: </span>
                                                <span style="color:rgb(23,147,210)">
                                                    <a :href="`mailto:${cardInfo.email}`" style="font-family:Verdana,sans-serif;color:rgb(244,170,16)">{{ cardInfo.email }}</a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr v-if="cardInfo.lineId">
                                            <td style="padding:0px;font-size:10pt;font-family:Arial,sans-serif;color:rgb(155,155,155)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">
                                                    Line ID:
                                                    <span style="font-family:Verdana,sans-serif;color:#061733">{{ cardInfo.lineId }}</span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0px;font-size:10pt;font-family:Arial,sans-serif;color:rgb(155,155,155)">
                                                <span style="font-family:Verdana,sans-serif;color:#061733">
                                                    <template v-if="cardInfo.group === 'hk'">
                                                        Room F, 9/F, Tower A, Capital Tower, 38 Wai Yip Street, Kowloon, Hong Kong
                                                        <br>
                                                        香港九龍偉業街38號富臨中心A塔9F
                                                    </template>
                                                    <template v-else>
                                                        103 台北市大同區西寧北路62-5號2樓
                                                    </template>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <hr />

        <h3 class="mt-3 mb-3">
            2. 點擊複製簽名檔
        </h3>
        <button class="btn btn-primary share-url-clipboard-btn" @click="copy">
            複製
        </button>

        <hr />

        <h3 class="mt-3 mb-3">
            3. 至 GMail 設定頁面
        </h3>

        <p>點擊右側齒輪 <a target="_blank" href="https://mail.google.com/mail/u/0/#settings/general" class="btn btn-warning"> <i class="fas fa-cog"></i> </a> 進入 GMail 設定頁面</p>

        <h4 class="pt-2 pb-2">
            或
        </h4>

        <p>點擊 GMail 主畫面右上角 <b class="text-primary">齒輪圖示</b>，並點擊 <b class="text-primary">查看所有設定</b></p>
        <div><img :src="'./dist/img/pressplay/setting.png'"></div>

        <hr />

        <h3 class="mt-3 mb-3">
            4. 設定您的簽名檔
        </h3>

        <h5 class="mt-3 mb-3">
            a. 在 ＧMail 設定頁面中找到簽名設定，並點擊 <b class="text-primary"><i class="fas fa-plus"></i> 建立新標籤</b>
        </h5>
        <div><img :src="'./dist/img/pressplay/step1.png'"></div>


        <h5 class="mt-3 mb-3">
            b. 新增一個簽名
        </h5>
        <div><img :src="'./dist/img/pressplay/step2.png'"></div>

        <h5 class="mt-3 mb-3">
            c. 點擊空白區塊，ctrl + v (cmd + v) 貼上您的簽名檔
        </h5>
        <div><img :src="'./dist/img/pressplay/step3.png'"></div>
        <div><img :src="'./dist/img/pressplay/step3-1.png'"></div>


        <h5 class="mt-3 mb-3">
            d. 將簽名檔設為預設值
        </h5>
        <div><img :src="'./dist/img/pressplay/step4.png'"></div>


        <h5 class="mt-3 mb-3">
            e. 儲存設定
        </h5>
        <div><img :src="'./dist/img/pressplay/step5.png'"></div>

        <hr />
        <h3 class="mt-3 mb-3">
            5. 完成！
        </h3>
        <p>恭喜你完成您的簽名檔，趕快找一個人來測試寄信看看吧，如果不知道要寄給誰，歡迎寄給 <a href="mailto:gg@pressplay.cc">gg@pressplay.cc</a></p>
    </div>
</template>
<script>

import clipboardJS from 'clipboard';
import swal from 'sweetalert';

import { mapActions, mapMutations, mapGetters } from 'vuex';

// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {},
    filters: {},
    props: {},
    data(){
        return {
            clipboardJSFlag: '',
            groupSelector: {
                pressplay: {
                    name: 'PressPlay',
                    img: 'https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_PressPlay.png',
                    department: [
                        '管理部',
                        '中央營運處',
                        '公關部',
                        '人資部',
                        '法務部',
                        '財務部',
                    ],
                },
                next: {
                    name: 'PPX Next',
                    img: 'https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_Next.png',
                    department: [
                        '影響力品牌事業群',
                        '內容行銷部',
                        '經紀部',
                        '品牌部',
                        '課程部',
                    ],
                },

                academy: {
                    name: 'PPA Academy',
                    img: 'https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_Academy.png',
                    department: [
                        '知識內容事業群',
                        '商業開發部',
                        '課程營運部',
                        '知識內容行銷部',
                        '產品設計部',
                        '系統開發部',
                    ],
                },

                hk: {
                    name: 'PressPlay HK',
                    img: 'https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_HK.png',
                    department: [
                        '經紀部 Talent',
                        '課程部 Next Master',
                        '品牌部 Brand',
                        '內容行銷部 Connect',
                    ],
                },
            },

            cardInfo: {
                group: 'pressplay',
                department: '',
                name: 'GG Lee',
                jobTitle: 'Art Director',
                extension: '',
                cellphone: '',
                email: '@pressplay.cc',
                lineId: '',
            },
        };
    },
    computed: {
        ...mapGetters([
        ]),
        phone(){
            const that = this;
            let phone = '(02) 2558-8355';
            if (!!that.cardInfo.extension) {
                phone = `${phone} #${that.cardInfo.extension}`;
            }
            return phone;
        },
    },
    watch: {
        'cardInfo.group': function(newVal, oldVal){
            const that = this;
            if (newVal !== oldVal) {
                const cardInfo = JSON.parse(JSON.stringify(this.cardInfo));
                cardInfo.department = '';
                that.cardInfo = cardInfo;
            }
        },
    },
    created(){},
    mounted(){
        this.initClipboard();
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        initClipboard(){
            console.log('initClipboard');
            const that = this;
            // eslint-disable-next-line new-cap
            const clipboard = new clipboardJS('.share-url-clipboard-btn', {
                // text(trigger){
                //     return that.$refs.signatureHTML.outerHTML;
                // },
                target(trigger){
                    return that.$refs.signatureHTML;
                },
                // container: that.$refs.signatureHTML,
            });

            clipboard.on('success', (e) => {
                that.clipboardJSFlag = 'success';
                e.clearSelection();
                swal({
                    title: '成功',
                    text: '簽名檔已在您的剪貼簿中',
                    icon: 'success',
                });
            });

            clipboard.on('error', (e) => {
                that.clipboardJSFlag = 'error';
                swal({
                    title: '失敗',
                    text: '請重新嘗試複製，或洽詢工作人員',
                    icon: 'error',
                });
            });
        },
        copy(){

        },
    },
};
</script>
<style lang="scss" scoped>
</style>
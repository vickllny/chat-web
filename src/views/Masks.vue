<template>
    <div class="window">
        <div class="window-header">
            <div class="window-header-title">
                <div class="window-header-title-main">
                    预设角色面具
                </div>
                <div class="window-header-title-sub">
                    {{ count }} 个预设角色定义
                </div>
            </div>
            <div class="window-header-actions">
                <div class="window-header-action-button">
                    <ElButton>
                        <el-icon><Download /></el-icon>
                        导出 
                    </ElButton>
                    <ElButton>
                        <el-icon><Upload /></el-icon>
                        导入 
                    </ElButton>
                    <ElButton > 
                        <el-icon><CloseBold /></el-icon>
                    </ElButton>
                </div>
            </div>
        </div>
        <div class="window-body">
            <div class="window-body-filter">
                <ElInput class="window-body-filter-input" placeholder="搜索角色面具" type="text"></ElInput>
                <el-select class="window-body-filter-select" size="large" v-model="lang">
                    <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value"></el-option>
                </el-select>
                <ElButton class="window-body-filter-button">
                    <el-icon><CirclePlus /></el-icon>
                    新建
                </ElButton>
            </div>
            <div class="masks-list">
                <ElScrollbar>
                    <div class="item" v-for="item in masks">
                        <div class="header">
                            <div class="header-icon">
                                <div class="no-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" fill="none" class="user-avatar"><defs><path id="bot_svg__a" d="M0 0h30v30H0z"></path><path id="bot_svg__c" d="M0 0h20.455v20.455H0z"></path></defs><g><rect width="30" height="30" fill="#E7F8FF" rx="10"></rect><mask id="bot_svg__b" fill="#fff"><use xlink:href="#bot_svg__a"></use></mask><g mask="url(#bot_svg__b)"><g transform="translate(4.773 4.773)"><mask id="bot_svg__d" fill="#fff"><use xlink:href="#bot_svg__c"></use></mask><g mask="url(#bot_svg__d)"><path fill-rule="evenodd" d="M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z" style="fill: rgb(31, 148, 140);"></path></g></g></g></g></svg></div>
                            </div>
                            <div class="header-title">
                            <div class="name">{{ item.name }}</div> 
                            <div class="info">{{ item.info }}</div> 
                            </div>
                        </div>
                        <div class="actions">
                            <ElButton class="button" v-show="item.dialog" link><el-icon><CirclePlus /></el-icon>对话</ElButton>
                            <ElButton class="button" v-show="item.view" link><el-icon><View /></el-icon>查看</ElButton>
                            <ElButton class="button" v-show="item.edit" link><el-icon><Edit /></el-icon>编辑</ElButton>
                            <ElButton class="button" v-show="item.delete" link><el-icon><CircleCloseFilled /></el-icon>删除</ElButton>
                        </div>
                    </div>
                </ElScrollbar>
            </div>
        </div>
    </div>
</template>

<script>
import { ElInput, ElSelect, ElButton } from 'element-plus';
import { CloseBold } from '@element-plus/icons-vue'
import { ref, watch, onMounted } from 'vue';

    export default {
        setup() {
            //var
            const name = ref('NewChat');
            const count = ref(0);
            const lang = ref("");
            count.value = 20;
            const options = ref([
                {name: "所有语言",value: ""},
                {name: "简体中文",value: "cn"},
                {name: "English",value: "en"},
                {name: "繁體中文",value: "tw"},
                {name: "Português",value: "pt"},
                {name: "日本語",value: "jp"},
                {name: "한국어",value: "ko"},
                {name: "Indonesia",value: "id"},
                {name: "Français",value: "fr"},
                {name: "Español",value: "es"},
                {name: "Italiano",value: "it"},
                {name: "Türkçe",value: "tr"},
                {name: "Deutsch",value: "de"},
                {name: "Tiếng Việt",value: "vi"},
                {name: "Русский",value: "ru"},
                {name: "Čeština",value: "cs"},
                {name: "Nynorsk",value: "no"},
                {name: "العربية",value: "ar"},
                {name: "বাংলা",value: "bn"},
                {name: "Slovensky",value: "sk"}
            ]);

            const masks = [];
            for(let i = 0; i < 20; ++i){
                masks.push(
                    {
                    name: `新的聊天${i}`,
                    info: `包含${i}条预设对话 / 简体中文 / gemini-pro`,
                    dialog: true,
                    view: true,
                    edit: true,
                    delete: true
                })
            };


            return {
                name,
                count,
                options,
                lang,
                masks
            }
        }
    }
</script>

<style scoped>
    .window {
       background-color: #fff; 
       height: 100%;
    }

    .window-header {
        padding: 14px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .window-header-title {
        max-width: calc(100% - 100px);
        overflow: hidden;
    }

    .window-header-title .window-header-title-main {
        font-size: 20px;
        font-weight: bolder;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        max-width: 50vw;
    }

    .window-header-actions {
        display: inline-flex;
    }

    .el-icon {
        margin-right: 5px;
        height: 16px;
        width: 16px;
    }

    button {
        border-radius: 10px;
        height: 40px;
        width: 70px;
    }

    .window-header-action-button > :nth-child(3) {
        width: 40px;
    }

    .window-header-action-button > :nth-child(3) .el-icon {
        margin-right: 0;
    }

    .window-body {
        padding: 20px;
        height: 100%;
    }

    .window-body-filter {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
        height: 40px;
        display: flex;
    }

    .window-body-filter-input {
        border-radius: 20px;
        width: 60%;
    }

    .window-body-filter-select {
        height: 40px;
        width: 30%;
        margin-left: 10px;
    }

    .window-body-filter-button {
        margin-left: 10px;
        width: 18%;
    }

    .actions {
        display: flex;
        flex-wrap: nowrap;
    }

    .actions button {
        width: 50px;
    }

    .masks-list {
        height: 73%;
        max-height: 84;
    }

    .item {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        border: 1px solid #dedede;
        border-bottom: 0px;
    }

    .masks-list .item:nth-child(1) {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .masks-list .item:last-child {
        border-bottom: 1px solid #dedede;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .masks-list .item .header {
        display: flex;
        align-items: center;
    }
    
    .header {
        display: flex;
        align-items: center;
    }

    .header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    .header-title .name {
        font-size: 14px;
        font-weight: 700;
    }

    .header-title .info {
        font-size: 12px;
    }

    .user-avatar {
        height: 30px;
        min-height: 30px;
        width: 30px;
        min-width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #dedede;
        box-shadow: 0px 2px 4px 0px gba(0,0,0,.05);
        border-radius: 11px;
    }
</style>
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
        </div>
    </div>
</template>

<script>
import { ElInput, ElSelect, ElButton } from 'element-plus';
import { CloseBold } from '@element-plus/icons-vue'
import { ref } from 'vue';

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

            return {
                name,
                count,
                options,
                lang
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
        overflow-y: auto;
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
</style>
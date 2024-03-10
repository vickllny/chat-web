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
                <div class="window-header-action-button"></div>
                <div class="window-header-action-button"></div>
            </div>
        </div>
        <div class="window-body">

        </div>
    </div>
</template>

<script>
import { CloseBold } from '@element-plus/icons-vue'
import { ref } from 'vue';

    export default {
        setup() {
            const name = ref('NewChat');
            const count = ref(0);
            count.value = 20;
            return {
                name,
                count
            }
        }
    }
</script>

<style scoped>
    .window {
       background-color: #fff; 
       border-top-right-radius: 20px;
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
    }

    .window-header-action-button > :nth-child(3) {
        width: 40px;
    }

    .window-header-action-button > :nth-child(3) .el-icon {
        margin-right: 0;
    }
</style>
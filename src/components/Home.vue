<template>
    <div id="home">
        home组件
        <el-button type="info" @click='logout'>退出</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    methods:{
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped lang="less">

</style>
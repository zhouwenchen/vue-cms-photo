<template>
    <div class="gooddesc-container">
        <h3>{{ info.title }}</h3>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default{
    data(){
        return  {
            id : this.$route.params.id,
            info : {}
        }
    },
    created(){
        this.getGoodDesc();
    },
    methods:{
        getGoodDesc(){
            this.$http.get('api/getgoodDescByGid/' + this.id).then(result =>{
                if(result.body.status === 0){
                    this.info = result.body.message[0]
                } else {

                }
            })
        }
    }
}
</script>

<style lang="scss">
.gooddesc-container{
    margin-bottom: 50px;
    h3{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px;
    }

    .content{
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

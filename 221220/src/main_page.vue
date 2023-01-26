<!--template 안에다가 보여질 내용 적어라-->
<template lang="html">
<div>
    <h2>메인 페이지 입니다.</h2>
    <button @click="fnSubPage">서브 페이지로 이동(라우터 함수 사용)</button>
</div>
</template>
<script>
// export를 해줘서 다른 곳에서도 사용할 수 있도록 한다
export default{
    methods:{
        //라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 입력
        fnSubPage(){
            this.$router.push('/sub')
        }
    }
}
</script>

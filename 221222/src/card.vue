<template>
  <v-app>
    <v-header>
    <v-app-bar class="primary"><v-toolbar-title class="white--text mx-auto">Beetle 운동화</v-toolbar-title></v-app-bar>
    </v-header>
    <v-main> 
      <v-container>
        <v-row>
          <v-col cols="12" sm="6"><h2 class="mb-3">About Beetle</h2><p>운동화는 나를 표현하는 하나의 방법이자 패션을 완성하는 필수 아이템이다. 운동화 대표 브랜드 Beetle은 편안한 발 패션으로 많은 사랑을 받고 있다.</p></v-col>
          <v-col cols="12" sm="6"><h2 class="mb-3">Beetle's Target</h2><p>1. 운동화에 관심있는 사람은 누구나</p><p>2. 스니커즈를 사고 싶은 사람</p><p>3. 차별화된 디자인을 원하는 사람</p><p>4. 최신 트렌드의 운동화를 원하는 사람</p>
          </v-col>
        </v-row>
      </v-container>  
    </v-main>
    <v-footer color="primary" dark><div class="mx-auto">Copyright&copy;{{new Date().getFullYear()}}</div></v-footer>
  </v-app>
</template>
<style scoped>
.border-style{
  border:1px solid tomato;
  background-color: rgb(153,204,14);
}
</style>
<script>

export default {
  name: 'card',

  data: () => ({
    //
  }),
};
</script>

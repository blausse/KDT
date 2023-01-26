<template>
  <v-app>
<v-main>
  <v-container>
    <v-card max-width='400'>
      <v-img src="images/sky.jpg" aspect-ratio="2"></v-img>
      <v-card-text>
        <div>
          <h2 class="title primary--text mb-2">카드 UI</h2>
          <p class="mb-0">카드 디자인에 출력될 텍스트를 입력합니다</p>
        </div>
      </v-card-text>
      <v-card-actions>
      <v-btn color="ret white --text">확인</v-btn>
      <v-btn outlined color="red">취소</v-btn>
      <v-btn color="#9c27b0" dark>취소</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</v-main>
  </v-app>
</template>
<style>
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<template>
    <div>
        <h2>{{index? '글 수정' : '글 쓰기'}}</h2>
        
        <p>
            작성자 : <input v-model="writer" type="text" class="writer"/>
        </p>
        <p>
            제목 : <input v-model="title" type="text" class="title"/>
        </p>
        <p>
            내용 : <textarea v-model="content" class="content"></textarea>
        </p>
        <button v-if="!index" @click="create">작성하기</button>
        <button v-else @click="update">수정하기</button>
        <router-link to="/">go to home</router-link>
    </div>
</template>

<script>
import data from '@/data'
export default {
    name:'CreateComponent',
    data(){
        const index = this.$route.params.index
        return{
            data:data,
            writer: index ? data[index].writer : '',
            title:index ? data[index].title : '',
            content:index ? data[index].content : '',
            index:index
        }
    },
    component:{
        data
    },
    methods:{
        create(){
            this.data.push({writer:this.writer,title:this.title,content:this.content})
            this.$router.push({
                path:'/'
            })
        },
        update(){
            data[this.index].writer=this.writer,data[this.index].title=this.title,data[this.index].content=this.content
            this.$router.push({
                path:'/'
            })
        }
    }   
}
</script>

<template>
    <div>
        <table border="1">
            <tr v-for="(item,i) in data" :key="i" @click="go_detail(i)">
                <td>{{i}}</td>
                <td>{{item.writer}}</td>
                <td>{{item.title}}</td>
                <td>{{item.content}}</td>
            </tr>
        </table>
        <button @click="go_write">글쓰기</button>
        
    </div>
</template>
<script>
import data from '@/data'

export default {
    name:'ReadComponent',
    data(){
        return{
            data:data
        }
    },
    component:{
        data
    },
    methods:{
        go_write(){
            this.$router.push({
                path:"/create"
            })
        },
        delete_item(){
            this.data.splice()
        },
        go_detail(i){
            this.$router.push({
                name:'detail',
                params:{idx:i}
            })
        }
    }
}
</script>
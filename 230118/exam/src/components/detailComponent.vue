<template>
    <div>
         <p>{{data[index].writer}}</p>
         <p>{{data[index].title}}</p>
         <p>{{data[index].content}}</p>
         <p><button @click="updateData">update</button><button @click="deleteData">delete</button></p>
         <router-link to="/">hi</router-link>
    </div>
</template>


<script>
import data from '@/data'

export default({
    data() {
        return{
            data:data,
            index:this.$route.params.idx
        }
    },
    components:{},
    methods:{
        updateData(){
            this.$router.push({
                name:'create',
                params:{index:this.index}
            })
        },
        deleteData(){
            data.splice(this.index,1)
            this.$router.push({
                path:'/'
            })
        }
    }
})
</script>


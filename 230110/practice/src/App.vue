<template>
  <v-app>
<HelloWorld/>
    <v-main>
      <v-card>
        <v-list two-line v-for="item in aList" :key="item.id">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon :class="item.icon_style">{{item.icon_name}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey">></v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    aList:[
      {id:"introduce",name:"introduce",icon_name:"account_balance",icon_style:"red white--text"},
      {id:"images",name:"images",icon_name:"photo",icon_style:"green white--text"},
      {id:"promotion",name:"promotion",icon_name:"movie",icon_style:"yellow white--text"},
    ]
  }),
  methods:{

  }
};
</script>

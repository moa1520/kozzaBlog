<template>
    <v-app dark="dark">
        <v-navigation-drawer v-model="drawer" fixed app>
            <v-toolbar flat color="transparent">
                <v-toolbar-title>
                    Account
                </v-toolbar-title>
            </v-toolbar>
            <v-list>
              <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.icon"
                no-action
              >
                <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
                <v-list-tile
                  v-for="subItem in item.subItems"
                  :key="subItem.title"
                  :to="subItem.to"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon>{{ subItem.icon }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>KOZZA<span class="font-weight-thin">'S BLOG</span></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon="icon">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon="icon">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon="icon">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-cat',
          title: 'Home',
          active: true,
          subItems: [
            {
              title: 'dashboard',
              to: '/'
            },
            {
              title: 'About',
              to: '/about'
            }
          ]
        },
        {
          icon: 'mdi-donkey',
          title: 'Photos',
          subItems: [
            {
              title: 'card',
              to: '/photos/card'
            },
            {
              title: 'layout',
              to: '/photos/layout'
            }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>

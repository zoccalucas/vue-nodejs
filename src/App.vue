<template>
  <v-app>
    <div>
      <v-system-bar dark  app>
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>19:07</span>
      </v-system-bar>

      <v-card>
         <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            AF1
          </v-list-item-title>
          <v-list-item-subtitle>
            Dev Web - LAB
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      </v-card>

      <v-app-bar dense dark app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Home</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          >
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="text-h4 font-weight-thin mb-4">Aplicação Vuetify</h1>
                <h4 class="subheading">Desenvolvimento de Aplicaçãoes para WEB - Lab</h4>
              </v-col>
            </v-row>
          </v-parallax>
        </v-container>
      </v-main>

      <v-footer padless app>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>

      <v-bottom-navigation app :value="value" color="primary">
        <v-btn>
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      drawer: true,
      items: [
        { title: "My Account", icon: "mdi-account" },
        { title: 'Photos', icon: 'mdi-image' },
        { title: "Friends", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
};
</script>

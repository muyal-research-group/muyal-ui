// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar-store', {
  state:{side_menu_show:false},
  getters:{
    get_side_menu_show(){
      return this.side_menu_show;
    }
  },
  actions:{
    toggle_side_menu_show(){
      this.side_menu_show != this.side_menu_show
    },
    close(){
      this.side_menu_show=false
    },
    open(){
      this.side_menu_show=true
    }
  }

});

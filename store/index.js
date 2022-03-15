export const state = () => ({
  isLoging: false
})

export const mutations = {
  setLogin(state) {

    const userToken = localStorage.getItem("auth.token")
 
    if (userToken != null) {
      state.isLoging = true
      console.log('.................true from store..........'.state.isLoging)
    }
   
  }
}

export const actions = {

  getisLogin(context) {
    context.commit('setLogin')
  }
}

export const getters = {
  getApples: (state) => {
    return state.isLoging
  },
}
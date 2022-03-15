export const state = () => ({
    count:0,
    isLoging: false,
    profile:null,
    fullName:null,


  })
  export const mutations = {
    setLogin(state) {

        const userToken = localStorage.getItem("auth.token")
 
        if (userToken != null) {
          state.isLoging = true
          state.profile = localStorage.getItem("auth.profile")
          state.fullName = localStorage.getItem("auth.name")
          
        }
        else{
          state.isLoging = false
        
        }
       
      }
  }
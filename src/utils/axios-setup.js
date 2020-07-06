import axios from "axios"

let setup = {
  initSetup() {
    this.setBaseUrl()
    this.setDefaultHeader()
  },
  setBaseUrl() {
    axios.defaults.baseURL = "https://b8567e21d893.ngrok.io/api"
  },
  setDefaultHeader() {
    axios.defaults.headers.common["Accept"] = "application/json"
  }
}

export default setup

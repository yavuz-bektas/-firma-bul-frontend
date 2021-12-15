import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
const jwt = require("jsonwebtoken");
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalBarStatus: false,
    dangerAlerts: false,
    dangerAlertsText: [],
    userCreatedInfo: "",
    infoModel: false,
    userActive: "",
    compapnisListModadl: false,
    allFactory: [],
    deleteCompaniesModal: false,
    CompaniesListDetails: [],
    companiesListDetailsModal: false,
    editButtonModal: false,
    editButtonModalidNumber: "",
    ListDetailsModalsresponse: "",
  },
  mutations: {
    setmodalBarStatus(state) {
      state.modalBarStatus = true;
      setTimeout(() => {
        state.modalBarStatus = false;
      }, 5000);
    },
    setdangerAlertsText(state, post) {
      state.dangerAlertsText = post;
      state.dangerAlerts = true;
      setTimeout(() => {
        state.dangerAlerts = false;
      }, 3000);
    },
    setuserCreatedInfo(state, post) {
      state.userCreatedInfo = post;
    },
    setcompaniesListModal(state, post) {
      state.compapnisListModadl = post;
    },
    setdeleteCompaniesModal(state, post) {
      state.deleteCompaniesModal = post;
    },
    setAllCompaniesList(state, post) {
      state.allFactory = post;
    },
    setcompaniesListDetailsModal(state, post) {
      state.companiesListDetailsModal = post;
    },

    setAllCompaniesListDetails(state, post) {
      state.CompaniesListDetails = post;
    },
    seteditButtonModal(state, post) {
      state.editButtonModal = post;
      state.editButtonModalidNumber = post.id;
    },
    seteditButtonModalidNumber(state, post) {
      state.editButtonModalidNumber = post;
    },
    setListDetailsModalsresponse(state, post) {
      state.ListDetailsModalsresponse = post;
    },

    setinfoModel(state) {
      state.infoModel = true;

      setTimeout(() => {
        state.infoModel = false;
      }, 2000);
    },
  },
  actions: {
    register({ commit }, posts) {
      axios
        .post("http://3.16.214.155/api/signup/", {
          username: posts.name,
          email: posts.email,
          password: posts.password,
        })
        .then((response) => {
          commit("setuserCreatedInfo", response.data.user);
          commit("setmodalBarStatus");
        })
        .catch((err) => {
          commit("setdangerAlertsText", err.response.data.msg);
        });
    },
    login({ commit }, posts) {
      axios
        .post("http://3.16.214.155/api/signin/", {
          email: posts.email,
          password: posts.password,
        })
        .then((res) => {
          const tokenResult = jwt.verify(res.data.token, "secretkey");
          if (res.status === 200 && tokenResult.userActive === true) {
            Cookies.set("token", res.data.token, { expires: 1 });
            router.push("/dashboard");
          } else {
            commit("setinfoModel");
          }
        })
        .catch((err) => {
          commit("setdangerAlertsText", err.response.data.msg);
        });
    },
    async getCompaniesList({ commit }) {
      await axios
        .get("http://localhost:3060/getallfactory")
        .then((res) => {
          commit("setAllCompaniesList", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getCompaniesListDetails({ commit }, posts) {
      await axios
        .post("http://localhost:3060/findfactoriesbyname", {
          factoryname: posts,
        })
        .then((res) => {
          commit("setAllCompaniesListDetails", res.data);
        })

        .catch((err) => console.log(err));
    },
    async ListDetailsModals({ commit }, payload) {
      await axios
        .post("http://localhost:3060/findfactoriesbywithid", {
          id: payload,
        })
        .then((res) => {
          commit("setListDetailsModalsresponse", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
  getters: {
    isAuthenticated(state) {
      return state.userActive !== "";
    },
  },
});

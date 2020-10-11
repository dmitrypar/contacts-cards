export const getAPI = {
  baseURL: "https://reqres.in/api/users",
  endSlashURL: "/",

  getUsersListAPI(selectedPage) {
    const endPageURL = "?page=";
    return fetch(this.baseURL + endPageURL + selectedPage);
  },

  getCurrentUserInfo(id) {
    return fetch(this.baseURL + this.endSlashURL + id);
  },

  editCurrentUserData(currentUserId, selectMethod, editedUserData) {
    const param = {
      method: selectMethod,
      body: JSON.stringify(editedUserData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    return fetch(this.baseURL + this.endSlashURL + currentUserId, param);
  },

  deleteCurrentUser(id) {
    const param = {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    return fetch(this.baseURL + this.endSlashURL + id, param);
  },
};

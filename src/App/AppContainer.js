import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  setData,
  onPageSelected,
  loadCurrentUser,
  cleanUserData,
} from "./../actions/index";
import App from "./App";
import { getAPI } from "./../API/api";
import { paginator } from "../Components/paginator";

const AppContainer = ({
  isloadingData,
  loadedUsersList,
  setData,
  totalUsersCount,
  userPerPageCount,
  selectedPageNumber,
  onPageSelected,
  loadCurrentUser,
  loadedCurrentUserData,
  cleanUserData,
}) => {
  const [isLoading, setisLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPage, setselectedPage] = useState(selectedPageNumber);
  const [selectMethod, setSelectMethod] = useState("PUT");
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    if (!isloadingData) {
      return;
    }
    setisLoading(true);
    getAPI
      .getUsersListAPI(selectedPage)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, [isLoading, isloadingData, setData, selectedPage]);

  // set selected page
  const onPageSelectedHandler = (id) => {
    onPageSelected(id);
    setselectedPage(id);
  };

  // cretate Arr for pagination
  const pages = paginator(totalUsersCount, userPerPageCount);

  const onUserButtonClick = (id) => {
    setIsModalOpen(true);
    setCurrentUserId(id);
    setSelectMethod("PUT");

    getAPI
      .getCurrentUserInfo(id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        loadCurrentUser(res);
      })
      .catch((err) => console.log(err));
  };

  const editUserDataSender = (
    { firstNameChanged, lastNameChanged, emailChanged, avatarLink },
    id
  ) => {
    const editedUserData = {
      first_name: firstNameChanged,
      last_name: lastNameChanged,
      email: emailChanged,
      avatar: avatarLink,
    };
    getAPI
      .editCurrentUserData(currentUserId, selectMethod, editedUserData)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  };

  const deleteButtonHandler = (id) => {
    console.log("delete", loadedUsersList.first_name);
    getAPI
      .deleteCurrentUser(id)
      .then((res) => {
        return res.text();
      })
      .catch((err) => console.log(err));
  };

  const onNewUserBtnClick = () => {
    setSelectMethod("POST");
    setCurrentUserId("");
    setIsModalOpen(true);
    cleanUserData();
  };

  return (
    <App
      selectedPageNumber={selectedPageNumber}
      loadedUsersList={loadedUsersList}
      pages={pages}
      onPageSelectedHandler={onPageSelectedHandler}
      onUserButtonClick={onUserButtonClick}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      loadedCurrentUserData={loadedCurrentUserData}
      editUserDataSender={editUserDataSender}
      deleteButtonHandler={deleteButtonHandler}
      onNewUserBtnClick={onNewUserBtnClick}
    />
  );
};

const mapStateToProps = ({ data, currentUser }) => ({
  loadedUsersList: data.loadedData,
  isloadingData: data.isloadingData,
  userPerPageCount: data.userPerPageCount,
  totalPagesCount: data.totalPagesCount,
  totalUsersCount: data.totalUsersCount,
  selectedPageNumber: data.selectedPageNumber,
  loadedCurrentUserData: currentUser.currentUserData,
});

export default connect(mapStateToProps, {
  setData,
  onPageSelected,
  loadCurrentUser,
  cleanUserData,
})(AppContainer);

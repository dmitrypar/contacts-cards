import React from "react";
import "./../sass/style.scss";
import ModalInfo from "../Components/ModalInfo";

function App({
  selectedPageNumber,
  loadedUsersList,
  pages,
  onPageSelectedHandler,
  onUserButtonClick,
  isModalOpen,
  setIsModalOpen,
  loadedCurrentUserData,
  editUserDataSender,
  deleteButtonHandler,
  onNewUserBtnClick,
}) {
  const newUserId = 9999;
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {loadedUsersList.map((cart) => {
            return (
              <div
                className="col-md-4 col-sm-6 col-xs-12 loadedcarts "
                key={cart.email}
              >
                <button
                  type="button"
                  className="btn"
                  onClick={() => onUserButtonClick(cart.id)}
                >
                  <img src={cart.avatar} alt="avatar" />
                </button>
                {loadedCurrentUserData.id === cart.id ||
                loadedCurrentUserData.id === newUserId ? (
                  <ModalInfo
                    loadedCurrentUserData={loadedCurrentUserData}
                    isOpen={isModalOpen}
                    editUserDataSender={editUserDataSender}
                    deleteButtonHandler={deleteButtonHandler}
                    newUserId={newUserId}
                    onClose={() => setIsModalOpen(false)}
                  >
                    NewModal
                  </ModalInfo>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col fornewcart">
            <button
              type="button"
              className="btn btn-primary addUserBtn"
              onClick={onNewUserBtnClick}
            >
              <span className="plus" role="img" aria-label="plus">
                &#43;
              </span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col paginator">
            {pages.map((p) => {
              return (
                <span
                  key={p}
                  onClick={() => onPageSelectedHandler(p)}
                  className={p === selectedPageNumber ? "selectedPage" : ""}
                >
                  {p}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

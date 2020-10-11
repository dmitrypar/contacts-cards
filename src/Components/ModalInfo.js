import React, { useState } from "react";
import ReactDom from "react-dom";

const ModalInfo = ({
  isOpen,
  onClose,
  loadedCurrentUserData,
  editUserDataSender,
  deleteButtonHandler,
  newUserId,
}) => {
  const { email, avatar, first_name, last_name, id } = loadedCurrentUserData;
  const [firstNameChanged, setfirstNameChanged] = useState(first_name);
  const [lastNameChanged, setLastNameChanged] = useState(last_name);
  const [emailChanged, setEmailChanged] = useState(email);
  const [avatarLink, setAvatarLink] = useState(avatar);

  const saveButtonHandler = () => {
    editUserDataSender(
      { firstNameChanged, lastNameChanged, emailChanged, avatarLink },
      id
    );
  };
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div className="modalSkin" />
      <div className="modalContainer" tabIndex="1">
        <div className="modalWraper">
          <div className="modalTop">
            <div className="closeBtn">
              <button onClick={onClose}>
                <div className="xrest">&#10006;</div>
              </button>
            </div>
            <div className="modalContent">
              <form className="modalContentGroupe">
                <div className="modalAvatar">
                  {id !== newUserId ? (
                    <img src={avatar} alt="avatar" />
                  ) : (
                    <div className="yourAvatar">
                      <span role="img" aria-label="smile">
                        &#128578;
                      </span>
                    </div>
                  )}
                </div>
                <div className="modalInput">
                  <div className="avatar input">
                    <input
                      type="text"
                      defaultValue={avatar}
                      onChange={(e) => {
                        setAvatarLink(e.target.value);
                      }}
                    />
                    <span className="labelInput">avatar link</span>
                  </div>
                  <div className="firstName input">
                    <input
                      type="text"
                      defaultValue={first_name}
                      onChange={(e) => {
                        setfirstNameChanged(e.target.value);
                      }}
                    />
                    <span className="labelInput">first name</span>
                  </div>
                  <div className="lastName input">
                    <input
                      type="text"
                      defaultValue={last_name}
                      onChange={(e) => {
                        setLastNameChanged(e.target.value);
                      }}
                    />
                    <span className="labelInput">last name</span>
                  </div>
                  <div className="email input">
                    <input
                      type="text"
                      defaultValue={email}
                      onChange={(e) => {
                        setEmailChanged(e.target.value);
                      }}
                    />
                    <span className="labelInput">email</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modalButtons">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => deleteButtonHandler(id)}
            >
              Удалить
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={() => saveButtonHandler(id)}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalInfo;

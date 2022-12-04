import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logo from "../img/logo.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import "./modal.scss";
import "./login.css";
export default function Login({ text }) {
  return (
    <div>
      <a
        className="header_login"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {text}
      </a>
      {/* modal */}

      {/* <div className="login-modal-container">
        <div className="login-modal">
          <div className="login-modal--header">
            <img src={logo} alt="logo" />
            <div>
              <ClearIcon />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img className="imgLogoofModal" src={logo} alt="logo" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>Great have you back!</h4>
              <form className="modal--inner">
                <div className="text--input mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username or email *
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    required
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="text--input mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="form-control "
                    required
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn submit-btn">
                  Sign in to your accaunt
                </button>
              </form>
              <div className="login-hr d-flex">
                <div className="hr-line"></div>
                <div>Or Login with</div>
                <div className="hr-line"></div>
              </div>
              <div className="socials d-flex">
                <div className="social__item">
                  <BsFacebook />
                  Facebook
                </div>
                <div className="social__item2">
                  <FcGoogle />
                  Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

import React, { useState } from "react";

const PasswordModal = ({ isOpen, handleClick, onSubmit }) => {
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);

  if (!isOpen) return null; // Close modal if isOpen is false

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClick();
      setPassword("");
      setPassError(false);
    }
  };

  const handlePasswordChange = (e) => {
    if (passError) setPassError(false);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length === 0) {
      setPassError(true);
      return;
    }
    if (password === "blu@2023#sevenstar") {
      onSubmit();
    } else setPassError(true);
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div
        data-aos="zoom-in-up"
        className="relative bg-sky-50 rounded-3xl shadow-lg max-w-lg mx-4 sm:mx-8 md:mx-auto p-4 sm:p-8 border-4 border-transparent"
      >
        <h2 className="from-neutral-900 text-2xl font-semibold">
          Are You Sure ?
        </h2>

        <p className="mb-4">
          You are about to
          <span className="text-red-500 font-semibold"> DELETE</span> this
          blocked room.
        </p>

        <div className="flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirmation Password"
              />
              {passError && (
                <p className="text-red-500 text-xs italic mt-1">
                  Password is incorrect.
                </p>
              )}
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
              <button
                onClick={() => {
                  handleClick();
                  setPassword("");
                  setPassError(false);
                }}
                type="submit"
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                disabled={password.length <= 0}
                type="submit"
                className={`${
                  password.length <= 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-700"
                } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PasswordModal);

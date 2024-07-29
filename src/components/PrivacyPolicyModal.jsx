import React from "react";
import ReactDOM from "react-dom";

const PrivacyPolicyModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          Your privacy policy content goes here. You can include detailed information about how user data is collected, used, and protected.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default PrivacyPolicyModal;

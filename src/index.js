import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import ChatBox from "./ChatBox";
import PrintBtn from "./PrintBtn";
// import registerServiceWorker from "./registerServiceWorker";

// const appElement = document.getElementById("root");

const appElement = document.getElementById("printBtn");
let f_sapNotiNo = false;
let f_sapOrNo = false;
let f_sapNotiStatus = false;
let f_sapOrStatus = false;
if (document.getElementById("f_sapNotiNo")) {
	f_sapNotiNo = document.getElementById("f_sapNotiNo").value;
	f_sapOrNo = document.getElementById("f_sapOrNo").value;
	f_sapNotiStatus = document.getElementById("f_sapNotiStatus").value;
	f_sapOrStatus = document.getElementById("f_sapOrStatus").value;
	f_sapNotiNo =
		f_sapNotiNo !== null && f_sapNotiNo !== "" && f_sapNotiNo !== undefined;
	f_sapOrNo = f_sapOrNo !== null && f_sapOrNo !== "" && f_sapOrNo !== undefined;
	f_sapNotiStatus =
		f_sapNotiStatus !== null &&
		f_sapNotiStatus !== "" &&
		f_sapNotiStatus !== undefined;
	f_sapOrStatus =
		f_sapOrStatus !== null &&
		f_sapOrStatus !== "" &&
		f_sapOrStatus !== undefined;
}
if (
	appElement &&
	f_sapNotiNo &&
	f_sapOrNo &&
	f_sapNotiStatus &&
	f_sapOrStatus
) {
	ReactDOM.render(<PrintBtn />, appElement);
}
if (module.hot) {
	module.hot.accept("./ChatBox", () => {
		ReactDOM.render(<PrintBtn />, appElement);
	});
}
// registerServiceWorker();

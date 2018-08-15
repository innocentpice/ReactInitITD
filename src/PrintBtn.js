import React from "react";
import html2canvas from "html2canvas/dist/html2canvas.min";

const PrintBtn = () => {
	const printHandler = () => {
		const KEY_CODE = document.querySelector("#key").value;
		let DOC = document.querySelector("#tabNotification.active");
		let DOC_HEIGHT = 1000;
		if (!DOC) {
			DOC = document.querySelector("#tabAssess.active");
			DOC_HEIGHT = 1000;
		}
		html2canvas(DOC, {
			width: 2480,
			height: DOC_HEIGHT,
			windowWidth: 800,
			windowHeight: 600,
			removeContainer: false,
			async: false
		}).then(canvas => {
			const imgURL = canvas.toDataURL("image/png");
			const printWindow = window.open("", "_blank");
			printWindow.document.write(
				"<html><head><title>" +
					KEY_CODE +
					"</title></head><body><img src ='" +
					imgURL +
					"'></body><script>setTimeout(()=>{window.print();window.close();},10)</script></html>"
			);
		});
	};
	return (
		<button onClick={printHandler} className="btn btn-default closeBtt  btn-sm">
			<strong>Print PDF</strong>
		</button>
	);
};
export default PrintBtn;

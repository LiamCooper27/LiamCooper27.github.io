function btnChange(button) {
	var btnOne = document.getElementById(button.id);
	if (btnOne.innerText == "See More >") {
		btnOne.innerText = 'See Less <'
	} else {
		btnOne.innerText = 'See More >';
	}
}

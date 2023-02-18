(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		video: document.querySelector("[data-modal-video]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		const src = refs.video.hasAttribute("src");

		if (src === false) {
			refs.video.setAttribute(
				"src",
				`https://video.wixstatic.com/video/9aa138_e2bcbffd9deb4c9f9bca4e82a1cbbc99/1080p/mp4/file.mp4`
			);
		} else {
			refs.video.removeAttribute("src");
		}
	}
})();

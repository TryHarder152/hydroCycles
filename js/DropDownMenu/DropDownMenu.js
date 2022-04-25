export default class DropDownMenu {
  constructor(dropDownMenuBtn, dropDownMenuContent) {
    this.dropDownMenuBtn = document.querySelectorAll(dropDownMenuBtn);
    this.dropDownMenuContent = document.querySelectorAll(dropDownMenuContent);
  }

  renderContent() {
    this.dropDownMenuBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('rotate90Degree');
        this.dropDownMenuContent[index].classList.toggle('active');
      });
    });
  }
}
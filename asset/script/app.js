const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
  modal.classList.add("open");
}
// Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function hiddenBuyTickets() {
  modal.classList.remove("open");
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
// Nghe hành vi click vào button close
modalClose.addEventListener("click", hiddenBuyTickets);

modal.addEventListener("click", hiddenBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Responsive menu mobile
var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

// Đóng/mở menu mobile
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tự động đóng menu khi chọn
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

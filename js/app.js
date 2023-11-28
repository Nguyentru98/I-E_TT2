// menu
function scrollingMenu(menuClass) {
  const sectionMenu = document.querySelector(menuClass); // biến lưu trữ phần tử có class đc truyền vào
  window.scrollTo({
    //hàm cuộn
    top: sectionMenu.offsetTop, // đặt vị trí top của class
    behavior: "smooth", // hành động làm mượt
  });
}

// nut back to top
function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// show nút back top
var lastScrollTop = 0;
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  var backToTopButton = document.querySelector(".back-to-top");
  var scrollTop = document.documentElement.scrollTop; // lấy vtri cuộn hiện tại
  console.log("scrollTop", scrollTop);
  if (scrollTop > 20 && scrollTop > lastScrollTop) {
    // Kiểm tra nếu vị trí của trang lớn hơn 20 pixel và trang đang cuộn hoặc đứng im
    backToTopButton.style.display = "block";
    console.log("lastScrollTop", lastScrollTop);
  } else {
    backToTopButton.style.display = "none";
  }
  // Cập nhật trạng thái cuộn trước đó
  lastScrollTop = scrollTop;
}

// animate scroll timeline
window.addEventListener("scroll", timeline);
function timeline() {
  var timelines = document.querySelectorAll(".timeline-box");
  for (var i = 0; i < timelines.length; i++) {
    var windowHeight = window.innerHeight; // chieu cao cua view port
    var elementTop = timelines[i].getBoundingClientRect().top; // đỉnh viewport đến top element
    var elementVisible = 150; // khoảng nhìn thấy element
    // console.log(
    //   "windowHeigh",windowHeight,
    //   "elementTop",elementTop,
    //   "elementVisible",elementVisible,
    //   elementTop < windowHeight - elementVisible,
    // );
    if (elementTop < windowHeight - elementVisible) {
      timelines[i].classList.add("active");
    }
  }
}

// menu mobile
function toggleSidebar() {
  var element = document.getElementById("sidebar");
  element.classList.toggle("toogle");
}

// xem thêm
function seeMore() {
  var hidden = document.getElementById("hidden");
  var dot = document.getElementById("dot");
  var button = document.getElementById("button-hidden-presently");
  var hiddenDisplayStyle = window.getComputedStyle(hidden).display;

  if (hiddenDisplayStyle === "none") {
      hidden.style.display = "inline";
      dot.style.display = "none";
      button.innerHTML = "ẩn bớt";
  } else {
      hidden.style.display = "none";
      dot.style.display = "inline";
      button.innerHTML = "xem thêm";
  }
}


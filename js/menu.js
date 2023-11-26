// menu
function scrollingMenu(menuClass) {
  const sectionMenu = document.querySelector(menuClass); // biến lưu trữ phần tử có class đc truyền vào
  window.scrollTo({
    //hàm cuộn
    top: sectionMenu.offsetTop, // đặt vị trí top của class
    behavior: "smooth", // hành động làm mượt
  });
}

// nut back top
function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// show nút back top
var lastScrollTop = 0;
window.addEventListener("scroll", handleScroll);

function handleScroll() {
  var backToTopButton = document.querySelector(".back-to-top"); // Lấy vị trí cuộn hiện tại
  var scrollTop = window.scrollY || document.documentElement.scrollTop; // Kiểm tra nếu vị trí của trang lớn hơn 20 pixel và trang đang cuộn hoặc đứng im
  if ((scrollTop > 20 || lastScrollTop === 0) && scrollTop > lastScrollTop) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }

  // Cập nhật trạng thái cuộn trước đó
  lastScrollTop = scrollTop;
}

// animate scroll
function timeline() {
  var timelines = document.querySelectorAll(".timeline-box");
  for (var i = 0; i < timelines.length; i++) {
    var windowHeight = window.innerHeight; // chieu cao cua window
    var elementTop = timelines[i].getBoundingClientRect().top;
    var elementVisible = 150;
    // console.log(
    //   elementTop,
    //   windowHeight,
    //   elementVisible,
    //   elementTop < windowHeight - elementVisible,
    //   timelines[i]
    // );

    if (elementTop < windowHeight - elementVisible) {
      timelines[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", timeline);

function toggleSidebar() {
  var element = document.getElementById("sidebar");
  if (element.classList.contains("toogle")) {
    element.classList.remove("toogle");
  } else {
    element.classList.add("toogle");
  }
}

// xem thêm

function seeMore() {
  var dot = document.getElementById("dot");
  var paragraph = document.querySelector(".paragraph");
  var buttonHome = document.getElementById("button-home");
  
      paragraph.classList.remove("paragraph");
      dot.style.display = "none";
      buttonHome.style.display = "none";
}

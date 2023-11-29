// timeline
let data = [
  {
    name: "Thử thách số 0",
    time: "6/11-10/11/2023",
    tittle: "Xây dựng giao diện trang web Khoa Tiếng Italia (HANU)",
    url:"https://ie-tt1.netlify.app/"
  },
  {
    name: "Thử thách số 1",
    time: "13/11-17/11/2023",
    tittle: "Lập một website giới thiệu bản thân (portfolio)",
    url:"https://trunv.thuctap.inevn.com/TT-02/index.html"
  },
  {
    name: "Thử thách số 2",
    time: "30/11-05/12/2023",
    tittle: "Xây dựng giao diện trang web giới thiệu về lịch sử việt nam",
    url:"#"
  },
  {
    name: "Thử thách số 3",
    time: "00/00-00/12/2023",
    tittle: "Thiết kế 6 giao diện theo chuẩn code của công cty",
    url:"#"
  },
  {
    name: "Thử thách số 4",
    time: "00/00-00/12/2023",
    tittle: "Tự lập bản tài liệu hướng dẫn cơ bản nhập môn HTML/CSS, JS trên nền web",
    url:"#"
  },
  {
    name: "Thử thách số 5",
    time: "00/00-00/12/2023",
    tittle: "Sử dụng HTML/CSS , js viết một mini game theo hình thức bốc thăm",
    url:"#"
  },
  {
    name: "Thử thách số 6",
    time: "00/00-00/12/2023",
    tittle: "Sử dụng INEVO để thiết kế một website động lấy dữ liệu thực tế từ INEVO theo thiết kế",
    url:"#"
  },
  {
    name: "Thử thách số 7",
    time: "00/00-00/12/2023",
    tittle: "Bổ sung đầy đủ các trang con ở thử thách 6 ,triển khai 2 website mới theo mẫu",
    url:"#"
  },
];
let newarr = data.map(function (data1,index) {
    if (index % 2 === 0) {
        return `<div class="timeline-box left-timeline">
          <div class="text-box">
            <h3>${data1.name}</h3>
            <small>${data1.time}</small>
            <a href="${data1.url}">${data1.tittle}</a>
          </div>
        </div>`;
      } else {
        return `<div class="timeline-box right-timeline">
          <div class="text-box">
            <h3>${data1.name}</h3>
            <small>${data1.time}</small>
            <a href="${data1.url}">${data1.tittle}</a>
          </div>
        </div>`;
      }
});
let element = document.querySelector(".timeline");
element.innerHTML = newarr.join("");

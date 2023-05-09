import React, { useState } from "react";
import "./HomeMovie.scss";

export default function HomeMovie(props) {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div className="">
      <div className="extra-content">
        <div className="row mt-3 mb-3">
          <div className="col-12 col-lg-6 mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">
                [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                Antebellum: Bẫy Thực Tại Kinh Hoàng
              </h3>
              <p className="text-sm text-white">
                Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
                mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham
                gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn
                tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do
                khác khiến người yêu phim không thể bỏ lỡ Ante
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">30</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">1</span>
            </div>
          </div>
          <div className="col-12 col-lg-6  mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">
                Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
              </h3>
              <p className="text-sm text-white">
                Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên
                Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra
                trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng
                hàng loạt đại cảnh cháy nổ hoành tráng.
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">20</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">2</span>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-4 mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">
                Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
                Nolan{" "}
              </h3>
              <p className="text-sm text-white">
                Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái
                tên Christopher Nolan, được biết tới như một trong những đạo
                diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">25</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">1</span>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">
                Truy Cùng Giết Tận - Cuộc tái ngộ của hai ông hoàng phòng vé xứ
                Hàn
              </h3>
              <p className="text-sm text-white">
                Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68
                triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới
                tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành
                động siêu “nặng đô”.
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">30</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">1</span>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-4">
            <div className="flex mb-2">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám
                nhất Hollywood
              </div>
            </div>
            <div className="flex mb-2">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2020/07/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988694730.png"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu
              </div>
            </div>
            <div className="flex mb-2">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                [123Phim] NHẬP MÃ PSM30K - Giảm ngay 30k khi đặt vé Pháp Sư Mù:
                Ai Chết Giơ Tay
              </div>
            </div>
            <div className="flex">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2020/07/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331601790.png"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                Pinocchio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const extraContent1 = (
    <div className="">
      <div className="extra-content">
        <div className="row mt-3 mb-3">
          <div className="col-12 col-lg-6  mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">BHD 59K/VÉ CẢ TUẦN !!!</h3>
              <p className="text-sm text-white">
                Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">30</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">1</span>
            </div>
          </div>
          <div className="col-12 col-lg-6  mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h3>
              <p className="text-sm text-white">
                Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
                voucher thanh toán ZaloPay thả ga.
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">20</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">2</span>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-lg-4 mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">
                ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX{" "}
              </h3>
              <p className="text-sm text-white">
                ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ
                với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX..
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">25</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">1</span>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-3">
            <img
              className="rounded mb-2"
              src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
              alt="..."
            />
            <div>
              <h3 className="text-white text-xl ">
                BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
              </h3>
              <p className="text-sm text-white">
                Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                Vé Phim trên ZaloPay.
              </p>
            </div>
            <div className="flex">
              <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
              <span className="text-white ml-2 text-xl">30</span>
              <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
              <span className="text-white ml-2 text-xl">1</span>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="flex mb-2">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                Beta Cineplex trở lại với hàng loạt ưu đãi lớn
              </div>
            </div>
            <div className="flex mb-2">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai
                Yêu Quái
              </div>
            </div>
            <div className="flex mb-2">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                [123Phim] NHẬP MÃ PSM30K - Giảm ngay 30k khi đặt vé Pháp Sư Mù:
                Ai Chết Giơ Tay
              </div>
            </div>
            <div className="flex">
              <img
                className="rounded"
                style={{ height: "80px", width: "70px" }}
                src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                alt="..."
              />
              <div className="text-white text-xl ml-2">
                [Mega GS] Một đoá hoa thay ngàn lời yêu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const linkName = readMore ? "Hide... " : "Read More... ";
  return (
    <div className="layout">
      <input
        name="nav"
        type="radio"
        className="nav home-radio"
        id="home"
        defaultChecked="checked"
      />
      <div className="page home-page">
        <div className="page-contents">
          <div className="w-full mt-5">
            <div
              style={{ width: "110px", display: "block", margin: "auto" }}
              className="cursor-pointer text-center text-base bg-purple-600 hover:bg-purple-800 py-2 rounded "
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h2>{linkName}</h2>
            </div>
            {readMore && extraContent}
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-12 col-lg-6 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">
                  TENET công bố ngày khởi chiếu chính thức tại Việt Nam
                </h3>
                <p className="text-sm text-white">
                  Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                  báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các
                  thị trường bê...
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">30</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">1</span>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2020/05/quang-tuan-thuong-tu-ky-tren-phim-truong-de-tap-trung-dien-vai-toi-pham-15906671009175.png"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">
                  Quang Tuấn thường tự kỷ trên phim trường để tập trung diễn vai
                  tội phạm
                </h3>
                <p className="text-sm text-white">
                  Quang Tuấn thường tự kỷ trên phim trường để tập trung diễn vai
                  tội phạmdiện trên màn ảnh, Quang Tuấn mang đến một hình ảnh
                  hoàn toàn khác với nhân vật tên tội phạm biến thái có vỏ bọc
                  tri thức.
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">20</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">2</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">
                  PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                  màn trả thù
                </h3>
                <p className="text-sm text-white">
                  Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                  mục nữ chính xuất sắc nhất cho vai diễn đẫm máu nhất sự nghiệp
                  của cô trong phim
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">25</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">1</span>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">
                  VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM "BÀN TAY DIỆT
                  QUỶ"
                </h3>
                <p className="text-sm text-white">
                  Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                  năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                  Sik, tác phẩm kinh dị – hành
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">30</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">1</span>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <div className="flex mb-2">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé
                </div>
              </div>
              <div className="flex mb-2">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  [123Phim] Bạn Là Fan Cứng Marvel?
                </div>
              </div>
              <div className="flex mb-2">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  [Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui
                </div>
              </div>
              <div className="flex">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label className="nav" htmlFor="home">
        <span className="text-xl font-bold">MOVIE 24H</span>
      </label>
      <input name="nav" type="radio" className="about-radio" id="about" />
      <div className="page about-page">
        <div className="page-contents">
          <div className="w-full ">
            <div
              style={{ width: "110px", display: "block", margin: "auto" }}
              className="cursor-pointer text-center text-base bg-purple-600 hover:bg-purple-800 py-2 rounded "
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h2>{linkName}</h2>
            </div>
            {readMore && extraContent1}
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-12 col-lg-6 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">
                  [123Phim] NHẬP MÃ BKT - Giảm ngay 20k khi đặt vé Bắc Kim Thang
                </h3>
                <p className="text-sm text-white">
                  123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch
                  khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">30</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">1</span>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">Sinh Nhật Mega GS</h3>
                <p className="text-sm text-white">
                  Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta
                  lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">20</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">2</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">
                  [123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa
                </h3>
                <p className="text-sm text-white">
                  Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">25</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">1</span>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="rounded mb-2"
                src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg"
                alt="..."
              />
              <div>
                <h3 className="text-white text-xl ">
                  [Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng
                </h3>
                <p className="text-sm text-white">
                  Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng
                  các Stars Hà Nội loạt phần quà siêu hấp dẫn.
                </p>
              </div>
              <div className="flex">
                <i class="fa fa-thumbs-up text-white text-xl"></i>{" "}
                <span className="text-white ml-2 text-xl">30</span>
                <i class="fa fa-comment-alt text-white text-xl ml-4"></i>{" "}
                <span className="text-white ml-2 text-xl">1</span>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="flex mb-2">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé
                </div>
              </div>
              <div className="flex mb-2">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  [123Phim] Bạn Là Fan Cứng Marvel?
                </div>
              </div>
              <div className="flex mb-2">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  [Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui
                </div>
              </div>
              <div className="flex">
                <img
                  className="rounded"
                  style={{ height: "80px", width: "70px" }}
                  src="https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg"
                  alt="..."
                />
                <div className="text-white text-xl ml-2">
                  Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label className="nav" htmlFor="about">
        <span className="text-xl font-bold">DISCOUNT</span>
      </label>
    </div>
  );
}

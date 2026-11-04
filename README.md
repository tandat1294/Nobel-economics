# Nobel Economics — GitHub Pages production export

Bản xuất từ production Sites v8, commit `e845a4cac7000cf344bcf665ceba811cd874c756`. Repository đích: **Nobel-economics**. Website là HTML/CSS/JavaScript thuần; không cần Node, backend, API, tài khoản Sites hoặc bước build.

## Đưa lên GitHub

1. Tạo repository public tên chính xác `Nobel-economics`.
2. Giải nén ZIP. Đưa **toàn bộ nội dung bên trong** lên gốc repository, sao cho `index.html`, `cases/` và `assets/` ở ngay root; không bọc thêm một thư mục `Nobel-economics/` bên ngoài. Giữ file `.nojekyll` đi kèm.
3. Commit lên nhánh `main`.
4. Vào **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → /(root) → Save**.
5. Khi GitHub báo triển khai thành công, mở đường dẫn do Pages cung cấp; thường là `https://TEN-TAI-KHOAN.github.io/Nobel-economics/`.

Nếu GitHub không hiển thị file `.nojekyll` khi kéo thả, dùng **Add file → Create new file**, đặt tên `.nojekyll`, để trống nội dung rồi commit. Không upload nguyên ZIP làm nội dung website.

Tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Phạm vi điều chỉnh so với Sites v8

- Bảy file HTML: thay stylesheet Google Fonts bằng `assets/fonts.css` local; các case dùng `../assets/fonts.css`.
- Bốn file case: chỉ đổi `img src` thành tài nguyên portrait local. Nội dung, paragraph, chương, Deep Dive, Finance Lens, credits và Source Notes giữ nguyên.
- `index.html`: bỏ duy nhất nhãn kỹ thuật cũ `ARCHITECTURE STRESS TEST v0.6` ở footer; title đã duyệt giữ nguyên. Homepage/timeline không đổi khác.
- `404.html`: thêm `<base href="/Nobel-economics/">` để CSS/JS/link về homepage đúng cả khi người đọc mở một URL con không tồn tại. Nếu đổi tên repository, cập nhật giá trị này.
- `assets/site.css`, `assets/site.js`, `assets/medal.webp`: giống từng byte với production v8. Không thay Golden Template v1 hoặc shared reader.
- File mới: `.nojekyll`, fonts local kèm ba giấy phép, sáu ảnh portrait local, `ASSET-PROVENANCE.md`, `EXPORT-MANIFEST.json`, `SHA256SUMS.txt` và README này.
- Không đưa cấu hình hosting riêng của Sites, Git history, credentials, preview HTML hoặc tài liệu triển khai cũ vào ZIP. Không tạo/sửa/publish phiên bản Sites nào trong tác vụ xuất này.

## Kiểm tra

- Đã đối chiếu toàn bộ body HTML: giống bản đã duyệt sau khi loại trừ các thay đổi URL ảnh và nhãn kỹ thuật footer nêu trên.
- Bốn case đều giữ sáu chương; homepage dẫn tới đủ bốn case; chuỗi 1981 → 1982 → 1983 → 1990 và liên kết ngược giữ nguyên.
- Tất cả CSS, JS, fonts, medal và portraits tải từ chính bản xuất; không có hostname Sites hoặc tài nguyên runtime Sites. Các liên kết tài liệu nguồn bên ngoài vẫn được giữ nguyên.
- Đã kiểm tra đường dẫn nội bộ và fragment dưới `/Nobel-economics/`, bao gồm trang 404 ở URL con; danh mục và checksums nằm trong file đi kèm.
- Không có API key, private key, bearer token, credential hoặc file môi trường. Website không dùng API/backend.
- Không có placeholder/nhãn preview trong giao diện. Selector CSS cũ `.portrait-placeholder` không được phần tử HTML nào sử dụng; CSS vẫn giữ nguyên theo yêu cầu.
- Tình trạng có sẵn từ production: read time Case 1983 bị ẩn trên màn hình ≤420px; bản xuất giữ nguyên để không đổi shared reader. Dark/Light, TOC, reading progress, Deep Dive dùng cùng mã nguồn production.
- Đã mở thử cả bảy trang ở viewport 1440px và 390px dưới `/Nobel-economics/`: ảnh/fonts local tải đủ, không tràn ngang; homepage mở đúng bốn case; chuỗi đọc 1981 → 1982 → 1983 → 1990 hoạt động; Light/Dark, Deep Dive bằng bàn phím, active section và reading progress hoạt động.
- Chưa thực hiện deploy lên GitHub: cần người dùng bật Pages cho repository. Các URL nguồn học thuật ngoài website không thuộc gói offline và có thể thay đổi ở phía nhà cung cấp.

## Quyền sử dụng tài nguyên

Giữ đầy đủ `credits.html` và Source Notes khi triển khai. Xem `ASSET-PROVENANCE.md` và ba giấy phép fonts trong `assets/fonts/licenses/`. Ảnh University of Chicago phục vụ giáo dục/học thuật kèm ghi công; điều kiện dùng thương mại theo chính sách kho ảnh đã liên kết. Không mặc định toàn bộ ảnh là public domain hoặc cấp lại giấy phép cho nội dung editorial.

## Cấu trúc đầy đủ

| Đường dẫn trong repository | Kích thước byte |
| --- | ---: |
| `.nojekyll` | 0 |
| `404.html` | 1147 |
| `ASSET-PROVENANCE.md` | 1518 |
| `EXPORT-MANIFEST.json` | 9409 |
| `README.md` | — |
| `SHA256SUMS.txt` | — |
| `assets/fonts/fraunces-01.woff2` | 19700 |
| `assets/fonts/fraunces-02.woff2` | 59388 |
| `assets/fonts/fraunces-03.woff2` | 67304 |
| `assets/fonts/ibm-plex-mono-04.woff2` | 6912 |
| `assets/fonts/ibm-plex-mono-05.woff2` | 8356 |
| `assets/fonts/ibm-plex-mono-06.woff2` | 5868 |
| `assets/fonts/ibm-plex-mono-07.woff2` | 13348 |
| `assets/fonts/ibm-plex-mono-08.woff2` | 14708 |
| `assets/fonts/ibm-plex-mono-09.woff2` | 6972 |
| `assets/fonts/ibm-plex-mono-10.woff2` | 8460 |
| `assets/fonts/ibm-plex-mono-11.woff2` | 6040 |
| `assets/fonts/ibm-plex-mono-12.woff2` | 13432 |
| `assets/fonts/ibm-plex-mono-13.woff2` | 14888 |
| `assets/fonts/ibm-plex-mono-14.woff2` | 7692 |
| `assets/fonts/ibm-plex-mono-15.woff2` | 9352 |
| `assets/fonts/ibm-plex-mono-16.woff2` | 6932 |
| `assets/fonts/ibm-plex-mono-17.woff2` | 14328 |
| `assets/fonts/ibm-plex-mono-18.woff2` | 15620 |
| `assets/fonts/licenses/Fraunces-OFL.txt` | 4391 |
| `assets/fonts/licenses/IBM-Plex-Mono-OFL.txt` | 4456 |
| `assets/fonts/licenses/Source-Serif-4-OFL.txt` | 4400 |
| `assets/fonts/source-serif-4-19.woff2` | 45220 |
| `assets/fonts/source-serif-4-20.woff2` | 93440 |
| `assets/fonts/source-serif-4-21.woff2` | 49336 |
| `assets/fonts/source-serif-4-22.woff2` | 29500 |
| `assets/fonts/source-serif-4-23.woff2` | 100872 |
| `assets/fonts/source-serif-4-24.woff2` | 122360 |
| `assets/fonts.css` | 15183 |
| `assets/medal.webp` | 79354 |
| `assets/portraits/george-stigler.jpg` | 207973 |
| `assets/portraits/gerard-debreu.jpeg` | 52687 |
| `assets/portraits/harry-markowitz.jpg` | 239786 |
| `assets/portraits/james-tobin.png` | 87888 |
| `assets/portraits/merton-miller.jpg` | 253126 |
| `assets/portraits/william-sharpe.jpg` | 338597 |
| `assets/site.css` | 30292 |
| `assets/site.js` | 6309 |
| `cases/1981.html` | 42675 |
| `cases/1982.html` | 57688 |
| `cases/1983.html` | 39339 |
| `cases/1990.html` | 59455 |
| `credits.html` | 4014 |
| `index.html` | 15621 |

`SHA256SUMS.txt` băm mọi file, ngoại trừ chính nó. Không cần công cụ build.

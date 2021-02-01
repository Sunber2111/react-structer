# Cấu trúc thư mục ( option ) cho các Project ReactJs collab Reudx-toolkit or Mobx

Project này dựa trên [Create React App](https://github.com/facebook/create-react-app).

## Cấu trúc Src (Source)
( ở đây mình sẽ bao gồm 3 phần chính )
- index.js : là file chạy chính của phần src.
- app : là folder chứa các thư mục cấu hình chính như : gọi api, component dùng chung, thông báo, store (redux or mobx), ...
- features : là folder chứa các thành phần chính ( features ) của trang web 1 cách tổng quát ( có thể dùng dynamic routers với react router dom , mình sẽ nói cụ thể trong phần sau ).

Bây giờ chúng ta sẽ vào chi tiết các thư mục.

## Đối với Folder **app**
![Philadelphia's Magic Gardens. This place was so cool!](/src/app/assets/Capture.png "app folder")
 - api : chứa các file gọi đến các API services ( thường thì dựa trên axios ). Nếu bạn có tính năng **real-time** thì file lắng nghe từ server cũng nằm trong đây.
 - assets : chứa các hình ảnh.
 - common : chứa các components dùng chung có thể tái sử dụng nhiều lần ( components này có thể là normal components hoặc form components ).
 - helper : chứa các folder giúp bạn xử lý các tính toán, convert date sang string, ... ( nói chung là các hàm các bạn tự định nghĩa để giúp đỡ các bạn trong các việc thao tác với dữ liệu ).
 - layout : chứa phần chính là App.js ( Component tổng ) và index.css (css dùng chung ).
 - notification : chứa các hàm thông báo - thường sẽ dùng chung với React Toastify.
 - routers : chứa các định nghĩa routers trong app của bạn . Ngoài ra còn có các private router components hoặc auth router components ( đối với các việc cần đến Authentication hoặc Authorization ).
 - store : 
    Nếu bạn sửa dụng :
    > Kiến trúc **Redux-toolkit**  : thì đây sẽ là nơi file của compile reducer

    > kiến trúc **Mobx** : thì đây sẽ là nơi chứa các store và common store

## Đối với Folder **feature**:
![Philadelphia's Magic Gardens. This place was so cool!](/src/app/assets/cap2.png "ft folder")
Đối với folder này bạn có thể hình dung là folder sẽ chứa các thành phần tổng quát của trang web. Trong các thành tổng quát này sẽ chứa các trang nhỏ hơn ( có mối quan hệ với nhau ).

*ví dụ :*

**Feature Product** : thì sẽ chứa các trang như 

    - danh sách sản phẩm ( list )

    - chi tiết sản phẩm ( detail )

    - ...

Một feature thường sẽ chứa các thành phần :

> Nếu bạn dùng chung với **Redux-toolkit**

 - actions : chứa các async action ( thường đây sẽ là các hàm gọi API trong folder app/api kèm theo dispatch 1 action )
 - components : chứa các components dùng chung hoặc riêng cho 1 page.
 - pages : các trang chính của 1 feature như mình đã kể trên.
 - index.jsx : thường dùng để làm re-router lại các page dựa trên URL ( router components - dynamic router )
 - ....Slice : bạn nào dùng nhiều redux toolkit chắc cũng không lạ gì với file này :D . file tách các action và reducer
 - styles.css : file css của index.jsx

 > Nếu bạn dùng chung với **Mobx**

 - components : chứa các components dùng chung hoặc riêng cho 1 page.
 - pages : các trang chính của 1 feature như mình đã kể trên.
 - index.jsx : thường dùng để làm re-router lại các page dựa trên URL ( router components )
 - styles.css : file css của index.jsx

## Lời kết

> Đây là 1 trong nhưng options của mình về struct folder của 1 project về reactjs. Bạn hoàn toàn có thể dùng những các structer khác nếu bạn cảm thấy phù hợp với project hiện tại của bạn ^^

> Cảm ơn các bạn đã đọc bài viết của mình.
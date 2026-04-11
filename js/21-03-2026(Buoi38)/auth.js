



// auth
// 1. Đăng nhập:
// - Thông tin email, password lên server
// - Server kiểm tra thông tin, nếu đúng email và password  lưu trong DB
// - thì tạo ra 1 access token (JWT) và 1 refresh(random string) rồi trả về cho client
//- Client lưu access token và refresh token và localSorage


// 2. Trang chủ
// - Client gửi request lấy thông tin user lên server kèm access token
// - Sever kiểm tra access, nếu hợp lệ trả về thông tin user

//3. Khi access token hết hạn
//- Client gửi request để refresh token lên server
//- server kiểm tra refresh token, nếu hợ lệ tạo ra access_token mới và refresh_token mới trả về thông tin của của user
//- Client gửi lại request bị lỗi ở bước 2 với access token mới,nếu hợp  lệ thì trả về thông tin user

// 4.Đăng xuất
//- Client xóa access token và refresh token khỏi localSorage





















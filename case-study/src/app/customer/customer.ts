export interface Customer {
//  Họ tên Customer, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách,
//  Địa chỉ (resort sẽ phân loại Customer để áp dụng các chính sách phục vụ cho phù hợp).
// Loại Customer bao gồm: (Diamond, Platinium, Gold, Silver, Member).
  name: string;
  birthday: string;
  gender: boolean;
  idNumber: string;
  phone: string;
  email: string;
  customerType: string;
  address: string;
}

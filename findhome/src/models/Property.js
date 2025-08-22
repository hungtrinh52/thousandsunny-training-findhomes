class Property {
    constructor() {
        this.id = "";
        this.standard = "";
        this.bBank = false;
        this.bCamKetChuan = false;
        this.bHidden = false;
        this.bHuyHen = false;
        this.bSigned = false;
        this.bodId = 0;
        this.bottoms = [];
        this.cdn = "";
        this.comment = "";
        this.crawled_at = "";
        this.dNgayBank = null;
        this.dNgayTao = "";
        this.editable = false;
        this.fileLoai2 = [
            {
                id: 0,
                bPublic: false,
                dNgayTao: "",
                iID_Hang: null,
                iID_LoaiFile: 0,
                sFile: ""
            }
        ];
        this.fileTitles = [];
        this.high_priority = false;
        this.iDai = 0;
        this.iDienTich = 0;
        this.iDienTichSo = 0;
        this.iDuAn = 0;
        this.iDuongVao = 0;
        this.iGiaChaoHopDong = 0;
        this.iGiaChot = 0;
        this.iHeSoThanhTich = 0;
        this.iID_HuongNha = 0;
        this.iID_MaNguoiDungTao = 0;
        this.iID_MaPhuongXa = 0;
        this.iID_MaQuan = 0;
        this.iID_MaTinh = 0;
        this.iKhoBank = 0;
        this.iKhoInvest = 0;
        this.iKieuBan = 0;
        this.iLat = "";
        this.iLng = "";
        this.iMatTien = 0;
        this.iPhanLoai = 0;
        this.iPhanTramHoaHong = 0;
        this.iRate = 0;
        this.iSoPhongNgu = 0;
        this.iSoTang = 0;
        this.iSoToilet = 0;
        this.iTienHoaHong = 0;
        this.iTrangThai = 0;
        this.iTrangThaiSoDo = 0;
        this.location = false;
        this.lock = [];
        this.removable = null;
        this.report = false;
        this.sDiaChi = "";
        this.sDienThoaiBank = "";
        this.sDienThoaiDauChu = "";
        this.sDuongPho = "";
        this.sFaceBook = "";
        this.sGiaChaoHopDong = "";
        this.sHash = "";
        this.sHoTenDauChu = "";
        this.sHopDongDauChu = "";
        this.sID_MaNguoiDuyetBank = null;
        this.sImg = "";
        this.sLoaiHang = "";
        this.sMaHang = "";
        this.sMota = "";
        this.sNoiDung = "";
        this.sTaiKhoanDauChu = "";
        this.sTaiKhoanDuyet = "";
        this.sTenBan = "";
        this.sTenChuNha = "";
        this.sTenKhoiPhong = "";
        this.sTenPhuongXa = "";
        this.sTenQuan = "";
        this.sTenTinh = "";
        this.tab = [
            { id: "", title: "", hide: false }
        ];
        this.updated_at = "";
        this.x_sort_dia_chi = "";
        this.x_sort_dia_chi_exists = false;
        this.x_sort_duong_pho_exists = false;
    }
}

export default Property;
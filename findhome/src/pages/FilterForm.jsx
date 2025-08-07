import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav/Nav.jsx';
import './css/findHome.css';
import React, { Component } from 'react';
import TextInput from "../component/TextInput.jsx";
import CheckBoxInput from "../component/CheckBoxInput.jsx";
import RangeInput from "../component/RangeInput.jsx";
import DateInput from "../component/DateInput.jsx";
import listLocation from '../data/dataLocation.js';
import listBtnFavourite from '../data/dataFavourite.js';
import listPhanLoai from '../data/DataPhanLoai.js';
import listStt from '../data/dataStatus.js';
import listData from '../data/ListData.js';
import CheckBoxBtnInput from "../component/ButtonInput.jsx";

class FindHomes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                keyWord: null,
                streetName: null,
                viTri: null,
                giaChao: { min: null, max: null },
                donGia: { min: null, max: null },
                dienTich: { min: null, max: null },
                matTien: { min: null, max: null },
                phanLoai: null,
                phanLoaiNgoaiTru: null,
                yeuThich: null,
                trangThai: null,
                ngayTao : {min : null, max: null}
            }
        };
    }

    filterConfig = {
        keyWord: { propKey: 'keyWord', transform: (value) => (value ? value.trim() : null) },
        streetName: { propKey: 'streetName', transform: (value) => (value ? value.trim() : null) },
        viTri: { propKey: 'viTri', transform: (value) => value },
        giaChao: { propKey: 'giaChao', transform: (min, max) => (min || max ? { min, max } : null) },
        donGia: { propKey: 'donGia', transform: (min, max) => (min || max ? { min, max } : null) },
        dienTich: { propKey: 'dienTich', transform: (min, max) => (min || max ? { min, max } : null) },
        matTien: { propKey: 'matTien', transform: (min, max) => (min || max ? { min, max } : null) },
        phanLoai: { propKey: 'phanLoai', transform: (value) => value || [] },
        phanLoaiNgoaiTru: { propKey: 'phanLoaiNgoaiTru', transform: (value) => value },
        yeuThich: { propKey: 'yeuThich', transform: (value) => value },
        trangThai: { propKey: 'trangThai', transform: (value) => value },
        ngayTao: {propKey:'ngayTao',transform:(min,max) => (min || max ? { min, max } : null) }
    };

    handleFilterChange = (propKey, ...values) => {
        const config = this.filterConfig[propKey];
        if (config) {
            const transformedValue = config.transform(...values);
            console.log(`Updating ${propKey} with:`, transformedValue);
            this.setState((prevState) => {
                if (['phanLoai', 'phanLoaiNgoaiTru', 'yeuThich', 'trangThai'].includes(config.propKey)) {
                    const currentValue = prevState.filters[config.propKey] || [];
                    let newValue = transformedValue;
                    if (Array.isArray(transformedValue)) {
                        newValue = [...new Set([...currentValue, ...transformedValue])];
                    }
                    return {
                        filters: {
                            ...prevState.filters,
                            [config.propKey]: newValue
                        }
                    };
                }
                return {
                    filters: {
                        ...prevState.filters,
                        [config.propKey]: transformedValue
                    }
                };
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit filter:', this.state.filters);
    };

    render() {
        const { filters } = this.state;

        return (
            <div>
                <Nav />
                <div className="findHome container row px-0">
                    <form className="formFilter px-0" onSubmit={this.handleSubmit}>
                        <div className="hdForm d-flex justify-content-between">
                            <h1 className="countProduct">124 sản phẩm</h1>
                            <div className="button-group d-flex">
                                <button className="btn btnBlue">Lọc<i className="bi icons bi-funnel-fill"></i></button>
                                <button className="btn btnWhile">Sắp Xếp<i className="bi icons bi-arrow-down-up"></i></button>
                            </div>
                        </div>

                        <div className="formInput">
                            <div className="keyWord input-group align-items-center">
                                <TextInput
                                    fieldTitle="Từ khóa"
                                    hintText="Nhập từ khóa"
                                    fieldValue={filters.keyWord}
                                    onChanged={(value) => this.handleFilterChange('keyWord', value)}
                                />
                            </div>

                            <div className="createDate input-group align-items-center">
                                <DateInput
                                    fieldTitle="Ngày tạo"
                                    fieldValue={filters.ngayTao}
                                    to="Đến"
                                    onChanged={(min,max)=>this.handleFilterChange("ngayTao",min,max)}
                                />

                            </div>

                            <div className="d-flex flex-wrap">
                                <span className="input-group-text border-0">Vị trí</span>
                                <CheckBoxInput
                                    fieldTitle=""
                                    allTags={listLocation}
                                    current={filters.viTri}
                                    onChanged={(value) => this.handleFilterChange('viTri', value)}
                                />
                            </div>

                            <div>
                                <TextInput
                                    fieldTitle=""
                                    hintText="Nhập tên đường"
                                    fieldValue={filters.streetName}
                                    onChanged={(value) => this.handleFilterChange('streetName', value)}
                                />
                            </div>

                            <div className="input-group align-items-center">
                                <RangeInput
                                    title="Giá chào (tr)"
                                    minText="Giá thấp nhất"
                                    maxText="Giá cao nhất"
                                    to="Đến"
                                    fieldValueMin={filters.giaChao?.min}
                                    fieldValueMax={filters.giaChao?.max}
                                    onChanged={(min, max) => this.handleFilterChange('giaChao', min, max)}
                                />
                            </div>

                            <div className="distribute input-group align-items-center">
                                <span className="input-group-text border-0">Phân loại</span>
                                <div className="d-flex flex-wrap">
                                    <CheckBoxBtnInput
                                        fieldTitle=""
                                        allTags={listPhanLoai}
                                        current={filters.phanLoai}
                                        onChanged={(value) => this.handleFilterChange('phanLoai', value)}
                                    />
                                </div>
                                <span className="input-group-text border-0">Ngoại trừ</span>
                                <div className="d-flex flex-wrap row-gap-2">
                                    <CheckBoxBtnInput
                                        fieldTitle=""
                                        allTags={listPhanLoai}
                                        current={filters.phanLoaiNgoaiTru}
                                        onChanged={(value) => this.handleFilterChange('phanLoaiNgoaiTru', value)}
                                    />
                                </div>
                            </div>

                            <div className="favourite input-group align-items-center">
                                <span className="input-group-text border-0">Yêu thích</span>
                                <div className="m-0">
                                    <CheckBoxBtnInput
                                        fieldTitle=""
                                        allTags={listBtnFavourite}
                                        current={filters.yeuThich}
                                        onChanged={(value) => this.handleFilterChange('yeuThich', value)}
                                    />
                                </div>
                            </div>

                            <div className="status input-group align-items-center">
                                <span className="input-group-text border-0">Trạng thái</span>
                                <div className="m-0 p-0">
                                    <CheckBoxBtnInput
                                        fieldTitle=""
                                        allTags={listStt}
                                        current={filters.trangThai}
                                        onChanged={(value) => this.handleFilterChange('trangThai', value)}
                                    />
                                </div>
                            </div>

                            <div className="input-group align-items-center">
                                <RangeInput
                                    title="Đơn giá (tr/m2)"
                                    minText="Nhỏ nhất"
                                    maxText="Lớn nhất"
                                    to="Đến"
                                    fieldValueMin={filters.donGia?.min}
                                    fieldValueMax={filters.donGia?.max}
                                    onChanged={(min, max) => this.handleFilterChange('donGia', min, max)}
                                />
                            </div>

                            <div className="input-group align-items-center">
                                <RangeInput
                                    title="Diện tích"
                                    minText="Nhỏ nhất"
                                    maxText="Lớn nhất"
                                    to="Đến"
                                    fieldValueMin={filters.dienTich?.min}
                                    fieldValueMax={filters.dienTich?.max}
                                    onChanged={(min, max) => this.handleFilterChange('dienTich', min, max)}
                                />
                            </div>

                            <div className="input-group align-items-center">
                                <RangeInput
                                    title="Mặt tiền"
                                    minText="Nhỏ nhất"
                                    maxText="Lớn nhất"
                                    to="Đến"
                                    fieldValueMin={filters.matTien?.min}
                                    fieldValueMax={filters.matTien?.max}
                                    onChanged={(min, max) => this.handleFilterChange('matTien', min, max)}
                                />
                            </div>
                        </div>

                        <div className="button-group d-flex justify-content-center mt-3">
                            <button className="btn btnWhile">Lưu bộ lọc</button>
                            <button className="btn btnWhile">Làm mới</button>
                            <button className="btn btnBlue" type="submit">Xác nhận</button>
                        </div>
                    </form>
                </div>
                <div className="cardHome container p-0 row">
                    {listData.map((listData) => (
                        <div className="card col-auto p-0">
                            <img src={`${listData.sImg}`} className="card-img-top" alt="" />
                            <div className="btn-icon">
                                <button className="btn btn-light rounded-circle">
                                    <i className="bi bi-eye-slash btnIcon"></i>
                                </button>
                                <button className="btn btn-light rounded-circle">
                                    <i className="bi bi-eye-slash btnIcon"></i>
                                </button>
                                <button className="btn btn-light rounded-circle">
                                    <i className="bi bi-eye-slash btnIcon"></i>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a className="link" href="#">{listData.sMota}</a>
                                </h5>
                                <div className="cardText">
                                    <p className="card-text">
                                        <i className="bi bi-geo-alt-fill iconCard"></i>
                                        {listData.sDuongPho}, {listData.sTenQuan}
                                    </p>
                                </div>
                                <div className="cardTextBtn align-items-center">
                                    <div className="d-flex justify-content-start">
                                        <i className="bi bi-map iconCard"></i>
                                        <p className="card-text">{listData.iDienTich}m2</p>
                                    </div>
                                    <button type="button" className="btn btn-secondary">Chuẩn</button>
                                </div>
                                <div className="cardText">
                                    <div className="d-flex justify-content-start">
                                        <i className="bi bi-stopwatch iconCard"></i>
                                        <p className="card-text">Ngày tạo</p>
                                    </div>
                                    <p className="card-text">{listData.dNgayTao}</p>
                                </div>
                                <div className="cardText">
                                    <div className="d-flex justify-content-start">
                                        <i className="bi bi-calendar iconCard"></i>
                                        <p className="card-text">Ngày sửa</p>
                                    </div>
                                    <p className="card-text">{listData.updated_at}</p>
                                </div>
                                <div className="cardText">
                                    <div className="d-flex justify-content-start">
                                        <i className="bi bi-currency-dollar iconCard"></i>
                                        <p className="card-text textPrice">{listData.sGiaChaoHopDong}</p>
                                    </div>
                                    <p className="card-text">{listData.iDienTich}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FindHomes;
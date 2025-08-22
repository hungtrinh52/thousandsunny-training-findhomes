import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav/Nav.jsx';
import './css/findHome.css';
import React, { Component } from 'react';
import TextInput from "../component/TextInput.jsx";
import CheckBoxBtnInput from "../component/ButtonInput.jsx";
import CheckBoxInput from "../component/CheckBoxInput.jsx";
import RangeInput from "../component/RangeInput.jsx";
import DateInput from "../component/DateInput.jsx";
import listLocation from '../data/dataLocation.js';
import listBtnFavourite from '../data/dataFavourite.js';
import listPhanLoai from '../data/DataPhanLoai.js';
import listStt from '../data/dataStatus.js';
import listSavedFilter from "../data/savedListFilter.js";

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                keyWord: null,
                streetName: null,
                viTri: [],
                giaChao: { min: null, max: null },
                donGia: { min: null, max: null },
                dienTich: { min: null, max: null },
                matTien: { min: null, max: null },
                phanLoai: [],
                phanLoaiNgoaiTru: [],
                yeuThich: [],
                trangThai: [],
                ngayTao: { min: null, max: null }
            },
            card: {
                likedItems :[]
            }
        };

    }

    handleDateChange = (newValue) => {
        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                ngayTao: newValue
            }
        }));
    };

    handleCheckBoxChange = (propKey, value) => {
        this.setState((prevState) => ({
            filters: {
                ...prevState.filters,
                [propKey]: value
            }
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', this.state.filters);
    };

    handleReset = () => {
        this.setState({
            filters: {
                keyWord: null,
                streetName: null,
                viTri: [],
                giaChao: { min: null, max: null },
                donGia: { min: null, max: null },
                dienTich: { min: null, max: null },
                matTien: { min: null, max: null },
                phanLoai: [],
                phanLoaiNgoaiTru: [],
                yeuThich: [],
                trangThai: [],
                ngayTao: { min: null, max: null }
            }
        }, () => console.log('State reset to:', this.state.filters));
    };

    handleSaveFilter = () => {
        const { filters } = this.state;
        const maxId = listSavedFilter.reduce((max, filter) => Math.max(max, filter.id || -1), -1);
        const newId = maxId + 1;
        const newFilter = { ...filters, id: newId };
        listSavedFilter.push(newFilter);
        console.log('Saved filters:', listSavedFilter);
    };


    render() {

        const { filters } = this.state;
        console.log('Render with filters:', filters);
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
                                    maxLength={100}
                                    onChanged={(value) => this.setState((prevState) => ({
                                        filters: { ...prevState.filters, keyWord: value }
                                    }))}
                                />
                            </div>

                            <div className="createDate input-group align-items-center">
                                <DateInput
                                    fieldTitle="Ngày tạo"
                                    fieldValue={filters.ngayTao}
                                    to="Đến"
                                    onChanged={this.handleDateChange}
                                />
                            </div>

                            <div className="d-flex flex-wrap">
                                <span className="input-group-text border-0">Vị trí</span>
                                <CheckBoxInput
                                    fieldTitle=""
                                    allTags={listLocation}
                                    current={filters.viTri}
                                    onChanged={(value) => this.handleCheckBoxChange('viTri', value)}
                                />
                            </div>

                            <div>
                                <TextInput
                                    fieldTitle=""
                                    hintText="Nhập tên đường"
                                    fieldValue={filters.streetName}
                                    maxLength={100}
                                    onChanged={(value) => this.setState((prevState) => ({
                                        filters: { ...prevState.filters, streetName: value }
                                    }))}
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
                                    onChanged={(min, max) => this.setState((prevState) => ({
                                        filters: { ...prevState.filters, giaChao: { min, max } }
                                    }))}
                                />
                            </div>

                            <div className="distribute input-group align-items-center">
                                <span className="input-group-text border-0">Phân loại</span>
                                <div className="d-flex flex-wrap">
                                    <CheckBoxBtnInput
                                        fieldTitle=""
                                        allTags={listPhanLoai}
                                        current={filters.phanLoai}
                                        onChanged={(value) => this.handleCheckBoxChange('phanLoai', value)}
                                    />
                                </div>
                                <span className="input-group-text border-0">Ngoại trừ</span>
                                <div className="d-flex flex-wrap row-gap-2">
                                    <CheckBoxBtnInput
                                        fieldTitle=""
                                        allTags={listPhanLoai}
                                        current={filters.phanLoaiNgoaiTru}
                                        onChanged={(value) => this.handleCheckBoxChange('phanLoaiNgoaiTru', value)}
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
                                        onChanged={(value) => this.handleCheckBoxChange('yeuThich', value)}
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
                                        onChanged={(value) => this.handleCheckBoxChange('trangThai', value)}
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
                                    onChanged={(min, max) => this.setState((prevState) => ({
                                        filters: { ...prevState.filters, donGia: { min, max } }
                                    }))}
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
                                    onChanged={(min, max) => this.setState((prevState) => ({
                                        filters: { ...prevState.filters, dienTich: { min, max } }
                                    }))}
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
                                    onChanged={(min, max) => this.setState((prevState) => ({
                                        filters: { ...prevState.filters, matTien: { min, max } }
                                    }))}
                                />
                            </div>
                        </div>

                        <div className="button-group d-flex justify-content-center mt-3">
                            <button className="btn btnWhile" onClick={this.handleSaveFilter}>Lưu bộ lọc</button>
                            <button className="btn btnWhile " onClick={this.handleReset}>Làm mới</button>
                            <button className="btn btnBlue" type="submit">Xác nhận</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
export default FilterForm;
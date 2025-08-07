import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Nav/Nav.jsx";
import './css/findHome.css';
import React, {useEffect, useState} from "react";
import listData from "../data/ListData.js";
import TextField from "../component/TextField.jsx";
import InputButton from "../component/ButtonInput.jsx";
import listPhanLoai from "../data/DataPhanLoai.js";
import listBtnFavourite from "../data/dataFavourite.js";
import listStt from "../data/dataStatus.js";
import listLocation from "../data/dataLocation.js";
import InputCheckbox from "../component/CheckBoxInput.jsx";

function FindHomes() {
    const [keyWord,setKeyWord] = useState('');

    //data location
    const [dbLocation,setDbLocation] = useState(listLocation);
    useEffect(() => {
        const fetchData =()=>{
            setDbLocation(listLocation)
        }
        fetchData();
    }, [listLocation]);

        //checkbox location
    const [checkLocation,setCheckLocation] = useState(
        new Array(listLocation.length).fill(false)
    )
    const handleCheckLocation = (index) => {
        const updateCheck = [...checkLocation];
        updateCheck[index] = !updateCheck[index];
        setCheckLocation(updateCheck);
    }

    const [nameStreet,setNameStreet] = useState('');
    const [giaChaoMin,setGiaChaoMin] =useState('');
    const [giaChaoMax,setGiaChaoMax] = useState('');

    //data phan loai

    const [dataPhanLoai,setDataPhanLoai] = useState(listPhanLoai);
    useEffect(() => {
        const fetchData = () => {
            setDataPhanLoai(listPhanLoai);
        };
        fetchData();
    }, [listPhanLoai]);

        //check button Phan Loai
    const [isChecked,setIsChecked] =useState(
        new Array(listPhanLoai.length).fill(false)
    );
    const handleChange = (index) => {
        const updateChecked = [...isChecked];
        updateChecked[index] = !updateChecked[index];
        setIsChecked(updateChecked);
    }

        //check button Phan Loai ngoai tru
    const [isCheckedExcept,setIsCheckedExcept] =useState(
        new Array(listPhanLoai.length).fill(false)
    );
    const handleChangeExcept = (index) =>{
        const updateChecked = [...isCheckedExcept];
        updateChecked[index] =!updateChecked[index];
        setIsCheckedExcept(updateChecked);
    }

    //data favourite
    const [dbFavourite,setDbFavourite] = useState(listBtnFavourite);
    useEffect(() => {
        const fetchData = () =>{
            setDbFavourite(listBtnFavourite);
        };
        fetchData();
    }, [listBtnFavourite]);

        //check btn favourite
    const [checkBtnFavourite,setCheckBtnFavourite] =useState(
        new Array(listBtnFavourite.length).fill(false)
    )
    const handleCheckFavourite =(index) => {
        const updateChecked = [...checkBtnFavourite];
        updateChecked[index] = !updateChecked[index];
        setCheckBtnFavourite(updateChecked);
    }

    //data status
    const [dbStatus,setDbStatus]=useState(listStt);
    useEffect(() => {
        const fetchData =() => {
            setDbStatus(listStt);
        }
        fetchData();
    }, [listStt]);
        //check btn status
    const [checkBtnStt,setCheckBtnStt] = useState(
        new Array(listStt.length).fill(false)
    );
    const handleCheckBtnStt=(index) => {
        const updateChecked = [...checkBtnStt];
        updateChecked[index] = !updateChecked[index];
        setCheckBtnStt(updateChecked);
    }

    const [donGiaMin,setDonGiaMin] = useState('');
    const [donGiaMax,setDonGiaMax] = useState('');
    const [dienTichMin,setDienTichMin] = useState('');
    const [dienTichMax,setDienTichMax] = useState('');
    const [matTienMin,setMatTienMin] = useState('');
    const [matTienMax,setMatTienMax] = useState('');
    const [dauChuMin,setDauChuMin] = useState('');
    const [dauChuMax,setDauChuMax] =useState('');

    //data card
    const [listProperty, setListProperty] = useState(listData);
    useEffect(() => {
        const fetchData = () => {
            setListProperty(listData);
        };
        fetchData();
    }, [listData]);

return <>
    <Nav></Nav>
    <div className="findHome container  row px-0 ">
        <div className="formFilter col mx-auto px-0">
            <div className="hdForm d-flex justify-content-between">
                <h1 className="countProduct">124 sản phẩm</h1>
                <div className="button-group d-flex ">
                    <button className="btn btnBlue">Lọc
                        <i className="bi icons bi-funnel-fill"></i>
                    </button>
                    <button className="btn btnWhile">Sắp Xếp
                        <i className="bi icons bi-arrow-down-up"></i>
                    </button>
                </div>
            </div>
            <form className="formInput">
                 {/*keyWord*/}
                <div className="keyWord input-group align-items-center">
                    <TextField
                        label="Từ khóa"
                        value={keyWord}
                        onChange={(e) => setKeyWord(e.target.value)}
                        placeholder="Nhập từ khóa"
                        className=""
                    />
                </div>


                {/*create date*/}
                <div className="createDate d-flex justify-content-between ">
                    <div className="input-group align-items-center">
                        <span className="input-group-text border-0">Ngày tạo</span>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="input-group align-items-center">
                        <span className="input-group-text2 border-0">Đến</span>
                        <input type="date" className="form-control"/>
                    </div>
                </div>

                {/*change date*/}
                <div className="changeDate d-flex justify-content-between ">
                    <div className="input-group align-items-center">
                        <span className="input-group-text border-0">Ngày sửa</span>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="input-group align-items-center">
                        <span className="input-group-text2 border-0">Đến</span>
                        <input type="date" className="form-control"/>
                    </div>
                </div>

               {/* sales day*/}
                <div className="salesDay d-flex justify-content-between ">
                    <div className="input-group align-items-center">
                        <span className="input-group-text border-0">Ngày bán</span>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="input-group align-items-center">
                        <span className="input-group-text2 border-0">Đến</span>
                        <input type="date" className="form-control"/>
                    </div>
                </div>

                {/* location*/}
                <div className="location input-group align-items-center">
                    <div className="d-flex justify-content-start w-100">
                        <span className="input-group-text border-0 pb-3">Vị trí</span>
                        <div className="checkbox">
                            {dbLocation.map((item,index)=>(
                                <InputCheckbox
                                    label={item}
                                    id={`location-${index}`}
                                    checked={checkLocation[index]}
                                    onChange={()=>handleCheckLocation(index)}
                                />
                            ))}
                        </div>

                    </div>
                    <div className="locationFControl input-group align-items-center m-0">
                        <TextField
                            label="Từ khóa"
                            value={nameStreet}
                            onChange={(e) => setNameStreet(e.target.value)}
                            placeholder="Nhập tên đường"
                            className=""
                        />
                    </div>
                </div>

                {/*initialPrice*/}
                <div className="initialPrice d-flex justify-content-between ">
                    <div className="input-group align-items-center">
                        <TextField
                            label="Giá chào (tr)"
                            value={giaChaoMin}
                            onChange={(e) => setGiaChaoMin(e.target.value)}
                            placeholder="Giá thấp nhất"
                            className=""
                        />
                    </div>
                    <div className="input-group align-items-center">
                        <TextField
                            label="Đến"
                            value={giaChaoMax}
                            onChange={(e) => setGiaChaoMax(e.target.value)}
                            placeholder="Giá cao nhất"
                            className=""
                        />
                    </div>
                </div>

                {/*distribute*/}
                <div className="distribute input-group align-items-center">
                    <div className="distribute-text align-self-stretch">
                        <span className="input-group-text border-0">Phân loại</span>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-wrap row-gap-2" role="group" aria-label="">
                            {dataPhanLoai.map((item, index) => (
                                <InputButton
                                    id={`except-case1-${index}`}
                                    label={item}
                                    checked={isChecked[index]}
                                    onChange={() => handleChange(index)}
                                />
                            ))}

                        </div>
                        <span className="input-group-text border-0">Ngoại trừ</span>
                        <div className="d-flex flex-wrap row-gap-2" role="group" aria-label="">
                            {dataPhanLoai.map((item, index) => (
                                <InputButton
                                    id={`except-case2-${index}`}
                                    label={item}
                                    checked={isCheckedExcept[index]}
                                    onChange={() => handleChangeExcept(index)}
                                />
                            ))}
                        </div>
                    </div>

                </div>

                {/* favourite*/}
                <div className="favourite input-group align-items-center">
                    <span className="input-group-text border-0">Yêu thích</span>
                    <div className="m-0" role="group" aria-label="Basic checkbox toggle button group">
                        {dbFavourite.map((item,index) => (
                            <InputButton
                                id={`favourite-${index}`}
                                label={item}
                                checked={checkBtnFavourite[index]}
                                onChange={() => handleCheckFavourite(index)}
                            />
                        ))}
                    </div>
                </div>

                {/*status*/}


                {/* price*/}
                <div className="price-per-sqm d-flex justify-content-between">
                    <div className="input-group align-items-center">
                        <TextField
                            label="Đơn giá(tr/m2)"
                            value={donGiaMin}
                            onChange={(e) => setDonGiaMin(e.target.value)}
                            placeholder="Nhỏ nhất"
                            className=""
                        />
                    </div>
                    <div className="input-group align-items-center">
                        <TextField
                            label="Đến"
                            value={donGiaMax}
                            onChange={(e) => setDonGiaMax(e.target.value)}
                            placeholder="Lớn nhất"
                            className=""
                        />
                    </div>
                </div>

                {/*area*/}
                <div className="area d-flex justify-content-between ">
                    <div className="input-group align-items-center">
                        <TextField
                            label="Diện tích"
                            value={dienTichMin}
                            onChange={(e) => setDienTichMin(e.target.value)}
                            placeholder="Nhỏ nhất"
                            className=""
                        />
                    </div>
                    <div className="input-group align-items-center">
                        <TextField
                            label="Đến"
                            value={dienTichMax}
                            onChange={(e) => setDienTichMax(e.target.value)}
                            placeholder="Lớn nhất"
                            className=""
                        />
                    </div>
                </div>

                  {/*facade*/}
                <div className="facade d-flex justify-content-between ">
                    <div className="input-group align-items-center">
                        <TextField
                            label=" Mặt tiền"
                            value={matTienMin}
                            onChange={(e) => setMatTienMin(e.target.value)}
                            placeholder="Nhỏ nhất"
                            className=""
                        />
                    </div>
                    <div className="input-group align-items-center">
                        <TextField
                            label="Đến"
                            value={matTienMax}
                            onChange={(e) => setMatTienMax(e.target.value)}
                            placeholder="Nhỏ nhất"
                            className=""
                        />
                    </div>
                </div>

                {/*owner*/}
                <div className="owner d-flex justify-content-between ">
                    <div className="input-group align-items-center">
                        <TextField
                            label="Đầu chủ"
                            value={dauChuMin}
                            onChange={(e) => setDauChuMin(e.target.value)}
                            placeholder="Nhỏ nhất"
                            className=""
                        />
                    </div>
                    <div className="input-group align-items-center">
                        <TextField
                            label="Đến"
                            value={dauChuMax}
                            onChange={(e) => setDauChuMax(e.target.value)}
                            placeholder="Nhỏ nhất"
                            className=""
                        />
                    </div>
                </div>
                <div className="button-group d-flex justify-content-center mt-3">
                    <button className="btn btnWhile"> Lưu bộ lọc</button>
                    <button className="btn btnWhile"> Làm mới</button>
                    <button className="btn btnBlue"> Xác nhận</button>
                </div>
            </form>

        </div>

    </div>
    <div className="cardHome container p-0 row">
        {listProperty.map((listData) => (
            <div className="card col-auto p-0">
                <img src={`${listData.sImg}`} className="card-img-top" alt=""/>
                <div className="btn-icon">
                    <button className="btn btn-light rounded-circle"><i className="bi bi-eye-slash btnIcon"></i>
                    </button>
                    <button className="btn btn-light rounded-circle"><i className="bi bi-eye-slash btnIcon"></i>
                    </button>
                    <button className="btn btn-light rounded-circle"><i className="bi bi-eye-slash btnIcon"></i>
                    </button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <a className="link" href="#">{listData.sMota}
                        </a></h5>
                    <div className="cardText">
                        <p className="card-text">
                            <i className="bi bi-geo-alt-fill iconCard">
                            </i>{listData.sDuongPho}, {listData.sTenQuan} </p>
                    </div>
                    <div className="cardTextBtn align-items-center">
                        <div className=" d-flex justify-content-start">
                            <i className="bi bi-map iconCard"></i>
                            <p className="card-text">{listData.iDienTich}m2</p>
                        </div>
                        <button type="button" className="btn btn-secondary">Chuẩn</button>
                    </div>
                    <div className="cardText">
                        <div className=" d-flex justify-content-start">
                            <i className="bi bi-stopwatch iconCard"></i>
                            <p className="card-text">Ngày tạo</p>
                        </div>
                        <p className="card-text">{listData.dNgayTao}</p>
                    </div>
                    <div className="cardText">
                        <div className=" d-flex justify-content-start">
                            <i className="bi bi-calendar iconCard"></i>
                            <p className="card-text">Ngày sửa</p>
                        </div>
                        <p className="card-text">{listData.updated_at}</p>
                    </div>
                    <div className="cardText">
                        <div className=" d-flex justify-content-start">
                            <i className="bi bi-currency-dollar iconCard"></i>
                            <p className="card-text textPrice">{listData.sGiaChaoHopDong}</p>
                        </div>
                        <p className="card-text">{listData.iDienTich}</p>
                    </div>
                </div>

            </div>
        ))}
    </div>

</>
}

export default FindHomes;

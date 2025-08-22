import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Property from '../models/Property.js';
import {Component} from "react";

class CardProperties extends Component {
    static propType ={
        item: PropTypes.instanceOf(Property).isRequired,
        onLike: PropTypes.func,
        onChimMoi : PropTypes.func,
        onHiddent : PropTypes.func
    };

    handleLikeItems = (item) => {
        const { onLike } = this.props;
        onLike(item);
    };
    handleChimMoiItems = (item) => {
        const { onChimMoi } = this.props;
        onChimMoi(item);
    };
    handleHiddenItems = (item) => {
        const { onHidden } = this.props;
        onHidden(item);
    };

    render() {
        const { item } = this.props;

        return (
            <div className="card col-auto p-0" key={item.id}>
                <img src={item.sImg || 'default-image.jpg'} className="card-img-top" alt={item.sMota || 'Card Image'} />
                <div className="btn-icon">
                    <button className="btn btn-light rounded-circle" onClick={() => this.handleLikeItems(item)}>
                        <i className="bi bi-heart btnIcon"></i>
                    </button>
                    <button className="btn btn-light rounded-circle" onClick ={() => this.handleChimMoiItems(item)}>
                        <i className="bi bi-feather btnIcon"></i>
                    </button>
                    <button className="btn btn-light rounded-circle" onClick ={() => this.handleHiddenItems(item)}>
                        <i className="bi bi-eye-slash btnIcon"></i>
                    </button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <a className="link" href="#">{item.sMota || 'No Description'}</a>
                    </h5>
                    <div className="cardText">
                        <p className="card-text">
                            <i className="bi bi-geo-alt-fill iconCard"></i>
                            {item.sDuongPho || 'Unknown'}, {item.sTenQuan || 'Unknown'}
                        </p>
                    </div>
                    <div className="cardTextBtn align-items-center">
                        <div className="d-flex justify-content-start">
                            <i className="bi bi-map iconCard"></i>
                            <p className="card-text">{item.iDienTich || 0}m²</p>
                        </div>
                        <button type="button" className="btn btn-secondary">Chuẩn</button>
                    </div>
                    <div className="cardText">
                        <div className="d-flex justify-content-start">
                            <i className="bi bi-stopwatch iconCard"></i>
                            <p className="card-text">Ngày tạo</p>
                        </div>
                        <p className="card-text">{item.dNgayTao || 'N/A'}</p>
                    </div>
                    <div className="cardText">
                        <div className="d-flex justify-content-start">
                            <i className="bi bi-calendar iconCard"></i>
                            <p className="card-text">Ngày sửa</p>
                        </div>
                        <p className="card-text">{item.updated_at || 'N/A'}</p>
                    </div>
                    <div className="cardText">
                        <div className="d-flex justify-content-start">
                            <i className="bi bi-currency-dollar iconCard"></i>
                            <p className="card-text textPrice">{item.sGiaChaoHopDong || 'N/A'}</p>
                        </div>
                        <p className="card-text">{item.iDienTich || 0}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardProperties;
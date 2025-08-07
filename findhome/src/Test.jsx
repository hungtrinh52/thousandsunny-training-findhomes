import React, { Component } from 'react';
import TextInput from "./component/TextInput.jsx";

class UserRegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const firstName = this.firstNameRef.current ? this.firstNameRef.current.getInputValue() : '';
        const lastName = this.lastNameRef.current ? this.lastNameRef.current.getInputValue() : '';
        const email = this.emailRef.current ? this.emailRef.current.getInputValue() : '';
        const password = this.passwordRef.current ? this.passwordRef.current.getInputValue() : '';

        console.log('Dữ liệu Form đã Gửi');
        console.log('Họ:', firstName);
        console.log('Tên:', lastName);
        console.log('Email:', email);
        console.log('Mật khẩu:', password);
        alert(`Đăng ký thành công!\nHọ: ${firstName}\nEmail: ${email}`);
    }

    handleReset() {
        this.firstNameRef.current?.resetValue();
        this.lastNameRef.current?.resetValue();
        this.emailRef.current?.resetValue();
        this.passwordRef.current?.resetValue();
        console.log('Form đã được đặt lại về rỗng.');
    }

    render() {
        return (
            <div style={{
                padding: '30px',
                border: '1px solid #eee',
                borderRadius: '8px',
                maxWidth: '500px',
                margin: '30px auto',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                backgroundColor: '#fff',
                fontFamily: 'Arial, sans-serif'
            }}>
                <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '25px' }}>
                    Đăng ký người dùng
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        label="Họ"
                        placeholder="Nhập họ của bạn"
                        ref={this.firstNameRef}
                    />

                    <TextInput
                        label="Tên"
                        placeholder="Nhập tên của bạn"
                        ref={this.lastNameRef}
                    />

                    <TextInput
                        label="Địa chỉ Email"
                        placeholder="Nhập email của bạn"
                        ref={this.emailRef}
                    />

                    <TextInput
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu mạnh"
                        ref={this.passwordRef}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                        <button
                            type="submit"
                            style={{
                                flex: 1,
                                padding: '12px 20px',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                marginRight: '10px',
                                boxShadow: '0 2px 4px rgba(40,167,69,0.2)'
                            }}
                        >
                            Đăng ký
                        </button>
                        <button
                            type="button"
                            onClick={this.handleReset}
                            style={{
                                flex: 1,
                                padding: '12px 20px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                marginLeft: '10px',
                                boxShadow: '0 2px 4px rgba(220,53,69,0.2)'
                            }}
                        >
                            Đặt lại
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserRegistrationForm;
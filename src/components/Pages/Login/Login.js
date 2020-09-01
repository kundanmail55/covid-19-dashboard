import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCovidRequest, getUserAuth, showNotification } from 'actions/actions';
import { GridStyle, BackgroundImage, Form, validateForm, InputError } from 'components/Pages/Login';
import { registerUser } from '__services/APIs';
import { Notification, Spinner } from 'components/Common';

export class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        registrationEmail: '',
        registrationPassword: '',
        errors: {
            email: '',
            password: '',
            registrationEmail: '',
            registrationPassword: ''
        },
        notificationAlert: false,
        alertValue: undefined,
        type: undefined,
        title: undefined,
        loading: true
    }
    
    componentDidMount() {
        setTimeout(() => {this.setState({loading: false})}, 2000)
    }

    componentDidUpdate() {
        const { auth, notification, history } = this.props;
        const { notificationAlert, alertValue, type, title } = this.state;
        if (auth) history.push('/dashboard')
        if (notification && !notificationAlert) {
            if (!alertValue && !type && !title) {
                this.notification(true, 'error', 'User Not Allowed', 'Please check the credentials')
            } else this.setState({notificationAlert:true})
        } else if(!notification && notificationAlert) {
            this.setState({notificationAlert: false})
        }
    }

    notification = (value, type, title, alertValue) => {
        this.setState({title, type, alertValue}, () => {
          this.props.showNotification(value);
          setTimeout(() => this.resetNotification(), 6000)
        })
    }

    resetNotification = () => {
        this.setState({type: '', title: '', alertValue: ''}, 
          () => this.props.showNotification(false))
    }

    onChangeHandler = (type, value) => {
        let errors = InputError(this.state.errors, type, value);
        this.setState({[type]: value, errors})
    }
    onClickHandler = (e, type) => {
        e.preventDefault()
        let card = document.querySelector('#card');
        let errors = {
            email: '', password: '', registrationEmail: '', registrationPassword: ''
        }
        this.setState({errors})
        if (card && type === 'signUp-card') card.classList.add('the-card-clicked');
        else if (card && type === 'login-card') card.classList.remove('the-card-clicked');
        else if (type === 'submit') {
            if(validateForm(this.state.errors)) {
                try {
                    registerUser(this.state.registrationEmail, this.state.registrationPassword).then(response => {
                        if (response.user.email && response.user.refreshToken) {
                            this.setState({registrationEmail: '',registrationPassword: ''})
                            this.notification(true, 'success', 'User Register Success', 'Please login to see the dashboard');
                        } else this.notification(true, 'error', 'Something Went Wrong', 'Please try again.')
                    })
                } catch (e) {
                    console.log(e)
                    this.notification(true, 'error', 'Something Went Wrong', 'Please try again.')
                }
            }
        }
        else if (type === 'login') {
            let payload = {
                email: this.state.email,
                password: this.state.password
            }
            if(validateForm(this.state.errors)) this.props.getUserAuth(payload);
        }
    }

    render() {
        const {email, password, registrationEmail, registrationPassword, errors, 
            notificationAlert, title, type, alertValue, loading} = this.state;
        
        return (
            <>
            {loading ? <Spinner/> :
            <GridStyle>
                <section>
                    <BackgroundImage/>
                </section>
                <section style={{margin: 'auto 0'}}>
                    <Form email={email}
                        password={password}
                        registrationEmail={registrationEmail}
                        registrationPassword={registrationPassword}
                        onChange={this.onChangeHandler}
                        onClick={this.onClickHandler}
                        errors={errors}/>
                </section>
            </GridStyle>
            }
            {notificationAlert ? <Notification type={type} title={title} alertValue={alertValue}/> : null}
            </>
        )
    }
}

const Login = connect(({data}) => (data), {getCovidRequest, getUserAuth, showNotification})(LoginPage)
export {Login}
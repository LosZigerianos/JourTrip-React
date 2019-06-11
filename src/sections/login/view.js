import React, { Component } from 'react';
import { Container, Form, Card, Image } from 'react-bootstrap';
import { LoaderButton } from '../../widgets';
import logo from '../../resources/images/logo.png';
import validator from 'validator';

class Login extends Component {
    state = { loading: false, email: '', password: '', emailError: false, error: false };

    _handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state;

        // Validations
        if (!email && !password) {
            return this.setState({ error: true });
        }

        if (!validator.isEmail(email)) {
            return this.setState({ emailError: true });
        }

        // Call Login
        this.setState({ loading: true });
        this.setTimerID = setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    };

    _onChange = event => {
        this.setState({
            error: false,
            emailError: false,
            [event.target.name]:
                event.target.type === 'checkbox' ? event.target.checked : event.target.value,
        });
    };

    render() {
        const { loading, email, password, error, emailError } = this.state;
        return (
            <Container className="row col-md-12 justify-content-center m-0">
                <Card body className="row col-md-5 mt-5 pb-3">
                    <Image
                        src={logo}
                        alt="logo"
                        width="200"
                        height="60"
                        className="mt-3 mx-auto d-block"
                    />
                    <Form onSubmit={this._handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                name="email"
                                onChange={this._onChange}
                            />
                            {emailError && (
                                <Form.Label className="text-danger">Invalid Email</Form.Label>
                            )}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                name="password"
                                onChange={this._onChange}
                            />
                        </Form.Group>
                        <LoaderButton type="submit" block className="btn-theme" loading={loading}>
                            LOG IN
                        </LoaderButton>
                        {error && (
                            <Form.Label className="text-danger">
                                Email or password are required
                            </Form.Label>
                        )}
                    </Form>
                </Card>
            </Container>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.setTimerID);
    }
}

export default Login;

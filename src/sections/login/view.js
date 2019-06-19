import React, { Component } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import { LoaderButton, SVGLogo as Logo } from '../../widgets';
import validator from 'validator';

class Login extends Component {
    state = { email: '', password: '', emailError: false, error: false };

    _handleSubmit = event => {
        event.preventDefault();

        // Validations
        const { email, password } = this.state;

        if (!email || !password) {
            return this.setState({ error: true });
        }

        if (!validator.isEmail(email)) {
            return this.setState({ emailError: true });
        }

        // Call Login request
        const userCredentials = { email, password };
        this.props.login(userCredentials);
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
        const { email, password, error, emailError } = this.state;
        const { isFetching, isLoginError } = this.props;
        return (
            <Container className="row col-md-12 justify-content-center m-0">
                <Card body className="row col-md-5 mt-5 pb-3">
                    <Logo className="mt-3 mx-auto d-block" />
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
                        <LoaderButton
                            type="submit"
                            block
                            className="btn-theme"
                            loading={isFetching}
                        >
                            LOG IN
                        </LoaderButton>
                        {error && (
                            <Form.Label className="text-danger">
                                Email or password are required
                            </Form.Label>
                        )}
                        {isLoginError && (
                            <Form.Label className="text-danger">
                                Incorrect credentials
                            </Form.Label>
                        )}
                    </Form>
                </Card>
            </Container>
        );
    }
}

Login.defaultProps = {
    login: () => {},
    isFetching: false,
    isLoginError: false,
};

export default Login;

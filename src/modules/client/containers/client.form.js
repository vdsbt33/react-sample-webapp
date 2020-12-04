import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

export class ClientForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const readonly = this.props.readonly == 'true';
        console.log(readonly);

        return (
            <div>
                <h1>Client Form</h1>
                <br/>
                <Form name="client">
                    <Form.Item
                        label="Id"
                        name="id"
                        rules={[{ required: true, message: 'Campo obrigatório' }]}>
                    
                        <Input
                            id="id"
                            disabled />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Campo obrigatório' }]}>
                    
                        <Input
                            id="name"
                            disabled={readonly ? 'disabled' : null} />
                    </Form.Item>
                    
                    <Form.Item
                        label="Birth Date"
                        name="birthdate"
                        rules={[{ required: true, message: 'Campo obrigatório' }]}>
                    
                        <Input
                            id="birthdate"
                            disabled={readonly ? 'disabled' : null} />
                    </Form.Item>
                    
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[{ required: true, message: 'Campo obrigatório' }]}>
                    
                        <Input
                            id="birthdate"
                            disabled={readonly ? 'disabled' : null} />
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

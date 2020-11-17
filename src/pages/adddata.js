import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button } from 'react-bootstrap';

class AddData extends Component
{

    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            username: ""
        };

        this.simpanData = this.simpanData.bind(this);
    }

    async simpanData()
    {
        var url = "http://localhost/wsnative/simpan.php";
        var fd = new FormData();

        fd.append("firstname", this.state.firstname);
        fd.append("lastname", this.state.lastname);
        fd.append("username", this.state.username);

        axios({
            method: 'post',
            url: url,
            data: fd,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res => {

            console.log(res);

            if(res === 'berhasil')
            {
                alert('berhasil tambah data');
            }
            else
            {
                alert(res.data);
            }
            
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return (
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={this.state.username} 
                                onChange={(e)=> this.setState({username: e.target.value})}
                                placeholder="masukkan data" />
                        </Form.Group>

                        <Form.Group controlId="firstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={this.state.firstname} 
                                onChange={(e)=> this.setState({firstname: e.target.value})}
                                placeholder="masukkan data" />
                        </Form.Group>
                        <Form.Group controlId="lastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={this.state.lastname} 
                                onChange={(e)=> this.setState({lastname: e.target.value})}
                                placeholder="masukkan data" />
                        </Form.Group>
                        
                    </Form>

                    <Button variant="primary" onClick={() => this.simpanData()}>Simpan</Button>
                </Col>
            </Row>
        )
    } 
}

export default AddData;
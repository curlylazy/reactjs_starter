import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Form, Button } from 'react-bootstrap';

class EditData extends Component
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
        var url = "http://localhost/wsnative/update.php";
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
                alert('berhasil update data');
            }
            else
            {
                alert(res.data);
            }
            
        }).catch(function (error) {
            console.log(error);
        });
    }

    async readList(username)
    {
        var url = "http://localhost/wsnative/edit.php";
        var fd = new FormData();
        fd.append("username", username);

        axios({
            method: 'post',
            url: url,
            data: fd,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res => {

            console.log(res);
            let rows = res['data'];

            this.setState({ username: rows[0]['username'] });
            this.setState({ firstname: rows[0]['firstname'] });
            this.setState({ lastname: rows[0]['lastname'] });

        }).catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount()
    {
        const { match: { params } } = this.props;
        let username = `${params.id}`;
        
        this.readList(username);
    }

    render(){
        return (
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                readOnly
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

export default EditData;
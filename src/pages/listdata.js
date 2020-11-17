import React, { Component } from 'react';
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { Row, Col, Table, Button } from 'react-bootstrap';

class ListData extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            datalist: [],
        };

        this.readList = this.readList.bind(this);
        this.hapusData = this.hapusData.bind(this);
        this.editData = this.editData.bind(this);
    }
    
    async editData(username)
    {
        this.props.history.push('/edit/' + username);
    }

    async hapusData(username)
    {
        var url = "http://localhost/wsnative/delete.php";
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
            if(res === "berhasil")
            {
                alert("Hapus berhasil..");
            }
            else
            {
                alert(res.data);
            }

            this.readList();

        }).catch(function (error) {
            console.log(error);
        });
    }

    async readList()
    {
        var url = "http://localhost/wsnative/read.php";
        var fd = new FormData();

        axios({
            method: 'post',
            url: url,
            data: fd,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res => {

            console.log(res);
            let rows = res['data'];   
            this.setState({ datalist : [] });
            this.setState({ datalist : rows });  

        }).catch(function (error) {
            console.log(error);
        });
    }

    // saat page baru diload
    componentDidMount()
    {
        this.readList();
    }

    render(){
        return (
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>

                            { 
                                this.state.datalist.map((row, index) => {
                                    
                                    return (
                                        <tr key={index}>
                                            <th>{ index + 1 }</th>
                                            <th scope="row">{ row['username'] }</th>
                                            <td>{ row['firstname'] }</td>
                                            <td>{ row['lastname'] }</td>
                                            <td>
                                                <Button variant="secondary" size="sm"
                                                    onClick={() => this.editData(row['username'])}>
                                                    Edit
                                                </Button> 
                                                <Button 
                                                    variant="danger" size="sm"
                                                    onClick={() => this.hapusData(row['username'])}
                                                    style={{marginLeft: 5}} >
                                                    Hapus
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                    // no++;
                                })
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    } 
}

export default ListData;
import React, { Component } from 'react';
import axios from 'axios';
// import { useHistory } from "react-router-dom";
import { Row, Col, Table, Image, Card } from 'react-bootstrap';

class LisJsonOnlinetData extends Component
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
        var url = "http://www.omdbapi.com/?apikey=cfb82f51&s=harry%20potter";
        var fd = new FormData();

        axios({
            method: 'get',
            url: url,
            data: fd,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res => {

            // console.log(res['data']['Search']);
            
            let rows = res['data']['Search'];   
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
                    { 
                        this.state.datalist.map((row, index) => {
                            
                            return (
                                <Col xs={12} md={4} style={{ marginBottom: 20 }}>
                                    <Card key={index}>
                                        <Card.Img variant="top" src={ row['Poster'] } style={{ width: '100%', height: 250, objectFit: 'cover' }} />
                                        <Card.Body>
                                            <Card.Title>{ row['Title'] }</Card.Title>
                                            <Card.Text>
                                                Type : { row['Type'] } <br />
                                                imdbID : { row['imdbID'] } <br />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                            // no++;
                        })
                    }
                
            </Row>
        )
    } 
}

export default LisJsonOnlinetData;
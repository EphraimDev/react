import React, { Component } from 'react';
import {storage} from '../firebase';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state={
            image: null,
            url: '',
            progress: 0
        }
    }

    handleChange(e) {
        e.preventDefault();

        this.setState({[e.target.name]:e.target.files[0]});
    }

    handleSubmit(e) {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
            (snapshot) => {
                // progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress})
            },
            (error) => {
                // error function
                console.log(error)
            },
            () => {
                // complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({url:url})
                    console.log(url)
                })
            }
        );
    }

    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            <div style={style}>
            <progress value={this.state.progress} max="100" />
                <input name="image" type='file' onChange={evt => this.handleChange(evt)} />
                <button onClick={(event) => this.handleSubmit(event)}>Upload</button>
                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="" height="300" width="400"></img>
            </div>
        )
    }
}

export default ImageUpload;
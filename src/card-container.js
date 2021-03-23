import React from 'react';
import './card-container.css'
import ServiceApi from './service-api';
import Card from './card';

export default class CardContainer extends React.Component{
    
    
    serviceApi = new ServiceApi();

    
    state = {
        image: null,
        name: null,
        status: null,
       

        image2: null,
        name2: null,
        status2: null,
        season2: null,

        image3: null,
        name3: null,
        status3: null,
      

        image4: null,
        name4: null,
        status4: null,
       

        image5: null,
        name5: null,
        status5: null,
        arr: [1,2,3,4,5]
    }
    constructor(){
        super();
        this.updateClient();
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
    }
    updateClient(){



        this.serviceApi.getCharacter(this.state.arr[0])
        .then((character)=>{
            this.setState({
                image: character[0].img,
                name: character[0].name,
                status: character[0].status,
                
            });
        });

        this.serviceApi.getCharacter(this.state.arr[1])
        .then((character)=>{
            this.setState({
                image2: character[0].img,
                name2: character[0].name,
                status2: character[0].status,
                
            });
        });

        this.serviceApi.getCharacter(this.state.arr[2])
        .then((character)=>{
            this.setState({
                image3: character[0].img,
                name3: character[0].name,
                status3: character[0].status,
                
            });
        });

        this.serviceApi.getCharacter(this.state.arr[3])
        .then((character)=>{
            this.setState({
                image4: character[0].img,
                name4: character[0].name,
                status4: character[0].status,
                
            });
        });

        this.serviceApi.getCharacter(this.state.arr[4])
        .then((character)=>{
            this.setState({
                image5: character[0].img,
                name5: character[0].name,
                status5: character[0].status,
                
            });
        });

    }


    async handleClick1(){
        this.setState({
                arr: [1,2,3,4,5]
        })
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick2(){
        this.setState({
                arr: [6,7,8,9,10]
        })
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick3(){
        this.setState({
                arr: [11,12,13,14,15]
        })
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick4(){
        this.setState({
                arr: [16,17,18,19,20]
        })
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick5(){
        this.setState({
                arr: [21,22,23,24,25]
        })
        
        await this.updateClient();
        await this.updateField();

    }



    updateField(){
        this.updateClient();
    }


    render(){
    
    const {image, name, status, image2, name2, status2,  image3, name3, status3,  image4, name4, status4, image5, name5, status5} = this.state;
    
    return(
        <div>
        <div className="card-field container-fluid">
                
                <Card name={name} image={image} status={status}/>
                <Card name={name2} image={image2} status={status2}/>
                <Card name={name3} image={image3} status={status3}/>
                <Card name={name4} image={image4} status={status4}/>
                <Card name={name5} image={image5} status={status5}/>


                </div>
                <div>
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary" onClick={this.handleClick1}>1</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.handleClick2}>2</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.handleClick3}>3</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.handleClick4}>4</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.handleClick5}>5</button>
                                </div>
                            </div>
                </div>
        </div>
    )
    }
}

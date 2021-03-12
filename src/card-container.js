import React from 'react';
import './card-container.css'
import ServiceApi from './service-api';

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
        console.log("hi");
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick2(){
        this.setState({
                arr: [6,7,8,9,10]
        })
        console.log("hi");
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick3(){
        this.setState({
                arr: [11,12,13,14,15]
        })
        console.log("hi");
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick4(){
        this.setState({
                arr: [16,17,18,19,20]
        })
        console.log("hi");
        
        await this.updateClient();
        await this.updateField();

    }

    async handleClick5(){
        this.setState({
                arr: [21,22,23,24,25]
        })
        console.log("hi");
        
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
        <div className="card-field container-fluid ">
                
                <div className="card bg-secondary mb-3" > 
                    <div className="card-header">{name}</div>
                    <div className="card-body">
                        <img className="img" src={image}></img>
                        <p className="card-text">Status: {status}</p>
                    </div>
                </div>

                <div className="card bg-secondary mb-3" > 
                    <div className="card-header">{name2}</div>
                    <div className="card-body">
                        <img className="img" src={image2}></img>
                        <p className="card-text">Status: {status2}</p>    
                    </div>
                </div>

                <div className="card bg-secondary mb-3" > 
                    <div className="card-header">{name3}</div>
                    <div className="card-body">
                        <img className="img" src={image3}></img>
                        <p className="card-text">Status: {status3}</p>    
                    </div>
                </div>

                <div className="card bg-secondary mb-3" > 
                    <div className="card-header">{name4}</div>
                    <div className="card-body">
                        <img className="img" src={image4}></img>
                        <p className="card-text">Status: {status4}</p>    
                    </div>
                </div>

                <div className="card bg-secondary mb-3" > 
                    <div className="card-header">{name5}</div>
                    <div className="card-body">   
                        <img className="img"  src={image5} ></img>
                        <p className="card-text">Status: {status5}</p>
                       
                    </div>
                </div>
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

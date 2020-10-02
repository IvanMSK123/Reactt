import React, { Component } from 'react'

import Moment from 'react-moment'
import './Item.css'
import {Button ,Modal,Row,Col,Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';



// or less ideally

 export default class Preview extends Component {
    constructor(){
        super()
        this.state = {
            lists:[],
            
      isOldestFirst: true
        }
        //const cass=<Moment format="YYYY/MM/DD hh:mm:ss"/>; 
        
      
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
        
          this.render() 
            return(
          <div>{this.state.adress}</div>
            )
    

        
        
    }




    

    handleInputChange = (event) => {
        event.preventDefault()
       this.setState({//nastavuje hodnotu atributu ktoreho nazov je v name
           [event.target.name]: event.target.value
       })
    }

    fileChangedHandler = (event) =>{
      console.log('ahoj som v zapisovaci obrazka');
      //this.timeChangedHandler(event)
      
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState ===2 ){
          this.setState({selectedFile: reader.result})
        }
      }
      reader.readAsDataURL(event.target.files[0])
      this.handleSubmit(event);
    }


    timeChangedHandler = (event) => {
      console.log("hallo");
      const today= new Date();
  
      this.setState({cass: today})
    }
    

    addItem = (event) => {
      
      
      event.preventDefault()
      const data = this.state
      this.setState({lists:[...this.state.lists,data] });
      
        console.log("Final data is", data)

    }

    sortByNewFirst = (event) => {
      console.log("v usporiadaj od najnovsieho")
      this.state.lists.sort((a, b) => (a.cass < b.cass) ? 1 : (a.cass === b.cass) ? ((a.myFullName < b.myFullName) ? 1 : -1) : -1 )
      this.timeChangedHandler(event)
    }
    sortByNewLast = (event) => {
      this.state.lists.sort((a, b) => (a.cass > b.cass) ? 1 : (a.cass === b.cass) ? ((a.myFullName > b.myFullName) ? 1 : -1) : -1 )      
      this.timeChangedHandler(event)
    }

    toggleListReverse (event) {
      const {lists} = this.state
      let newPostList = lists.reverse()
      this.setState({
        lists: newPostList
      })
    }

     Example(props) {
      const [show, setShow] = React.useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            zobraziť všetko
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header >
            <Modal.Title><span>Meno a priezvisko: </span></Modal.Title>
            <div class="popis">{props.value}</div>
            </Modal.Header>

            <Modal.Header >
            <Modal.Title><span>Adresa: </span></Modal.Title>
            <div class="popis">{props.value2}</div>
            </Modal.Header>

            <Modal.Header >
            <Modal.Title><span>Cas pridania: </span></Modal.Title>
            <div class="popis">{props.value3}</div>
            </Modal.Header>

            <Modal.Header >
            <Modal.Title><span>Popis podnetu: </span></Modal.Title>
            <div class="popis">{props.value4}</div>
            </Modal.Header>
            <Modal.Footer>
            <img src={props.value5}></img>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }



    
  render () {
      const {myFullName} = this.state
      const {adress} = this.state
      const {descript} = this.state
      const {cass} = this.state
      const {selectedFile} = this.state


    return (


      <div>


        
<header>
        <h1 class="nadpis">Formular na pridavanie podnetov</h1>
        <form onSubmit={this.addItem}>
        <h4 >Meno a priezvisko:</h4>
            <div><input  value={myFullName} name='myFullName' placeholder="meno a priezvisko" onChange={this.handleInputChange}/></div>
            <h4 >Adresa:</h4>
            <div><input  value={adress} name='adress'  placeholder="adresa" onChange={this.handleInputChange}/></div>
            <h4 >Popis podnetu:</h4>
            <div><textarea  value={descript} name='descript' placeholder="popis podnetu" onChange={this.handleInputChange} /></div>
            <div id="upload">
            <input type="file" onChange={this.fileChangedHandler}/>
            <button className="tlacidlo" variant="success" onClick={this.timeChangedHandler}>Upload!</button>
            </div>
      <div>

      <h1 class="nadpis">Zoradiť podnety:</h1>
        <Button className="tlacidlo" variant="success" onClick={this.sortByNewFirst}>Od Najnovsieho</Button>{''}
        <Button className="tlacidlo" variant="success" onClick={this.sortByNewLast}>Od najstarsieho</Button>{''}
     
      
      </div>

        </form>
        </header>
        <div className="pictures">
              {this.state.lists.map((value,index) => 
              
                <div className="polozky" key = {index} >

                <div>
                <Container id="header">
                  <Row >
                    <Col xs={2} >
                      <span>meno: </span>
                    </Col>
                    <Col xs={10} class="roww">{value.myFullName}
                    </Col>
                  </Row>
                  <Row >
                    <Col xs={2} >
                      <span>adresa: </span>
                    </Col>
                    <Col xs={10} class="roww">{value.adress}
                    </Col>
                  </Row>
                </Container>
               
                    
                    <img src={value.selectedFile}></img>
                  </div>
                  <div id="tlacidlo">
                  <this.Example value={value.myFullName} value2={value.adress} value3={<Moment format="HH:mm:ss DD.MM.YYYY">{value.cass}</Moment>} value4={value.descript} value5={value.selectedFile}></this.Example>
                  
                    </div>
                </div>
              )
              }
            </div>

      
      </div>
    


    )
    
    


  }

}



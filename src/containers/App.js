import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import { cricketers } from '../Cricketers';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
class App extends Component {
    constructor(){
        super()
        this.state = {
            cricketers: [],
            searchfield : ''
        }
    }
    componentDidMount(){
        this.setState({cricketers:cricketers});
    }
    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value})
    }
    render(){
        const filteredcricketers = this.state.cricketers.filter(cricketers =>{
            return cricketers.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.cricketers.length === 0){
            return <h1>LOADING...</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'> CRICKETERS </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <br/>
                    <Cardlist cricketers={filteredcricketers} />
                    </Scroll>
                    <h1>THANK YOU</h1>
                </div>
            );
        }
    }
}

export default App;
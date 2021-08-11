import React, {Component} from 'react'
class FooterComponent extends Component {

    render(){
        return (
            <footer className="text-center">Gracias por usar Appimotion { new Date().getFullYear() }</footer>
        );
    }
}

export default FooterComponent
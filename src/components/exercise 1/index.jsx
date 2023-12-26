import React from "react";
import "./style.scss"


class Exercise1 extends React.Component {


    state = {
        count: +(this.props.number),
       
    }
    minus = () => {
        this.count--
        if(this.state.count > 1){
            this.setState({ count: --this.state.count })

        }


    }


    plyus = () => {

        this.count++
        this.setState({ count: ++this.state.count })
    }

 
    render() {
        return <>

            <div className={'box'}>

                <p className={'number'} >{this.state.count}</p>
                <div className={'mini-box'}>
                    <button className={`minus `} onClick={this.minus}>- </button>
                    <button className={'plus'} onClick={this.plyus}>+</button>
                </div>

            </div>





        </>
    }
}

export default Exercise1
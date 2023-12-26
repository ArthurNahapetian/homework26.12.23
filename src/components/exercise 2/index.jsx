import React from "react";
import "./style.scss"


class Exercise2 extends React.Component {


    state = {
        ellipsis: false
    }
    showText = () => {
        this.setState({ ellipsis: !this.state.ellipsis })
        
    }

    render() {
        return <div className={'flex'}>


            <p  className={`lorem  ${this.state.ellipsis ? 'newClass' : 'ellipsis'} `} >{this.props.showText}


                loremgetwgkjhwrlguhwiltughwlriwrktjgnwlr
                kjgtnelrtkjgwnrljgtnrltgjnlerjngtliloremg
                etwgkjhwrlguhwiltughwlriwrktjgnwlrkjgtnel
                rtkjgwnrljgtnrltgjnlerjngtliloremgetwgkjh
                wrlguhwiltughwlriwrktjgnwlrkjgtnelrtkjgwn
                rljgtnrltgjnlerjngtliloremgetwgkjhwrlguhw
                iltughwlriwrktjgnwlrkjgtnelrtkjgwnrljgtnr
                
            </p>
          <p className={`rotate ${this.state.ellipsis ? 'rotate1' : 'rotate'} `} onClick={this.showText} >></p>



        </div>
    }
}

export default Exercise2
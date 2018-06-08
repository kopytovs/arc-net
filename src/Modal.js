import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'

import RichTextEditor from 'react-rte';

import closeModal from './resources/close-modal.svg';

class Modal extends React.Component{ 
    constructor(props){
        super(props);

        this.state = {
            value: RichTextEditor.createEmptyValue()
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value){
        this.setState({value});
        if (this.props.onChange) {
            this.props.onChange(
                value.toString('html')
            );
        }
    }

    render(){
        return(
            <div className="modal">

                <div className="modal-wrap"> 
                    <img src={closeModal} className='modal-close-button' onClick={this.props.openModal} />
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Название"/>

                    <RichTextEditor
                        value={this.state.value}
                        onChange={this.onChange}
                    />


                    <div className='button modal-button'> Прикрепить фото </div>
                </div>
                <div className="modal-background" onClick={this.props.openModal}> 
                
                </div>
               
            </div>
        )
    }
}

export default Modal;
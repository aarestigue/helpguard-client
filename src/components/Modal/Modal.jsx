import React from 'react'
import {useState} from 'react'

function Modal(props) {

    const [name, setName] = useState()

    const {open, onClose} = props;
    if (!open) {
        return (null)
    }

    else {
        return (
            <div className='overlay'>
                <div className="modal-container">
                    <div className="modal-head">
                    <label for="modal-container" onClick={onClose} class="btn btn-sm btn-circle right-2 top-2">✕</label>
                        <h3>Create a new company</h3>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Company name</span>
                            </label>

                            <label className="input-group">
                
                            <input type="text" name="name" placeholder="Enter a value" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>

                        
                        <button>Create</button>

                        </form>
                    </div>
            
                </div>
            </div>
          )
    }

  
}

export default Modal
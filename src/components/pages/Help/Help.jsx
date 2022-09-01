import React from 'react'

function Help() {
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Get a Helpguard to contact you</h1>
            <p className="py-6">We'll send help in less than 15 minutes. Promise.</p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
         <input type="text" name='subject' placeholder="Subject" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea class="textarea textarea-bordered" placeholder="What can we do for you?"></textarea>
          
        </div>


        <label className="label">
            <span className="label-text">Category</span>
        </label>
        <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Choose an option</option>
        <option>Technical issue</option>
        <option>How to</option>
        <option>Sales question</option>
        </select>


        <div className="form-control mt-6">
          <button className="btn btn-primary">Ask for help</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Help
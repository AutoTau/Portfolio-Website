import React from "react";
import { useForm } from "react-hook-form";

const PortfolioForm = ({onSubmit}) => {
    
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    {...register("title")}
                    type="text"
                    className="form-control"
                    id="title" />
            </div>

            <div className="form-group">
                <label htmlFor="city">Company</label>
                <input
                    {...register("company")}
                    type="text"
                    className="form-control"
                    id="company" />
            </div>

            <div className="form-group">
                <label htmlFor="city">Company Website</label>
                <input
                    {...register("companyWebsite")}
                    type="text"
                    className="form-control"
                    id="companyWebsite" />
            </div>

            <div className="form-group">
                <label htmlFor="street">Location</label>
                <input
                    {...register("location")}
                    type="text"
                    className="form-control"
                    id="location" />
            </div>

            <div className="form-group">
                <label htmlFor="street">Job Title</label>
                <input
                    {...register("jobTitle")}
                    type="text"
                    className="form-control"
                    id="jobTitle" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    {...register("description")}
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description">
                </textarea>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <div>
                    {/* Date picker here */}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <div>
                    {/* Date picker here */}
                </div>
            </div>
            <input
                type="submit"
                className="btn btn-primary">
            </input>
        </form>
    )
}

export default PortfolioForm;
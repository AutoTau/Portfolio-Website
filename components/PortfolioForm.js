
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";


const PortfolioForm = ({ onSubmit, initialData= {} }) => {

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({defaultValues: initialData});
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        register('startDate');
        register('endDate');
    }, [register])


    useEffect(() => {
        const { startDate, endDate } = initialData;
        if (startDate) { setStartDate(new Date(startDate)) }
        if (endDate) { setEndDate(new Date(endDate)) }
                
    }, [initialData])

    const handleDateChange = (dateType, setDate) => date => {
        setValue(dateType, date);
        setDate(date);
    }

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
                    <DatePicker
                        showYearDropdown
                        selected={startDate}
                        onChange={handleDateChange('startDate', setStartDate)}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <div>
                    <DatePicker
                        showYearDropdown
                        selected={endDate}
                        onChange={handleDateChange('endDate', setEndDate)}
                    />
                </div>
            </div>
            
            <div className="form-group">
                {endDate &&
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDateChange('endDate', setEndDate)(null)}>
                        No End Date
          </button>
                }
                {!endDate &&
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={
                            () => handleDateChange('endDate', setEndDate)(new Date(new Date().setHours(0, 0, 0, 0)))}>
                        Set End Date
          </button>
                }
            </div>
            <input
                type="submit"
                className="btn btn-primary">
            </input>
        </form>
    )
}

export default PortfolioForm;
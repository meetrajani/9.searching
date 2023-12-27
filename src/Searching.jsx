import React, { useState } from "react";
import { data } from "./data";

const Searching = () => {
    const [search, setsearch] = useState("")
  return (
    <div>
        <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"><h1>Search</h1></label>
                <input type="search" onChange={(e) => setsearch(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="search" />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((item) => {
                        return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search)
                    }).map((val, index) => {
                        return (
                            <tr key={index}>
                                <th>{val.id}</th>
                                <th>{val.first_name}</th>
                                <th>{val.last_name}</th>
                                <th>{val.email}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    </div>
  )
}

export default Searching
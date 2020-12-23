import React, {Component} from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [
        {
          name: "DR. SHANTILAL KISHAN SHARMA",
          MBSNumber: "7894563210",
          branch: "Pune",
          state: "Maharashtra",
          status: "Chairman",
        },
        {
          name: "DR. KIRAN DESHPANDE",
          MBSNumber: "7894563210",
          branch: "Kharnar",
          state: "Hyderabad",
          status: "Convenor",
        },
        {
          name: "DR. DINESH RATHI",
          MBSNumber: "7894563210",
          branch: "Panji",
          state: "Goa",
          status: "Treasurer",
        },
      ],
      currentDoctor: {},
      branch: "",
      place: "",
      doctorName: "",
    };
  }

  handleChangeBranch = (event) => {
    this.setState({ branch: event.target.value });
  };

  handleChangePlace = (event) => {
    this.setState({ place: event.target.value });
  };
  handleChangeName = (event) => {
    this.setState({ doctorName: event.target.value });
  };
  search = (event) => {
    event.preventDefault();
    console.log(this.state.branch + " " + this.state.place);
    let b = this.state.branch;
    let p = this.state.place;
    let n = this.state.doctorName;
    console.log(b + " " + p + " " + n);
    const temp = this.state.doctors.filter((o) => {
      if (o.branch === b && o.state === p && o.name === n) {
        return o;
      }
      return 0;
    });
    if(temp[0] === undefined){
      alert("Doctor not found, select some other value !")
    }else{
      this.setState({
        currentDoctor: temp[0],
      });
    }
   
  };
  filterBranch = () => {
    let distinctBranch = [];
    this.state.doctors.map((obj) => distinctBranch.push(obj.branch));
    distinctBranch = [...new Set(distinctBranch)];
    return distinctBranch;
  };

  filterPlace = () => {
    let distinctPlace = [];
    this.state.doctors.map((obj) => distinctPlace.push(obj.state));
    distinctPlace = [...new Set(distinctPlace)];
    return distinctPlace;
  };
  filterName = () => {
    let distinctPlace = [];
    this.state.doctors.map((obj) => distinctPlace.push(obj.name));
    distinctPlace = [...new Set(distinctPlace)];
    return distinctPlace;
  };
  render() {
    console.log(this.state.currentDoctor);
    return (
      <div className="form-container Search__MainDiv">
        <div className="row Search__row  align-items-end">
          <div className="col-md-5 col-sm-12" id="form-card">
            <h5 className="Search__txthead">SEARCH NIMA MBS DETAILS</h5>
            <p className="Search__para">
              Welcome to the official website of the NATIONAL INTEGRATED MEDICAL
              Association, the premier organisation OF AYUSH PRACTITIONERS in
              India. NIMA is the dignity and honour of its members.
            </p>
            <form id="form" onSubmit={this.search}>
              <select
                className="form-control Search__select"
                onChange={this.handleChangeBranch}
                name="branch"
              >
                <option value="">Select Branch</option>
                {this.filterBranch().map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                className="form-control mt-3 Search__select"
                name="place"
                onChange={this.handleChangePlace}
              >
                <option value="">Select Place</option>
                {this.filterPlace().map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                className="form-control mt-3 Search__select mb-5"
                name="place"
                onChange={this.handleChangeName}
              >
                <option value="">Select Name</option>
                {this.filterName().map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn btn-primary Search__btn">
                SEARCH
              </button>
            </form>
          </div>
          <div className="col-md-7 col-sm-12 ml-0 pl-0">
            <div className="desktop">
              <table className="Search__table">
                <tr>
                  <td className="Search__title">Name</td>
                  <td className="Search__data">
                    {this.state.currentDoctor.name}
                  </td>
                </tr>
                <tr>
                  <td className="Search__title">MBS Number</td>
                  <td className="Search__data">
                    {this.state.currentDoctor.MBSNumber}
                  </td>
                </tr>
                <tr>
                  <td className="Search__title">Branch</td>
                  <td className="Search__data">
                    {this.state.currentDoctor.branch}
                  </td>
                </tr>
                <tr>
                  <td className="Search__title">Place</td>
                  <td className="Search__data">
                    {this.state.currentDoctor.state}
                  </td>
                </tr>
                <tr>
                  <td className="Search__title">Status</td>
                  <td className="Search__data">
                    {this.state.currentDoctor.status}
                  </td>
                </tr>
              </table>
            </div>
            {/*  <div className="mobile">
              <div className="mobile"></div>
    </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
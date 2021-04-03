import React, { Component } from "react";
import "./EntryListItem.css";
import { format, parseISO } from 'date-fns'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import config from "../config";

class EntryListItem extends Component {
  state = {
    myEntries: this.props.allEntries
  }
  // state = {
  //   plant_id: this.props.id,
  //   user_id: 1,
  // };

  // handleAddToMyList = (e) => {
  //   e.preventDefault();

  //   const postBody = {
  //     plant_id: this.props.id,
  //     user_id: this.state.user_id,
  //   };

  //   fetch(`${config.API_ENDPOINT}/users/1/plants`, {
  //     method: "POST",
  //     body: JSON.stringify(postBody),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         return res.json().then((error) => {
  //           throw error;
  //         });
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       this.props.history.push("/my-plants");
  //     });
  // };
  //-------------------

  deleteFromMyList = (e, id) => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/entries/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
      // this.props.componentDidMount();
      this.handleDeleteFromMyList();
      alert("Entry deleted.");
      this.props.history.push("/all-entries")
    });

  };

  handleDeleteFromMyList = (userEntry) => {
    this.setState({
      myEntries: this.state.myEntries.filter(
        (entry) => entry.id !== userEntry
      ),
    });
  };

  render() {
    const { id, title, mood, description, modified } = this.props; // eslint-disable-line
    return (
      <div className="EntryListItem">
        {/* <form onSubmit={this.deleteFromMyList(id)}> */}
          <label value={this.props.id} className="PlantListItem__plantName">
            <h2>{title}</h2>
            <p>{format(parseISO(modified), "yyyy-MM-dd")}</p>
            <p>{mood}</p>
            <p>{description}</p>
          </label>
          <div className="DeletePlant">
            <button
              type="button"
              onClick={(e) => this.deleteFromMyList(e, id)}
              className="DeletePlant__button"
            >
              <FontAwesomeIcon icon={faMinus} /> <br />
              Remove from my list
            </button>
          </div>

          {/* <div className="ControlBar">
            <button type="submit" className="ControlBar__button">
              <FontAwesomeIcon icon={faMinus} /> <br />
              Add to my list
            </button>
          </div> */}
        {/* </form> */}
      </div>
    );
  }
}

export default EntryListItem;

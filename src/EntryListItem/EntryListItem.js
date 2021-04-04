import React, { Component } from "react";
import "./EntryListItem.css";
import { format, parseISO } from 'date-fns'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import config from "../config";

class EntryListItem extends Component {
  state = {
    entryData: this.props.allEntries,
    filteredData: this.props.allEntries
  }

  //-------------------

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
      this.handleDeleteFromMyList();
      alert("Entry deleted.");
      this.props.history.push("/all-entries")
    });

  };

  handleDeleteFromMyList = (userEntry) => {
    this.setState({
      entryData: this.state.entryData.filter(
        (entry) => entry.id !== userEntry
      ),
    });
  };

  render() {
    const { id, title, mood, description, modified } = this.props; // eslint-disable-line
    return (
      <div className="EntryListItem">
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
              className="DeleteEntry__button"
            >
              <FontAwesomeIcon icon={faMinus} /> <br />
              delete entry
            </button>
          </div>
      </div>
    );
  }
}

export default EntryListItem;

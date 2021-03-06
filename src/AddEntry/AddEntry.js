import React, { Component } from "react";
import config from "../config";
import "./AddEntry.css";

class AddEntry extends Component {
  state = {
    title: "",
    description: "",
    mood: "",
    author: 1,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const postBody = {
      title: this.state.title,
      description: this.state.description,
      mood: this.state.mood,
    };

    fetch(`${config.API_ENDPOINT}/entries`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        this.props.history.push("/all-entries");
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="AddEntry">
        <header>
          <h1>Add New Moodly Entry</h1>
        </header>

        <form id="record-entry" onSubmit={this.handleSubmit}>
          <section className="form-section overview-section">
            <label htmlFor="title">Title</label>

            <br />

            <input
              type="text"
              id="title"
              value={this.state.title}
              name="title"
              placeholder="i.e., I passed my interview"
              onChange={this.handleChange}
              required
            />
          </section>
          <section className="form-section overview-section">
            <label htmlFor="description">Moodly entry description</label>

            <br />

            <textarea
              name="description"
              id="description"
              rows="15"
              value={this.state.description}
              placeholder="i.e., Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat. Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis."
              required
              onChange={this.handleChange}
            />
          </section>

          <section className="form-section mood-section">
            <h2>Mood</h2>

            <input
              type="radio"
              name="mood"
              id="mood-happy"
              value="happy"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-happy">
              <span>happy</span>
            </label>

            <br />

            <input
              type="radio"
              name="mood"
              id="mood-sad"
              value="sad"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-sad">
              <span>sad</span>
            </label>

            <br />

            <input
              type="radio"
              name="mood"
              id="mood-content"
              value="content"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-content">
              <span>content</span>
            </label>

            <br />

            <input
              type="radio"
              name="mood"
              id="mood-angry"
              value="angry"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-angry">
              <span>angry</span>
            </label>

            <br />

            <input
              type="radio"
              name="mood"
              id="mood-frustrated"
              value="frustrated"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-frustrated">
              <span>frustrated</span>
            </label>

            <br />
            <input
              type="radio"
              name="mood"
              id="mood-anxious"
              value="anxious"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-anxious">
              <span>anxious</span>
            </label>

            <br />

            <input
              type="radio"
              name="mood"
              id="mood-excited"
              value="excited"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-excited">
              <span>excited</span>
            </label>

            <br />

            <input
              type="radio"
              name="mood"
              id="mood-other"
              value="other"
              className="mood-radio"
              onChange={this.handleChange}
            />
            <label htmlFor="mood-other">
              <span>other</span>
            </label>
          </section>

          <section className="button-section">
            <button className="add-entry-button" type="submit">
              SUBMIT
            </button>
          </section>
        </form>
      </div>
    );
  }
}

export default AddEntry;

import React from "react";

export default class FlatListDemo extends React.Component {
  state = {
    loading: true,
    jobs: [],
  };

  async componentDidMount() {
    const url = "http://localhost:5000";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ jobs: data, loading: false });
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.jobs.length) {
      return <div>didn't get a job</div>;
    }



    return (
      <div>
        {this.state.jobs.map((job) => (
          <div>
            <div>{job.title}</div>
            <div>{job.start_date}</div>
          </div>
        ))}
      </div>
    );
  }
}

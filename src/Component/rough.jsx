<div className="main-content">
  <img
    src={this.state.imageUrl}
    alt=""
    className="image"
    width={"100px"}
    height={"100px"}
  />
  <h4>Pizza</h4>
  <p>{"266"} calories</p>
  <input
    type="number"
    min={"0"}
    value={this.state.inputValue}
    onChange={(e) => this.setState({ inputValue: e.target.value })}
  />
  <button onClick={this.resetToZero}>reset</button>
  <h3>
    {this.state.inputValue} apple = {this.state.inputValue * 266} calories
  </h3>
</div>;

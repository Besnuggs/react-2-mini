import React, { Component } from 'react';
// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      fontColor: 'black',
      fontSize: '12px',
      fontFamily: 'monospace',
      allowEdit: true
    }
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

updateColor(value){
  this.setState({
    fontColor:value
  })
}

updateSize(value){
  this.setState({
    fontSize: value
  })
}

updateFamily(value){
    this.setState({
      fontFamily: value
    })
  }

updateEditStatus(value){
  if (value === 'true'){
    this.setState({
      allowEdit: true
    })
  } else {
    this.setState ( {
      allowEdit: false
    })
  }
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle 
          updateEditStatus={this.updateEditStatus}
          />
          <ColorChanger 
          updateColor={this.updateColor}
          editColor={this.state.allowEdit}/>
          <SizeChanger
          updateSize={this.updateSize}
          editSize={this.state.allowEdit}
          />
          <FamilyChanger 
          updateFamily={this.updateFamily}
          editFamily={this.state.allowEdit}
          />
        </div>
        <div className="textArea">
          <TextContainer 
          color={this.state.fontColor}
          fontSize={this.state.fontSize}
          family={this.state.fontFamily} 
          editT={this.state.allowEdit}
          />
        </div>
      </div>
    )
  }
}

export default App;

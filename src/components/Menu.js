import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickMenu() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='menu-card'>
        <div
          className='menu-item'
        >
          <div className='left'>
            <p className='title'>{this.props.name}</p>
            <p className='text'>{this.props.text}</p>
            <button
              className='modal-open-btn'
              onClick={() => this.handleClickMenu()}
            >
              {this.props.name}
            </button>
          </div>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );
  }
}

export default Menu;
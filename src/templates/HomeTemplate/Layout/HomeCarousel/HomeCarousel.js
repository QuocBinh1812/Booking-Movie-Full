import React, { Component } from "react";

import RBCarousel from "react-bootstrap-carousel";
import "./HomeCarouse.scss";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { ButtonGroup, Col, Row } from "react-bootstrap";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
import { connect } from "react-redux";
import { PlayCircleOutlined } from "@ant-design/icons";

const styles = { height: 500, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class HomeCarousel extends Component {
  getApi = () => {
    const action = getCarouselAction();
    this.props.dispatch(action);
  };
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };

  renderPhim = () => {
    console.log("arrCarousel ", this.props.arrImg);

    return this.props.arrImg.arrImg.map((phim, index) => {
      return (
        <div key={index}>
          <img className="w-full h-full" src={phim.hinhAnh} />
          <div className="carousel-center">
            <PlayCircleOutlined
              className="hover:opacity-50"
              style={{ fontSize: "60px", color: "white", cursor: "pointer" }}
            ></PlayCircleOutlined>
          </div>
          <div className="carousel-caption"></div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid boxShadow ">
        <Row>
          <Col span={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <RBCarousel className="carousel-fade " version={4}>
              {this.renderPhim()}
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
  componentDidMount() {
    this.getApi();
  }
}
const mapStateToProps = (state) => ({
  arrImg: state.CarouselReducer,
});

export default connect(mapStateToProps)(HomeCarousel);

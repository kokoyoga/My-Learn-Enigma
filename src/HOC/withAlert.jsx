import React from "react";

export const withalert = (InnerComponent) => {
  class WrapperComponent extends React.Component {
    render() {
      return <InnerComponent {...this.props} />;
    }
  }
  return WrapperComponent;
};

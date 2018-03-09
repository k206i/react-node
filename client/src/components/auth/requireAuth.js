import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentification extends Component {
    static contextTypes = {
      router: React.PropTypes.object,
    };

    componentWillMount() {
      if (!this.props.authentificated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authentificated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authentificated: state.auth.authenticated,
    };
  }
  return connect(mapStateToProps)(Authentification);
}
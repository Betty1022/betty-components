import React, {Component} from 'react';

type IState = {
  component: any;
}

export default function asyncComponent(importComponent: any): React.ReactNode {
  class AsyncComponent extends Component<{}, IState> {
    isUnMounted = false;

    constructor(props: any) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount(): Promise<any> {
      const {default: component} = await importComponent();

      if (this.isUnMounted) {
        return;
      }

      this.setState({
        component
      });
    }

    render(): React.ReactNode {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <div>null</div>;
    }

    componentWillUnmount(): void {
      this.isUnMounted = true;
    }
  }

  return AsyncComponent;
}

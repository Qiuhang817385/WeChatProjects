import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';

const mapStateToProps = (state, ownProps) => ({
  // counter: state.counter
})
const mapDispatchToProps = {

}
@connect(
  mapStateToProps, mapDispatchToProps
)
class Index extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }

  state = {}

  componentWillMount () { }
  componentDidMount () { }
  componentWillReceiveProps (nextProps, nextContext) { }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }
  componentDidCatchError () { }
  componentDidNotFound () { }
  render () {
    // const { counter } = this.props;
    return (
      <View>
        zsas
        {/* country{counter} */}

      </View>
    );
  }
}
export default Index;
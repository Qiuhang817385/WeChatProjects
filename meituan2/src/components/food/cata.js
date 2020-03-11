import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './cata.scss'
import { connect } from '@tarojs/redux';

@connect(({ cataReducer }) => ({ cataReducer }))
class Cata extends PureComponent {

  config = {
    navigationBarTitleText: ''
  }


  render () {
    // console.log("this.props.cataReducer", this.props.cataReducer)
    let { cataReducer } = this.props;
    return (
      <View className='cata'>
        {
          cataReducer.cata.map((item) => {
            return (
              <Text className='cata_name'>
                {item.name}
              </Text>
            )
          })
        }
      </View>
    );
  }
}
export default Cata;
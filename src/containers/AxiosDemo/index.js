import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getData } from '../../redux/actions/axios';

const Axios = (props) => {
  const { loading = false, getMockData } = props;
  useEffect(() => {
    getMockData();
    return () => {
      console.log('args2:');
    }
  }, [])
  return (
    <div>
      <button onClick={() => { getMockData(); }}>获取数据</button>
      <h3>{`${loading}`}</h3>
    </div>
  );
}

const mapStateToProps = (state = {}) => {
  const { axios } = state;
  return {
    ...axios,
  }
}

export default connect(mapStateToProps, {
  getMockData: getData
})(Axios)
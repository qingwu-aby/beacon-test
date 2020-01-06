// import React from 'react';
// import { InfiniteLoader, List } from 'react-virtualized';

// interface IProps {
//   remoteRowCount: Function;
//   rowRenderer: Function;
//   isRowLoaded: Function;
//   loadMoreRows: Function;
//   rowCount: Function;
// }

// const InfiniteList: React.FC<IProps> = ({
//   remoteRowCount,
//   rowRenderer,
//   isRowLoaded,
//   loadMoreRows,
//   rowCount
// }) => {
//   return <InfiniteLoader
//     isRowLoaded={isRowLoaded}
//     loadMoreRows={loadMoreRows}
//     rowCount={remoteRowCount}
//   >
//     {({ onRowsRendered, registerChild }) => (
//       <List
//         height={200}
//         onRowsRendered={onRowsRendered}
//         ref={registerChild}
//         rowCount={remoteRowCount}
//         rowHeight={20}
//         rowRenderer={rowRenderer}
//         width={300}
//       />
//     )}
//   </InfiniteLoader>
// }

// export default InfiniteList;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import VerticalItem from './Item/VerticalItem';
import { fetchListReq } from 'store/list/list';
import HorizontalItem from './Item/HorizontalItem';
import style from './style.module.scss';

const prefixCls = 'mall-list-infinte';

interface IProps {
  fetchListReq: Function;
}

const InfiniteList: React.FC<IProps> = ({
  fetchListReq
}) => {
  useEffect(() => {
    fetchListReq()
  }, [fetchListReq])
  return <div className={style[prefixCls]}>
    {
      [1, 2,3,4,5,6,7].fill(10).map(_ => <HorizontalItem />)
    }
  </div>
}

export default connect((state: any) => ({
  isLoading: state.goods.isLoading
}), {
  fetchListReq
})(InfiniteList);

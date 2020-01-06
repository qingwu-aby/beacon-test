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
import React from 'react';

const InfiniteList: React.FC = () => {
  return <div>DdD</div>
}

export default InfiniteList;

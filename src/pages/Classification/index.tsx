import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { fetchCategoryReq } from 'store/category/category';
import { categoryListSelector } from 'selectors/category';
import Search from 'components/Search';
import Loading from 'components/Loading';
import Category from './Category';

interface IProps {
  fetchCategoryReq: (T?: number) => {};
  categoryList: any;
}

const Classification: React.FC<IProps> = ({
  fetchCategoryReq,
  categoryList
}) => {
  useEffect(() => {
    fetchCategoryReq()
  }, [fetchCategoryReq])
  return <Suspense fallback={<Loading />}>
    <section style={{ 'overflow': 'hidden', 'height': '100%' }}>
      <Search />
      <Category categoryList={categoryList}/>
    </section>
  </Suspense>
}

export default connect((state: any) => ({
  categoryList: categoryListSelector(state)
}), {
  fetchCategoryReq
})(Classification);

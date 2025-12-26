import React from 'react';
import Header from '../components/common/Header'; 
import DetailTop from '../components/detail/DetailTop';
import DetailContent from '../components/detail/DetailContent';
import DetailPick from '../components/detail/DetailPick';
import DetailKeyword from '../components/detail/DetailKeyword';

const DetailPage = () => {
  return (
    <div className="detail-page">
      <Header />
      <main>
        <DetailTop />
        <DetailContent />
        <DetailPick />
        <DetailKeyword />
      </main>
    </div>
  );
};

export default DetailPage;

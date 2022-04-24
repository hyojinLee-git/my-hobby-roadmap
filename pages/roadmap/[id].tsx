import { useRouter } from 'next/router';
import React from 'react';

function RoadmapDetail() {
  const router = useRouter();
  const { id } = router.query;
  return <div>roadmap:{id}</div>;
}

export default RoadmapDetail;
